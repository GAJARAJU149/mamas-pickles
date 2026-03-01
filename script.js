let cart=[];
let total=0;

function scrollToProducts(){
  document.getElementById("veg").scrollIntoView({behavior:"smooth"});
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function toggleCart(){
  document.getElementById("cart").classList.toggle("active");
}

function addToCart(name,price){
  cart.push({name,price});
  total+=price;

  document.getElementById("cart-count").innerText=cart.length;

  let item=document.createElement("div");
  item.innerText=name+" - ₹"+price;
  document.getElementById("cart-items").appendChild(item);

  document.getElementById("total").innerText=total;

  updateWhatsApp();
}

function buyNow(name,price){
  let message="Hi, I want to buy "+name+" for ₹"+price;
  window.open("https://wa.me/91996645267?text="+encodeURIComponent(message),"_blank");
}

function updateWhatsApp(){
  let message="Hi, I want to order:%0A";
  cart.forEach(item=>{
    message+=item.name+" - ₹"+item.price+"%0A";
  });
  message+="Total: ₹"+total;

  document.getElementById("whatsapp-order").href=
  "https://wa.me/91996645267?text="+message;
}