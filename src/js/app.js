// I have decided to keep all the submenus same just to save some lines of code

const submenu = document.querySelector(".sub-menu");

const subjectsList = document.querySelectorAll(".subjects-list-items");

const showSubMenu = () => {
  if (submenu.style.display === "none") submenu.style.display = "flex";
  else submenu.style.display = "none";
};

const closeSubMenu = () => {
    submenu.style.display = "none";
}

const lightColors = [
  "White",
  "Beige",
  "Cream",
  "Gray",
  "Pink",
  "Blue",
  "Green",
  "Lavender",
  "Yellow",
  "Peach",
  "Ivory",
];


// console.log(subjectsList)

for(let listItem of subjectsList) {
  const randomIndex = Math.floor(Math.random() * lightColors.length);
  listItem.style.backgroundColor = lightColors[randomIndex];
}
