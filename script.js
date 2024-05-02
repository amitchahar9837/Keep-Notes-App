let notesContainer=document.querySelector(".notesContainer");
let addBtn=document.querySelector("#add");
let notesItem=document.querySelectorAll(".notes");
let deleteBtn=document.querySelectorAll(".delete");
let notes;

function updateStorage(){
    localStorage.setItem("data",notesContainer.innerHTML);
}
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("data");
}
showNotes();

addBtn.addEventListener("click",()=>{
    notes=document.createElement("div");
    let p=document.createElement("p");
    let deleteBtn=document.createElement("button");

    notes.classList.add("notes");
    deleteBtn.classList.add("delete");

    p.setAttribute("contenteditable","true");
    deleteBtn.textContent="Delete";

    notes.appendChild(p);
    notes.appendChild(deleteBtn);
    notesContainer.appendChild(notes);
    updateStorage();
})
notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="BUTTON"){
        if(confirm("Are you sure to delete your Note!!!")){
            e.target.parentElement.remove();
            updateStorage();
        }
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".notes");
        notes.forEach(e=>{
            e.onkeyup=function(){
                updateStorage();
            }
        })
    }
})
window.addEventListener("scroll",(e)=>{
    if(pageYOffset>=276){
        document.querySelector(".scroll").classList.add("show");
    }
    if(pageYOffset<276){
        document.querySelector(".scroll").classList.remove("show");
    }
})

document.querySelector(".scroll").addEventListener("click",()=>{
    window.scrollTo({top: 0 , behavior: 'smooth' })
})
