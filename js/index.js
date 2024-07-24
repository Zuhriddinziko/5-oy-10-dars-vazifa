const input = document.querySelector('#input');
const kun = document.querySelector('#date');
document.addEventListener('DOMContentLoaded',function(){
  fetch(`e755989051d240d1ae2165143242407`)
})
let date = new Date().getDate();
console.log(date);
input.addEventListener('click', function(){
console.log(this.value);
})
function displey (){
  let day=kun.innerHTML +=`${date}`;
  return day
}
console.log(displey);