import {extend} from "flarum/common/extend";
import CommentPost from "flarum/forum/components/CommentPost";
import PostStream from "flarum/forum/components/PostStream";

export default function () {
  let pushed = []
  extend(PostStream.prototype, 'oncreate', function (item) {
    let ids = []
    let posts = this.discussion.data.relationships.posts.data
    posts.forEach((item, index) => {
      if (index === 0 || index === posts.length - 1) {
        pushed.push(item.id)
      } else {
        if (pushed.findIndex(val => item.id === val) < 0) {
          ids.push(item.id)
        }
      }
    })
    if (ids.length > app.forum.data.attributes.count_number) {
      pushed.push(...randomIds(ids, app.forum.data.attributes.count_number-2))
    } else {
      pushed.push(...randomIds(ids, ids.length))
    }
  })
  extend(CommentPost.prototype, 'oncreate', function (view) {
    if ((app.current.data.routeName === 'discussion' || app.current.data.routeName === 'discussion.near') && app.forum.data.attributes.products && pushed.length > 0) {
      const products = app.forum.data.attributes.products
      if (products.length > 0) {
        let id = this.attrs.post.data.id;
        if (pushed.findIndex(val => id === val) >= 0) {
          let product = products[Math.floor(Math.random() * products.length)]
          this.element.insertAdjacentHTML('afterend', `<div class='product_area'>
      <a href='${product.link}' target='_blank'>
        <span class="product_ad">Ad</span>
        <span class='product_discount'>券后:&yen;${product.finallyPrice}</span>
        ${product.name}
      </a>
    </div>`)
        }
      }
    }

  })

  function randomIds(arr, ranNum) {
    let result = []
    for (let i = 0; i < ranNum; i++) {
      let ran = Math.floor(Math.random() * (arr.length - i));

      result.push(arr[ran]);

      arr[ran] = arr[arr.length - i - 1];
    }
    return result
  }
}
