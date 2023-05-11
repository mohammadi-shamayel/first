'use strict'
let row=2;
let colunm=2;
let items= document.querySelectorAll('.item');
console.log(items);
const x = function(){
    document.querySelector('h1').textContent='level1';
    items.forEach(item=> item.style.backgroundcolor="wihte");
    let target=Math.floor(Math.random()*(row*colunm));
    console.log(target);

    }
    document.addEventListener('keydown',x);
    items.forEach((item,number) => {
        if(target === number){
            item.addEventListener('click',function(){
        document.querySelector('h1').textContent='level2'
        console.log(number)
            })
        }else{
            item.addEventListener('click',function(){
                console.log("incorrect") 
         })}
       
    })





