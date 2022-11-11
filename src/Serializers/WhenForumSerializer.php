<?php

namespace Jinber\JDUnion\Serializers;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class WhenForumSerializer
{
    public function __construct(private SettingsRepositoryInterface $settings)
    {
    }

    public function __invoke(ForumSerializer $serializer, $module)
    {
        $count = $this->settings->get('jinber-union.count_page');
        if ($count === null || $count === '') {
            $count = 5;
        }
        return ['products' => $this->getJdUnionProduct(), 'count_number' => $count];
    }

    private function getJdUnionProduct()
    {
        date_default_timezone_set('Asia/Chongqing');

        try {
            $client = new \JdClient();
            $key = $this->settings->get('jinber-union.jdunion_appkey');
            $secret = $this->settings->get('jinber-union.jdunion_appsecretkey');
            if ($key === '' || $key === null) {
                $key = 'b2551d2485cf5974c675b144725424fb';
            }
            if ($secret === '' || $secret === null) {
                $secret = 'b38cb37336884e1eb404768e2672a8c8';
            }
            $client->appKey = $key;
            $client->appSecret = $secret;
            $request = new \UnionOpenGoodsJingfenQueryRequest();
            $request->setVersion('1.0');
            $ids = $this->settings->get('jinber-union.jdunion_eid');
            $eid = [];
            if ($ids !== null) {
                $eid = explode('|', $ids);
            }
            $eid = array_filter($eid);
            if (count($eid) === 0) {
                $eid = [1, 2, 10];
            }
            $request->setGoodsReq([
                'eliteId' => $eid[array_rand($eid)],
                'pageSize' => 20,
            ]);
            $response = $client->execute($request);
            $products = [];
            if ($response->jd_union_open_goods_jingfen_query_responce) {
                $result = json_decode($response->jd_union_open_goods_jingfen_query_responce->queryResult, true);
                if ($result['code'] === 200 && isset($result['data']) && count($result['data']) > 0) {
                    foreach ($result['data'] as $item) {
                        $product = [
                            'name' => $item['skuName']
                        ];
                        if (is_array($item['couponInfo']) && is_array($item['couponInfo']['couponList']) && count($item['couponInfo']['couponList']) > 0) {
                            $product['discount'] = $item['couponInfo']['couponList'][0]['discount'];
                            $product['link'] = $item['couponInfo']['couponList'][0]['link'];
                        } else {
                            $product['link'] = $item['materialUrl'];
                            $product['discount'] = 0;
                        }
                        $product['owner'] = $item['owner'] === 'g' ? '京东自营' : '京东';
                        $product['price'] = $item['priceInfo']['price'];
                        $product['finallyPrice'] = $item['priceInfo']['lowestCouponPrice'];
                        if (isset($item['imageInfo']['whiteImage'])) {
                            $product['image'] = $item['imageInfo']['whiteImage'];
                        } else {
                            $product['image'] = $item['imageInfo']['imageList'][0]['url'];
                        }
                        $products[] = $product;
                    }
                }
            }
        } catch (\Exception $e) {
            die();
        }

        return $products;
    }
}
