//1

const itemsEl = document.querySelector("ul#categories");
const itemEl = itemsEl.querySelectorAll('li.item');


const NumbersEl = (items) => console.log(`У ${items.length} категорії.`);
NumbersEl(itemEl);



itemEl.forEach(item => {
    const titleEl = item.querySelector('h2');
    const titleText = titleEl.textContent;
    const subItemEl = item.querySelectorAll('ul li');
    const itemText = subItemEl.length;


     console.log(`Категорія ${titleText}`);
    console.log(`Кількість елементів у катигорії ${itemText}`);
});

// console.log(itemsEl);

//2

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];



const elementsEl = document.querySelector('#ingredients');

const layoutIngredients = ingredients.map(item => {
    const subElementEl = document.createElement("li");
    const subTextEl = document.createElement("p");
    subElementEl.append(subTextEl);
    subTextEl.textContent = item;
    return subElementEl;


});


elementsEl.append(...layoutIngredients);


//3

const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

const galleryEl = document.querySelector("ul#gallery");
const layoutImages = images.map(({url, alt}) => {
    return `<li>
        <img src="${url}" alt="${alt}">
    </li>`
}).join('');


galleryEl.insertAdjacentHTML('beforeend', layoutImages)
document.body.append(galleryEl);

//4

let counterValue = 0;


const spanEl = document.querySelector("#value");
const remBtnEl = document.querySelector('button[data-action="decrement"]');

remBtnEl.addEventListener("click", () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
})


const addBtnEl = document.querySelector('button[data-action="increment"]');
addBtnEl.addEventListener("click", () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
})
