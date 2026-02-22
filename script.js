function toggleMenu(){
document.getElementById("nav-links").classList.toggle("active");
}

document.querySelectorAll("#nav-links a").forEach(link=>{
link.addEventListener("click",()=>{
document.getElementById("nav-links").classList.remove("active");
});
});

function openModal(src){
document.getElementById("imageModal").style.display="flex";
document.getElementById("modalImg").src=src;
}

function closeModal(){
document.getElementById("imageModal").style.display="none";
}
// AUTO CERTIFICATE SLIDER FINAL FIX

const slider = document.getElementById("sliderImage");

let current = 1;
const totalImages = 22; // aapke folder me 22 images hain

setInterval(() => {

    slider.src = `certificates/imag${current}.jpeg`;

    current++;

    if (current > totalImages) {
        current = 1;
    }

}, 1000);
function openProject(project){

const modal = document.getElementById("projectModal");
const title = document.getElementById("projectTitle");
const desc = document.getElementById("projectDescription");
const img1 = document.getElementById("projectImg1");
const img2 = document.getElementById("projectImg2");

modal.style.display = "flex";
if(project === "snake"){
title.innerText = "Snake Game";
desc.innerText = "A classic snake game built using HTML, CSS and JavaScript.";
img1.src = "project-images/snakegame1.png";
img2.src = "project-images/snakegame2.png";
}

if(project === "kirana"){
title.innerText = "Kirana Store Management";
desc.innerText = "A store management system to manage products, billing and inventory.";
img1.src = "project-images/kirana1.png";
img2.src = "project-images/kirana2.png";
}

if(project === "portfolio"){
title.innerText = "Portfolio Website";
desc.innerText = "A personal portfolio website showcasing my projects and skills.";
img1.src = "project-images/portfolio1.png";
img2.src = "project-images/portfolio2.png";
}

}

function closeProject(){
document.getElementById("projectModal").style.display = "block";
}

function openGallery() {
    document.getElementById("certificateModal").style.display = "block";

    // ⭐ background lock
    document.body.style.overflow = "hidden";
}

function closeGallery() {
    document.getElementById("certificateModal").style.display = "none";

    // ⭐ background unlock
    document.body.style.overflow = "auto";
}