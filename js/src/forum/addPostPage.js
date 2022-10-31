import {extend} from "flarum/common/extend";
import CommentPost from "flarum/forum/components/CommentPost";

export default function () {
  extend(CommentPost.prototype, 'oncreate', function (view) {
    if (app.current.data.routeName === 'discussion' && app.forum.data.attributes.products) {
      const products = app.forum.data.attributes.products
      if (products.length > 0) {
        let id = this.attrs.post.data.id;
        let number = this.attrs.post.data.attributes.number
        if (number === 1 || number % 5 === 0) {
          console.log(this.element)
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
}
