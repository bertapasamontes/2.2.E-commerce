// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    for(let object of products){
        if(object.id == id){
            //compruebo si producto está en carrito o no
            const productoEnCarrito = cart.find(item => item.id === object.id);
            if(productoEnCarrito){
                productoEnCarrito.quantity++;
            }
            else{
                object = {quantity: 1, ...object}
                console.log("cantidad "+object.name+"= "+object.quantity);
                console.log("mi objeto "+object.name+" al carrito.")
                cart.push(object);
            }
            
        }
    }
    //si carrito NO está vacío
    if(cart.length != 0){
        console.table(cart);

        const cantidadProductos = document.getElementById("count_product");
        cantidadProductos.textContent = cart.length;
    }
    //si está vacío
    else{
        total = 0;
        console.log("carrito vacío")}

    printCart();
    console.log("nuevo porducto agregado");
}

// Exercise 2
function cleanCart() {
    cart.length=0;
    total = 0;
    const tabla = document.getElementById("cart_list");
    const precioTotal = document.getElementById("total_price");
    precioTotal.innerText = total;
    tabla.replaceChildren();

}

// Exercise 3
function calculateTotal() {

    // total=0;
    for(i=0;i<cart.length;i++){
        console.log(total += cart[i].price*cart[i].quantity);  
    }
    console.log("total = "+total+"€"); 
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    calculateTotal();
    
    let precioProductoConDescuento = 0; //precio del producto que tiene descuento

    for(let productoDeCarrito of cart){
        
        productoDeCarrito.subtotalWithDiscount = 0;//precio final del producto con descuento 

        if(productoDeCarrito.offer){
            if((productoDeCarrito.name == "cooking oil" && productoDeCarrito.quantity >=3) || (productoDeCarrito.name == "Instant cupcake mixture" && productoDeCarrito.quantity >=10) ){

                //conocer el precio del producto que tiene descuento * las cantidades compradas
                precioProductoConDescuento = productoDeCarrito.price*productoDeCarrito.quantity;

                
                productoDeCarrito.subtotalWithDiscount = precioProductoConDescuento - (precioProductoConDescuento*productoDeCarrito.offer.percent/100);

                console.log("% de descuento: "+productoDeCarrito.offer.percent);

                
            }
            console.log("precio de los productos con descuento:") 
            console.log("precio del mismo producto:" +precioProductoConDescuento);
            console.log("se queda en: " +productoDeCarrito.subtotalWithDiscount+"€");
            
            total -=precioProductoConDescuento;
            total += productoDeCarrito.subtotalWithDiscount;
        }
        else{
            console.log("estos productos no tiene descuento");
        }
        
            
    }
    console.log("total final con descuentos aplicados a los productos pertientes = "+total + "€");
}


// Exercise 5
function printCart() {
    total=0;
    applyPromotionsCart();

    const tabla = document.getElementById("cart_list");
    const precioTotal = document.getElementById("total_price");
    console.table(cart);
    //eliminamos filas ya hechas de la tabla
    tabla.replaceChildren(); 

    if(cart.length != 0){
        for(const productos of cart){
            if(tabla){
                
                //creamos filas hy elementos nuevos
                const row = document.createElement("tr");
                
                const nombreProducto = document.createElement("th");
                nombreProducto.textContent  = productos.name;

                const precioProducto = document.createElement("td");
                precioProducto.textContent  = productos.price;

                const cantidadProducto = document.createElement("td");
                cantidadProducto.textContent  = productos.quantity;

                const precioDescuentoProducto = document.createElement("td");
                precioDescuentoProducto.textContent  = productos.subtotalWithDiscount;
                

                const buttonSumar = document.createElement("button");
                buttonSumar.classList.add('btn','btn-outline-dark');
                buttonSumar.textContent = "+";
                buttonSumar.addEventListener("click", add)

                function add(){
                    buy(productos.id);
                }

                const buttonRestar = document.createElement("button");
                buttonRestar.classList.add('btn','btn-outline-dark');
                buttonRestar.textContent = "-";
                buttonRestar.addEventListener("click", rest)

                function rest(){
                    removeFromCart(productos.id);
                }

                //añadimos las filas a la tabla
                tabla.appendChild(row);
                //añadimos las columnas a las filas
                row.appendChild(nombreProducto);
                row.appendChild(precioProducto);
                row.appendChild(cantidadProducto);
                row.appendChild(precioDescuentoProducto);
                if(!productos.subtotalWithDiscount){
                    precioDescuentoProducto.textContent  = productos.price*productos.quantity;
                }
                row.appendChild(buttonRestar);
                row.appendChild(cantidadProducto);
               
                row.appendChild(buttonSumar);

                console.log(total);
                precioTotal.innerText = total;
             
            }
            else console.log("tabla no inicializada");

            
            
        }
    }
    else {
        precioTotal.innerText = 0;
        console.log("carrito vacío");
    }
}


function printButtons(id){
   
    const carrito = document.getElementById(`carrito-id-${id}`);
    total=0;
    applyPromotionsCart();
    const botonesEnCards = document.querySelector(`.add-al-carrito-id-${id}`);
    
    botonesEnCards.replaceChildren();
    carrito.style.display = "none";


    for(const productos of cart){ 
        if(productos.id === id){
            //creamos botones de sumar y restar cantidades
            const row = document.createElement("div");
            const cantidadProducto = document.createElement("span");
            cantidadProducto.setAttribute("id", `quantity-${productos.id}`);
            cantidadProducto.textContent  = productos.quantity;

            //boton sumar
            const buttonSumar = document.createElement("button");
            buttonSumar.classList.add('btn','btn-primary', 'ms-2');
            buttonSumar.textContent = "+";
            buttonSumar.addEventListener("click", add)

            function add(){
                buy(productos.id);
                printButtons(productos.id);
            }

            //boton restar
            const buttonRestar = document.createElement("button");
            buttonRestar.textContent = "-";
            buttonRestar.addEventListener("click", rest)
            buttonRestar.classList.add('btn','btn-primary', 'me-2');

            function rest(){
                removeFromCart(productos.id);
                printButtons(productos.id);
                
            }

            //añadimos las filas a la carta
            row.appendChild(buttonRestar);
            row.appendChild(cantidadProducto);
            row.appendChild(buttonSumar);
            botonesEnCards.appendChild(row);


            const ayuda = document.createElement("div");
            ayuda.textContent = "se fué";
           
            //mostrar y ocultar boton carrito
            if (productos.quantity === 0) {

                console.log("se ha perdido el rpoducto");
                carrito.style.display = "block";
                botonesEnCards.style.display = "none"; 
                // row.appendChild(ayuda);
                // botonesEnCards.replaceChildren();
               
            } 
            else {
               console.log("todo ok");
            }   
        }           
            
            
    }
    if(cart.length === 0){
        //reaparecer boton carrito
        carrito.style.display = "block";
        console.log("se ha perdido el producto_2");
    }
}
function updateQuantityDisplay(productoId) {
    const producto = cart.find((producto) => producto.id === productoId);

    //plantilla de literales que pone quantity+el Id del producto
    const cantidadProducto = document.getElementById(`quantity-${productoId}`);
    if (producto && cantidadProducto) {
        cantidadProducto.textContent = producto.quantity;
    }
    
}

function printAll(id){
    buy(id);
    printButtons(id);
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    for(let object of cart){
        if(object.id == id){
            //compruebo si producto está en carrito o no
            const productoEnCarrito = cart.find(item => item.id === object.id);
            if(productoEnCarrito){
                productoEnCarrito.quantity--;
            }
            if(productoEnCarrito.quantity==0){
                cart.pop(productoEnCarrito);
            }
            
        }
    }
    // total=0;
    console.log("borrado");
    printCart();
}

function open_modal() {
    printCart();
}