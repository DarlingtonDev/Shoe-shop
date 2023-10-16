const cartButton = document.getElementById('cart-button');
const cartMessage = document.querySelector('.added-to-cart-succesfully');
let cartNumber = document.getElementById('cart-number');

let storedCartNumber = localStorage.getItem('cartNumberStored');
if (storedCartNumber) {
  cartNumber.innerHTML = storedCartNumber;
}

cartButton.addEventListener('click', function() {
  let cartItemNumber = parseInt(cartNumber.innerHTML);
  cartItemNumber++;
  localStorage.setItem('cartNumberStored', cartItemNumber);
  cartNumber.innerHTML = cartItemNumber;
  cartMessage.style.display = 'block';
  setTimeout(() => {
    cartMessage.style.display = 'none';
  }, 3000);
});


const heartIconCont = document.querySelector('.image-card-heart');
const heartIcon = document.querySelector('.fa-regular');
let storedLikedItem = localStorage.getItem('lovedItem');
if(storedLikedItem){
let newHeartIcon = document.createElement('i');
newHeartIcon.classList.add('fa-solid', 'fa-heart');
newHeartIcon.style.color = '#ff0000';
let iconElement = heartIconCont.children[1];
   if (iconElement.classList[0] == 'fa-regular'){
      heartIconCont.replaceChild(newHeartIcon, heartIcon);
      iconElement = heartIconCont.children[1];
      localStorage.setItem('lovedItem', 'true');
    }
    newHeartIcon.addEventListener('click', ()=>{
      heartIconCont.replaceChild(heartIcon, newHeartIcon);
      localStorage.setItem('lovedItem', 'true');
    })
   
}



heartIcon.addEventListener('click', ()=>{
let newHeartIcon = document.createElement('i');
newHeartIcon.classList.add('fa-solid', 'fa-heart');
newHeartIcon.style.color = '#ff0000';
let iconElement = heartIconCont.children[1];
   if (iconElement.classList[0] == 'fa-regular'){
      heartIconCont.replaceChild(newHeartIcon, heartIcon);
      iconElement = heartIconCont.children[1];
      localStorage.setItem('lovedItem', 'true');
    }
    newHeartIcon.addEventListener('click', ()=>{
      heartIconCont.replaceChild(heartIcon, newHeartIcon);
      localStorage.setItem('lovedItem', 'true');
      localStorage.clear('cartNumberStored');
    })
   
   

})