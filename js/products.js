const getProducts = async () => {
  try {
    const results = await fetch("./data/products.json");
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

/*
=============
Load Category Products
=============
*/
const categoryCenter = document.querySelector(".category__center");

window.addEventListener("DOMContentLoaded", async function () {
  const products = await getProducts();
  displayProductItems(products);
});

const displayProductItems = (items) => {
  let displayProduct = items.map(
    (product) => ` 
                <div class="product category__products">
                  <div class="product__header">
                    <img src=${product.image} alt="product">
                  </div>
                  <div class="product__footer">
                    <h3>${product.title}</h3>
                    <div class="rating">
                    <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                  </svg>
                    </div>
                    <div class="product__price">
                      <h4>$${product.price}</h4>
                    </div>
                    <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                  </div>
                <ul>
                    <li>
                      <a data-tip="Quick View" data-place="left" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                      </a>
                    </li>
                    <li>
                      <a data-tip="Add To Wishlist" data-place="left" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                      </a>
                    </li>
                    <li>
                      <a data-tip="Add To Compare" data-place="left" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                    </svg>
                      </a>
                    </li>
                </ul>
                </div>
                `
  );

  displayProduct = displayProduct.join("");
  if (categoryCenter) {
    categoryCenter.innerHTML = displayProduct;
  }
};

/*
=============
Filtering
=============
*/

const filterBtn = document.querySelectorAll(".filter-btn");
const categoryContainer = document.getElementById("category");

if (categoryContainer) {
  categoryContainer.addEventListener("click", async (e) => {
    const target = e.target.closest(".section__title");
    if (!target) return;

    const id = target.dataset.id;
    const products = await getProducts();

    if (id) {
      // remove active from buttons
      Array.from(filterBtn).forEach((btn) => {
        btn.classList.remove("active");
      });
      target.classList.add("active");

      // Load Products
      let menuCategory = products.filter((product) => {
        if (product.category === id) {
          return product;
        }
      });

      if (id === "All Products") {
        displayProductItems(products);
      } else {
        displayProductItems(menuCategory);
      }
    }
  });
}

/*
=============
Product Details Left
=============
*/
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const picContainer = document.querySelector(".product__pictures");
const zoom = document.getElementById("zoom");
const pic = document.getElementById("pic");

// Picture List
const picList = [pic1, pic2, pic3, pic4, pic5];

// Active Picture
let picActive = 1;

["mouseover", "touchstart"].forEach((event) => {
  if (picContainer) {
    picContainer.addEventListener(event, (e) => {
      const target = e.target.closest("img");
      if (!target) return;
      const id = target.id.slice(3);
      changeImage(
        `./images/products/sleevless/Casual beach sleevless floral print${id}.jpg`,
        id
      );
      changeImage(
        `./images/products/sleevless/Reebok Men's Sneaker${id}.jpg`,
        id
      );
    });
  }
});

// change active image
const changeImage = (imgSrc, n) => {
  // change the main image
  pic.src = imgSrc;
  // change the background-image
  zoom.style.backgroundImage = `url(${imgSrc})`;
  //   remove the border from the previous active side image
  picList[picActive - 1].classList.remove("img-active");
  // add to the active image
  picList[n - 1].classList.add("img-active");
  //   update the active side picture
  picActive = n;
};

/*
=============
Product Details Bottom
=============
*/

const btns = document.querySelectorAll(".detail-btn");
const detail = document.querySelector(".product-detail__bottom");
const contents = document.querySelectorAll(".content");

if (detail) {
  detail.addEventListener("click", (e) => {
    const target = e.target.closest(".detail-btn");
    if (!target) return;

    const id = target.dataset.id;
    if (id) {
      Array.from(btns).forEach((btn) => {
        // remove active from all btn
        btn.classList.remove("active");
        e.target.closest(".detail-btn").classList.add("active");
      });
      // hide other active
      Array.from(contents).forEach((content) => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Quantity increment and decrement buttons
  const minusBtn = document.querySelector(".minus-btn");
  const plusBtn = document.querySelector(".plus-btn");
  const quantityInput = document.querySelector(".counter-btn");
  const priceElement = document.querySelector(".new__price");
  const subtotalElement = document.querySelector("a.new__price");
  const maxQuantity = 10; // Max quantity allowed

  // Get the unit price from the price element
  const unitPrice = parseFloat(priceElement.textContent.replace("$", ""));

  // Update the subtotal
  function updateSubtotal() {
    const quantity = parseInt(quantityInput.value);
    const subtotal = (unitPrice * quantity).toFixed(2);
    subtotalElement.textContent = `$${subtotal}`;
  }

  // Increment quantity
  plusBtn.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < maxQuantity) {
      quantityInput.value = currentValue + 1;
      updateSubtotal();
    }
  });

  // Decrement quantity
  minusBtn.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      // Ensure quantity doesn't go below 1
      quantityInput.value = currentValue - 1;
      updateSubtotal();
    }
  });

  // Update subtotal when the quantity input value is changed directly
  quantityInput.addEventListener("input", function () {
    let currentValue = parseInt(quantityInput.value);

    // Ensure the quantity is within the allowed range
    if (isNaN(currentValue) || currentValue < 1) {
      quantityInput.value = 1;
    } else if (currentValue > maxQuantity) {
      quantityInput.value = maxQuantity;
    }

    updateSubtotal();
  });

  // Initial call to set the subtotal based on the default quantity
  updateSubtotal();
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Select all trash icons and the total price element
  const trashIcons = document.querySelectorAll(".fas.fa-trash");
  const totalElement = document.querySelector(".total");

  // Function to update the total price
  function updateTotal() {
    let total = 0;
    const priceElements = document.querySelectorAll(".box .price");

    priceElements.forEach((priceElement) => {
      const priceText = priceElement.textContent
        .replace("$", "")
        .replace("/-", "");
      total += parseFloat(priceText);
    });

    totalElement.textContent = `Total : $${total.toFixed(2)}/-`;
  }

  // Add click event listeners to each trash icon
  trashIcons.forEach((trashIcon, index) => {
    trashIcon.addEventListener("click", function () {
      // Find the corresponding .box element
      const box = trashIcon.closest(".box");

      // Remove the box from the DOM
      box.remove();

      // Update the total price
      updateTotal();
    });
  });

  // Initial total price calculation
  updateTotal();
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Select all necessary elements
  const cartTable = document.querySelector(".cart__table");
  const shippingCheckbox = document.querySelector(
    '.check__shipping input[type="checkbox"]'
  );
  const subtotalElement = document.querySelector(
    ".cart__totals li:first-child span"
  );
  const totalElement = document.querySelector(
    ".cart__totals li:last-child span"
  );
  const shippingElement = document.querySelector(
    ".cart__totals li:nth-child(2) span"
  );

  const shippingCost = 7.0; // Fixed shipping cost
  let subtotal = 0;
  let total = 0;

  // Function to update subtotal and total prices
  function updateCartTotals() {
    subtotal = 0;
    const productRows = cartTable.querySelectorAll("tbody tr");

    productRows.forEach((row) => {
      const priceElement = row.querySelector(".product__price .new__price");
      const quantityElement = row.querySelector(".counter-btn");
      const subtotalElement = row.querySelector(
        ".product__subtotal .new__price"
      );

      const price = parseFloat(priceElement.textContent.replace("$", ""));
      const quantity = parseInt(quantityElement.value);
      const productSubtotal = (price * quantity).toFixed(2);

      subtotalElement.textContent = `$${productSubtotal}`;
      subtotal += parseFloat(productSubtotal);
    });

    // Update the displayed subtotal
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

    // Update total including shipping if checkbox is checked
    total = shippingCheckbox.checked ? subtotal + shippingCost : subtotal;
    totalElement.textContent = `$${total.toFixed(2)}`;
  }

  // Add event listeners for quantity buttons
  cartTable.addEventListener("click", function (event) {
    const target = event.target;

    if (target.closest(".plus-btn")) {
      const quantityInput = target
        .closest(".input-counter")
        .querySelector(".counter-btn");
      let quantity = parseInt(quantityInput.value);

      if (quantity < 10) {
        // Assuming max quantity is 10
        quantityInput.value = quantity + 1;
      }

      updateCartTotals();
    }

    if (target.closest(".minus-btn")) {
      const quantityInput = target
        .closest(".input-counter")
        .querySelector(".counter-btn");
      let quantity = parseInt(quantityInput.value);

      if (quantity > 1) {
        // Assuming minimum quantity is 1
        quantityInput.value = quantity - 1;
      }

      updateCartTotals();
    }

    if (target.closest(".remove__cart-item")) {
      // Remove the product row
      const row = target.closest("tr");
      row.remove();

      updateCartTotals();
    }
  });

  // Add event listener for shipping checkbox
  shippingCheckbox.addEventListener("change", function () {
    shippingElement.textContent = this.checked
      ? `$${shippingCost.toFixed(2)}`
      : `$0`;
    updateCartTotals();
  });

  // Initial calculation
  updateCartTotals();
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Select the shopping cart and the total element
  const cart = document.querySelector(".shopping-cart");
  const totalElement = document.querySelector(".total");

  let total = 0;

  // Function to update the total price
  function updateTotal() {
    total = 0;
    const priceElements = cart.querySelectorAll(".box .price");

    priceElements.forEach((priceElement) => {
      const priceText = priceElement.textContent
        .replace("$", "")
        .replace("/-", "");
      total += parseFloat(priceText);
    });

    totalElement.textContent = `Total : $${total.toFixed(2)}/-`;
  }

  // Add event listener to the cart for removing items
  cart.addEventListener("click", function (event) {
    const target = event.target;

    // Check if the trash icon is clicked
    if (target.classList.contains("fa-trash")) {
      const box = target.closest(".box");
      box.remove(); // Remove the item from the cart

      updateTotal(); // Update the total
    }
  });

  // Function to add items to the cart
  function addToCart(productName, productImage, productPrice) {
    // Create a new box element
    const newBox = document.createElement("div");
    newBox.classList.add("box");

    // Insert the product details into the new box
    newBox.innerHTML = `
      <i class="fas fa-trash"></i>
      <img src="${productImage}">
      <div class="content">
        <h3>${productName}</h3>
        <span class="price">${productPrice}/-</span>
        <span class="quantity">qty : 1</span>
      </div>
    `;

    // Add the new box to the shopping cart
    cart.insertBefore(newBox, totalElement);

    updateTotal(); // Update the total after adding the new item
  }

  // Add items to the cart (you can trigger this with buttons or events)
  addToCart(
    "Casual Beach Sleeveless Floral Print",
    "./images/products/sleevless/Casual beach sleevless floral print2.jpg",
    "$24.99"
  );
  addToCart(
    "Women's Summer Dress",
    "./images/products/sleevless/Women's Summer Sleeveless Boat Neck Mini Dress1.jpg",
    "$26.99"
  );
  addToCart(
    "Reebok Men's Sneaker",
    "./images/Reebok Men's Sneaker1.jpg",
    "$41"
  );
  // Initial total calculation
  updateTotal();
});
