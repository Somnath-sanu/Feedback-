const ratingEls = document.querySelectorAll(".rating")

const btnEl = document.getElementById("btn")

const containerEl = document.getElementById("container")

let selectedRating = "";

ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener('click',(e)=>{
        

        removeActive();

        selectedRating = e.target.innerText || e.target.parentNode.innerText;

        e.target.classList.add("active")
        e.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click",()=>{
    if(selectedRating !==""){
        containerEl.innerHTML = `<strong>Thank You :) </strong>
        <br/>
        <strong>Feedback : ${selectedRating}</strong>
        <br />`

    }
});

function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active")
    })
}