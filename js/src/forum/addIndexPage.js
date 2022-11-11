import DiscussionListItem from "flarum/forum/components/DiscussionListItem";
import {extend} from "flarum/common/extend";
import DiscussionList from "flarum/forum/components/DiscussionList";

export default function () {
  let pushed = []
  extend(DiscussionList.prototype, 'view', function (items) {
    if (app.discussions.pages.length > 0) {
      let ids = [];
      app.discussions.pages.forEach((page, index) => {
        if (pushed[index] === undefined) {
          for (const item of page.items) {
            ids.push(item.data.id)
          }
          if (ids.length > app.forum.data.attributes.count_number) {
            pushed.push(randomIds(ids, app.forum.data.attributes.count_number))
          } else {
            pushed.push(randomIds(ids, ids.length))
          }
        }
      })
    }
  })
  extend(DiscussionListItem.prototype, 'oncreate', function (items) {
    if (app.current.data.routeName === 'index' && pushed.length > 0) {
      if (app.forum.data.attributes.products) {
        let products = app.forum.data.attributes.products
        let product = products[Math.floor(Math.random() * products.length)]
        if (product) {

          for (const ids of pushed) {
            if (ids.findIndex(id => id === this.attrs.discussion.data.id) >= 0) {
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
