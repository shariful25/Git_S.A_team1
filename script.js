let header = document.querySelector(".header");
let searchBox = document.querySelector(".searce-box .fa-search");
// <i class="fa-sharp fa-solid fa-xmark"></i>
searchBox.addEventListener("click",()=>{
    header.classList.toggle("showInput");
    if(header.classList.contains("showInput")){
        searchBox.classList.replace("fa-search","fa-xmark");
        
    }else{
        searchBox.classList.replace("fa-xmark","fa-search")
    }
})