const h_button=document.getElementById('hamburger')
const navList=document.getElementById('nav-list')
function toggleButton(){
    navList.classList.toggle('show')
}
h_button.addEventListener('click',toggleButton)