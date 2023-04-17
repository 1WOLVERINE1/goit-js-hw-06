const listRef = document.getElementById("categories");
console.log(`Number of categories: ${listRef.children.length}`);

const listItemRef = listRef.querySelectorAll(".item");
listItemRef.forEach((el) => {
  const titleRef = el.querySelector("h2").textContent;
  const elemRef = el.querySelectorAll("li").length;
  console.log(`Category: ${titleRef}`);
  console.log(`Elements: ${elemRef}`);
});
