// selectors

const cartBtn = document.querySelector(".cart-btn");
const clearCartBtn = document.querySelector(".btn-clear");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".total-value");
const cartContent = document.querySelector(".cart-list");
const productsDOM = document.querySelector("#products-dom");

let buttonsDOM = [];
let cart = [];

class Products {
  async getProducts() {
    try {
      let result = await fetch(
        "https://65eac11dc9bf92ae3d3c2177.mockapi.io/products"
      );
      let data = await result.json();
      let products = data;
      products.sort(() => Math.random() - 0.5);
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  displayProducts(products) {
    products.forEach(({ image, title, price, id }) => {
      productsDOM.innerHTML += `
            <div class="col-lg-4 col-md-6">
                <div class="product">
                    <div class="product-image">
                        <img src="${image}" alt="product" class="img-fluid" />
                    </div>
                    <div class="product-hover">
                        <span class="product-title">${title}</span>
                        <span class="product-price">$ ${price}</span>
                        <button class="btn-add-to-cart" data-id=${id}>
                            <i class="fas fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
            `;
    });
  }

  getBagButtons() {
    let buttons = [...document.querySelectorAll(".btn-add-to-cart")];
    buttonsDOM = buttons;
    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        button.setAttribute("disabled", "disabled");
        button.opacity = ".3";
      } else {
        button.addEventListener("click", (event) => {
          event.target.disabled = true;
          event.target.style.opacity = ".3";

          //* get product from products

          let cartItem = { ...Storage.getProducts(id), amount: 1 }; // ref, strept operatörlerine bak!!!!

          //* add product to the cart

          cart = [...cart, cartItem];

          //* save cart in local storage

          Storage.saveCart(cart);

          //* save cart values

          this.saveCartValues(cart);

          //* display cart item

          this.addCartItem(cartItem);

          //*show the cart (sepet butonuna tıklandığında cart açılır)

          this.showCart();
        });
      }
    });
  }

  saveCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.map((item) => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });

    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
  }

  addCartItem(item) {
    const li = document.createElement("li");
    li.classList.add("cart-list-item");
    li.innerHTML = `
              <div class="cart-left">
                <div class="cart-left-image">
                  <img src="${item.image}" alt="product" />
                </div>
                <div class="cart-left-info">
                  <a class="cart-left-inf0-title" href="#">${item.table}</a>
                  <span class="cart-left-info-price">$ ${item.table}</span>
                </div>
              </div>
              <div class="cart-right">
                <div class="cart-right-quantity">
                  <button class="quantity-minus" data-id=${item.id}>
                    <i class="fas fa-minus"></i>
                  </button>
                  <span class="quantity">${item.amount}</span>
                  <button class="quantity-plus" data-id=${item.id}>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <div class="cart-right-remove" >
                    <button class="cart-remove-btn" data-id=${item.id}>
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
              </div>
      `;
    cartContent.appendChild(li);
  }

  showCart() {
    cartBtn.click();
  }

  setupApp() {
    cart = Storage.getCart();
    // güncel verileri hesaplamalr kısmına göndermemiz lazım.
    this.saveCartValues(cart);
    this.populateCart(cart);
  }

  populateCart(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }

  cartLogic() {
    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
    });

    cartContent
  }

  clearCart() {
    let cartItems = cart.map((item) => item.id);
    cartItems.forEach((id) => this.removeItem(id));
    while(cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children)  //* ?
    }
  }

  removeItem(id) {
    cart = cart.filter((item) => item.id !== id); // eşleşenleri göster diyoruzç dolayısıyla bu item silinmiş olacak.
    this.saveCartValues(cart); // güncel cartları çağırdık
    Storage.saveCart(cart); // locale kaydettik
    let button = this.getSingleButton(id); // silinen id burada tutulur
    button.disabled = false // silindikten sonra anasatfadaki tıklamamazlık kaldırıldı.
    button.style.opacity = ""
  }

  getSingleButton(id){
    return buttonsDOM.find(button => button.dataset.id === id) // silinen butonu bulduk
  }
}

class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getProducts(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.ad === id);
  }

  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  ui.setupApp();

  products
    .getProducts()
    .then((products) => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getBagButtons();
      ui.cartLogic()
    });
});
