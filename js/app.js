var buyStuff = document.getElementById("product");
var qty = document.getElementById("qty");
var addToCart = document.getElementById("addToCart");
var submit = document.getElementById("submit");
var cart = [];
buyStuff.addEventListener('change', wellNamedFunction);
submit.addEventListener('submit', buyMe);

var stuff;
var cart = [];
function wellNamedFunction(){
    //recreate if statement matching dropdown selection to index of the array
    //BuyMe('bag', qty)
};
function buyMe(){
    new BuyMe('bag', qty)
    console.log(qty);
};


function BuyMe(name, qty){
    this.name = name;     
    this.qty = qty;
    cart.push(this);
};
function checkout(){

};

function pol(){
    console.log('proof of life');
};
