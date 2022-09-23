let modalEl =  document.querySelector(".modal");
let modalBody = document.querySelector(".modal-content");
let openBtn = document.getElementById("open-btn");
let closeBtn = document.querySelector(".close-btn");

function main(){
    openBtn.addEventListener("click" , () =>{
        modalEl.classList.add("open");
        modalBody.classList.add("open");
    })
    closeBtn.addEventListener("click" , () =>{
        modalEl.classList.remove("open");
        modalBody.classList.remove("open");
    })

    window.addEventListener("click" , (event) =>{
        if(event.target === modalEl){
            modalEl.classList.remove("open");
        }
    })  
}

main();