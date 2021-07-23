
//like-clicked

let likeBtns = document.querySelectorAll(".heart");
likeBtns.forEach(btn => {
    btn.onclick= function (){
        btn.classList.toggle("liked"); 
    }
})


