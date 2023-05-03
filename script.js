const hamburgerBtn = document.querySelector(".hamburger-btn");
const mainTwo = document.querySelector(".main-two");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownItems = document.querySelectorAll(".dropdown-items");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");


hamburgerBtn.addEventListener("click", openMenu);

dropdownItems.forEach(function(dropdownItem){
    dropdownItem.addEventListener("click", openMenu);
})

    

function openMenu(){
    if (dropdownContent.classList.contains("showContent")){
        dropdownContent.classList.remove("showContent");
        closeIcon.style.display = "none";
        menuIcon.style.display = "blocck";
    }
    else{
        dropdownContent.classList.add("showContent");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }

}

console.log(openMenu);




/*function sideMenu() {
    const t2 = document.getElementById("t2");
    const isNodeThree = t2.firstChild.nodeValue === "three";
    t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
  }*/

