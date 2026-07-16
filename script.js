const toggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggle.innerHTML =`<i class="fa-solid fa-sun"></i>`;
}else {
    document.body.classList.remove("dark");
    toggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
}

toggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        localStorage.setItem("theme","dark");
    }else{
        toggle.innerHTML ='<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme","light");
    }
})

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
})