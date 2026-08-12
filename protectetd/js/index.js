// =========================
// ПОПУЛЯРНЫЕ ТОВАРЫ
// =========================

const products = [
    {
        name: "Футболка базовая",
        price: "4.990 тг",
        image: "images/products/1.jpg",
        colors: ["white", "gray", "black"]
    },
    {
        name: "Джинсы классические",
        price: "12.990 тг",
        image: "images/products/2.jpg",
        colors: ["blue", "black"]
    },
    {
        name: "Толстовка Urban",
        price: "9.990 тг",
        image: "images/products/3.jpg",
        colors: ["gray", "black", "white"]
    },
    {
        name: "Футболка Oversize",
        price: "5.990 тг",
        image: "images/products/4.jpg",
        colors: ["white", "black"]
    },
    {
        name: "Брюки Urban",
        price: "11.990 тг",
        image: "images/products/5.jpg",
        colors: ["black", "gray"]
    },
    {
        name: "Куртка демисезонная",
        price: "19.990 тг",
        image: "images/products/6.jpg",
        colors: ["black", "beige"]
    }
];


// =========================
// НОВИНКИ
// =========================

const newProducts = [
    {
        name: "Новая футболка",
        price: "5.490 тг",
        image: "images/new/1.png",
        colors: ["white", "gray", "black"]
    },
    {
        name: "Новые джинсы",
        price: "13.990 тг",
        image: "images/new/2.png",
        colors: ["blue", "black"]
    },
    {
        name: "Худи Urban",
        price: "10.990 тг",
        image: "images/new/3.png",
        colors: ["gray", "black"]
    },
    {
        name: "Легкие брюки",
        price: "8.990 тг",
        image: "images/new/4.png",
        colors: ["black", "beige"]
    }
];


// =========================
// КОЛЛЕКЦИИ
// =========================

const collections = [
    {
        title: "Весна/Лето 2026",
        text: "Легкие образы для теплых дней",
        image: "images/Collection/1.png"
    },
    {
        title: "Urban Basic",
        text: "Базовые вещи на каждый день",
        image: "images/Collection/2.png"
    },
    {
        title: "Street Style",
        text: "Современный городской стиль",
        image: "images/Collection/3.png"
    }
];


// =========================
// ФУНКЦИЯ СОЗДАНИЯ ТОВАРА
// =========================

function createProduct(product) {

    const card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `
        <div class="product-images">
            <img src="${product.image}" alt="${product.name}">

            <button class="favourite">
                <i class="fa-regular fa-heart"></i>
            </button>
        </div>

        <div class="product-info">

            <h3>${product.name}</h3>

            <p class="price">${product.price}</p>

            <div class="colors">
                ${product.colors.map(color => `
                    <span style="background-color: ${color};"></span>
                `).join("")}
            </div>

            <button class="card-btn">
                В корзину
            </button>

        </div>
    `;

    return card;
}


// =========================
// РЕНДЕР ПОПУЛЯРНЫХ ТОВАРОВ
// =========================

const popularContainer = document.getElementById("popular-products");

products.forEach(product => {

    popularContainer.appendChild(
        createProduct(product)
    );

});


// =========================
// РЕНДЕР НОВИНОК
// =========================

const newContainer = document.getElementById("new-products");

newProducts.forEach(product => {

    newContainer.appendChild(
        createProduct(product)
    );

});


// =========================
// РЕНДЕР КОЛЛЕКЦИЙ
// =========================

const collectionsContainer = document.getElementById("collections");

collections.forEach(collection => {

    const card = document.createElement("div");

    card.classList.add("collections-card");

    card.innerHTML = `
        <div class="collection-info">

            <h3>${collection.title}</h3>

            <p>
                ${collection.text}
            </p>

            <a href="#">
                Смотреть коллекцию
                <i class="fa-solid fa-arrow-right"></i>
            </a>

        </div>

        <div class="collection-image">

            <img
                src="${collection.image}"
                alt="${collection.title}"
            >

        </div>
    `;

    collectionsContainer.appendChild(card);

});