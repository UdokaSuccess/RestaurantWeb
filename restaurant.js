const optionsContainer = document.querySelector('.options-container')
const menuSection = document.querySelector('.row')

const menu = [
       {
       	img : 'cupcake.jpg',
       	category: 'cakes',
       	name: 'Cupcake',
       	price: '$40',
       },
       {
       	img : 'red-wine.jpg',
       	category:'Drinks',
       	name: 'Red wine',
       	price: '$25',
       },
       {
       	img : 'carrot-juice.jpg',
       	category: 'Drinks',
       	name: 'Fruit juice',
       	price: '$30',
       },
       {
       	img : 'cakes-.jpg',
       	category: 'cakes',
       	name: 'Cupcakes',
       	price: '$20',
       },
       {
       	img : 'burger.jpg',
       	category: 'burgers',
       	name: 'Burger',
       	price: '$50',
       },
       {
       	img : 'pizza.jpg',
       	name: 'Pizza',
       	category: 'pizza',
       	price: '$40',
       },

       {
            img : 'cake-.jpg',
            category: 'cakes',
            name: 'Cake',
            price: '$20',
       },
          {
        img : 'burger3.jpg',
        category: 'burgers',
        name: 'Burger',
        price: '$20',
       }
]

// ---------To show the navbar on mobile--------------------------------
const menuIcon = document.querySelector('.navbar .nav-list  .menu-icon')
  const navList = document.querySelector('.navbar .nav-list ');
  const navItems = document.querySelector('.navbar .nav-list .nav-items');
  menuIcon.addEventListener('click', function () {
    // body...
      navList.classList.toggle('open')
   this.classList.toggle('active')
  })


  const menuDiv = document.querySelector('#menu')
  menuDiv.scrollIntoView(true)


// TO DISPALY THE WHOLE MENU, ALL
function displayMenu(menuItems) {
const myItems = menuItems.map(function(item) {
		// body...
		return `<article class="column">
           <div class="row-3">
           <div class="col-3">
                  <img src=${item.img} class="image" tabindex = "1">
                  </div> 
                  <div class="heading">
             <h4>${item.name} <b><span class= "price">${item.price}</span> <span class="logo" onclick= "addToCart()"><i class="fa-solid fa-cart-plus" title="Add to cart"></i></span></b></h4>
                  </div>
                  </div>
            </article>`
	})
	myItems.join("");
	menuSection.innerHTML = myItems
      // const heading = document.querySelector('.heading');
      // heading.parent.classList.remove('col-3')
}
//<span><i class="fa-solid fa-cart-plus"></i> </span>onclick= "openForm()"

//TO DISPLAY THE BUTTONS AS WELL AS FILTER THE CATEGORIES
function displayButtonsFilter() {
	// body...
	const categories = menu.reduce(function(value, item) {
	// body...
	if (!value.includes(item.category)) {
     value.push(item.category);
	}
	return value;
}, ['all'])
      const categoryBtn = categories.map(function(category) {
	// body...
	return `<button class="btn-1" data-id='${category}'>${category}</button>`;
}).join('');
optionsContainer.innerHTML = categoryBtn
const buttons = document.querySelectorAll('.btn-1');

buttons.forEach(function(btn) {
	// body...
	btn.addEventListener('click', function(e) {
		// body...
		const category = e.currentTarget.dataset.id;
const menuCategory = menu.filter(function(menuItem) {
			// body...
			if (menuItem.category === category) {
				return menuItem;
			}
		})
			if (category == 'all') {
				displayMenu(menu)
			}
			else{
              displayMenu(menuCategory)
			}

	})
})


}

const popup = document.querySelector('.form-popup');
const column = document.querySelector('.column');
const images = document.querySelectorAll('.image')
const productsContainer = document.querySelector('.products-container') 

function addToCart() {
              // body..
 // display the popup,
popup.style.display = "block"

// create a  cartItem component
const cartItems = document.createElement('div') 
cartItems.classList.add('products')
 cartItems.innerHTML = `${event.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.innerHTML}
      <h4 class="h"><span class= "prices">${event.target.parentElement.previousElementSibling.innerHTML}</span>
      <i class="fa-solid fa-circle-xmark remove-icon" title="Remove from cart"></i>
      <i class="fa-solid fa-circle-plus add-icon" title="add more products"></i>
  </h4>

`
 // append the cartbitem to the container
productsContainer.appendChild(cartItems)

// to remove the item from cart on each click
const removeIcons = popup.querySelectorAll('.remove-icon')
removeIcons.forEach(function(removeIcon) {
      // body...
      removeIcon.addEventListener('click', function() {
            // body...
            //cartItems.style.display =  'none' event.target.parentElement.parentElement.parentElement

              this.parentElement.parentElement.remove()
              cartTotal()
      })
})
// end of remove icon





// adding more product to the cart
const addIcons = popup.querySelectorAll('.add-icon')
addIcons.forEach(function(addIcon) {
      // body...
      addIcon.addEventListener('click', function() {
            // body...
            popup.style.display = 'none'
            // store 
            // add one

      })
})
// end of add more products

// checkout button to calc the total

const checkout = document.querySelector('#checkOut-button')
const total = document.querySelector('#total')

checkout.addEventListener('click', cartTotal)

  function cartTotal() {
      // body... 
const products = document.getElementsByClassName('products')

// Loop through the products to get the price 
for (var i = 0; i < products.length; i++) {
    var sum = 0 
    let priceElements = document.querySelectorAll('.prices')
    priceElements.forEach(function(priceElement) {
      // body...  
     let price = parseFloat(priceElement.innerHTML.replace('$', ""))
     sum += price
     console.log(sum)
     total.textContent = "$" + sum + ".00"
     })
  
}
if (products.length == 0) {sum = 0.00
  total.textContent = "$" + sum + ".00"
  popup.style.display = "none"
}

}


// to close the form from the top icon
const closeIcon = popup.querySelector('#closeIcon')
closeIcon.addEventListener('click', function closeForm() {
      // body...
      cartItems.remove()
       popup.style.display = "none"
})
// end of close icon
 }
 //-----------------------------------------about section--------------------------------------------------



// -----------------------------------------------------faq-----------------------------------
let titles = document.querySelectorAll("h4");
let ansP = document.querySelectorAll('p');
let plus =document.querySelectorAll("plus");



titles.forEach((title) => {
      // body...
      title.addEventListener("click", function () {
      // body...
             this.classList.toggle("active")
           let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
            body.style.maxHeight = null
        } else {
            body.style.display = "block";
            body.style.maxHeight = body.scrollHeight + "px";
        }
})
})


// const chevronIcon = document.querySelector('.chevronIcon');
// chevronIcon.addEventListener('click',function () {
//       // body...

// })
// onclick of the icon, slide one from the right, hide one from the left and show left icon
// style properly, use right animation or slide, 


//ONLOAD OF THE DOM, CALL THE FUNCTIONS
window.addEventListener('DOMContentLoaded', function(){
	displayMenu(menu);
	displayButtonsFilter()


})
