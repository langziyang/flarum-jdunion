import Component from "flarum/common/Component";

export class ProductView extends Component {
  view(vnode) {
    let {product} = this.attrs
    return <div class='product_area'>
      <a href='${product.link}' target='_blank'>
        <span class="product_ad">Ad</span>
        <span class='product_discount'>券后:&yen;${product.finallyPrice}</span>
        ${product.name}
      </a>
    </div>
  }
}
