const categoryElement = document.querySelector("#categories");
const itemsCategory = categoryElement.querySelectorAll(".item");
console.log(`Amount of categories: ${itemsCategory.length}`);

itemsCategory.forEach(item => {
  const itemTitle = item.querySelector(".item__title").textContent;
  const countItems = item.querySelectorAll(".subcategory-item").length;

  console.log(`\nCategory ${itemTitle} has ${countItems} points`)
})
