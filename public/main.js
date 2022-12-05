

const menu= document.getElementById('menu-cate')
const toggle_menu= document.getElementById('icon-menu')

document.addEventListener('click', (e) =>{
   if (toggle_menu.contains(e.target)){
    menu.classList.toggle('hidden')
    menu.classList.toggle('menu-expand')

   }
   else {
        if (menu.classList.contains('menu-expand')) {
            menu.classList.remove('menu-expand')
            menu.classList.add('hidden')
        }
   }
})