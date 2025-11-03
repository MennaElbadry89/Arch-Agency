const menu = document.querySelector(".fa-bars");
const clos = document.querySelector(".fa-xmark");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const li = document.querySelectorAll("ul li");


menu.addEventListener('click' , (e)=>{
    e.stopPropagation();
    overlay.classList.remove ("hidden")
    sidebar.classList.remove("hidden")

});


document.addEventListener("click" , (e)=>{
    if(! sidebar.contains(e.target) && !menu.contains(e.target)){
    sidebar.classList.add("hidden")
    overlay.classList.add("hidden")
}
})

clos.addEventListener('click' , ()=>{
    sidebar.classList.add("hidden")
    overlay.classList.add("hidden")

})

for(i=0 ; i < li.length ; i++){
    li[i].addEventListener('click' , ()=>{
        sidebar.classList.add("hidden")
        overlay.classList.add("hidden")
    })
}


