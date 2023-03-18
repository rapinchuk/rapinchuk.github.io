
document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const resutl = document.querySelector('.result')
const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четверг", "Пятниця", "Субота"] 
function dayOfWeak() {
 {
  let date = (input.value%7)
    resutl.innerHTML = days[date]
    console.log(days[date]) 

}
}



btn.addEventListener("click", dayOfWeak)
});