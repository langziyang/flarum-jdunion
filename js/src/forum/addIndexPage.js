import DiscussionListItem from "flarum/forum/components/DiscussionListItem";
import {extend} from "flarum/common/extend";

export default function () {
  extend(DiscussionListItem.prototype, 'oncreate', function (items) {
    if (app.current.data.routeName === 'index') {
      if (app.forum.data.attributes.products) {
        let products = app.forum.data.attributes.products
        let product = products[Math.floor(Math.random() * products.length)]
        if (product) {
          if (this.attrs.discussion.data.id % 5 === 0) {
            this.element.parentElement.insertAdjacentHTML('afterend', `<div class='product_area'>
      <a href='${product.link}' target='_blank'>
        <span class="product_ad">Ad</span>
        <span class='product_discount'>券后:&yen;${product.finallyPrice}</span>
        ${product.name}
      </a>
    </div>`)
          }
        }
      }
    }
  })
}
