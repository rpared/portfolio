
let menuDisplay = false;
let dropDownMenu = document.getElementById("dropdown");

function dropdownmenu(){
    
    if (menuDisplay == false){
    
        dropDownMenu.style.display = "flex";
        menuDisplay = true;
    }
    else if (menuDisplay == true){        
        dropDownMenu.style.display = "none";
        menuDisplay = false;
    }
}

let popUp = document.getElementById("port-popup");
let popUpContent = document.querySelector(".popup-content");
let popUpImg = document.querySelector(".popimg");
let nextBtn = document.querySelector("#next");
let prevBtn = document.getElementById("prev");
let portMode;
let mardis1 = "images/portfoliolargepics/mardis1.png";
let apex1 = "images/portfoliolargepics/apex1.png";
let apex2 = "images/portfoliolargepics/apex2.png";
let apex3 = "images/portfoliolargepics/apex3.png";


document.getElementById("closebtn").addEventListener("click", function(){
    popUp.style.display = "none";
});

document.getElementById("apexbtn").addEventListener("click", function(){
    popUp.style.display = "flex";
    portMode = "apex";
    popUpImg.src = apex2; 
});

document.getElementById("mardisbtn").addEventListener("click", function(){
    popUp.style.display = "flex";
    portMode = "mardis";
    popUpImg.src = mardis1; 
});

document.getElementById("age-resurgencebtn").addEventListener("click", function(){
    popUp.style.display = "flex";
    portMode = "age";
    popUpImg.src = "images/portfoliolargepics/age1.png"; 
});

document.getElementById("pantallabtn").addEventListener("click", function(){
    popUp.style.display = "flex";
    portMode = "pantalla";
    popUpImg.src = "images/portfoliolargepics/pantalla1.png"; 
});

document.getElementById("seastarbtn").addEventListener("click", function(){
    popUp.style.display = "flex";
    portMode = "seastar";
    popUpImg.src = "images/portfoliolargepics/seastar1.png"; 
});

document.getElementById("ecusouthbtn").addEventListener("click", function(){
    popUp.style.display = "flex";
    portMode = "ecusouth";
    popUpImg.src = "images/portfoliolargepics/ecusouth1.png"; 
});

document.getElementById("reflexbtn").addEventListener("click", function(){
    popUp.style.display = "flex";
    portMode = "reflex";
    popUpImg.src = "images/portfoliolargepics/reflex1.jpg"; 
});

document.getElementById("rumibtn").addEventListener("click", function(){
    popUp.style.display = "flex";
    portMode = "rumi";
    popUpImg.src = "images/portfoliolargepics/rumi1.png"; 
});

// Pop Up Buttons Functions
function nextSlide(){
    if (portMode == "apex"){
        if (popUpImg.src.endsWith("apex1.png")){
        popUpImg.src = apex2;
        } else if (popUpImg.src.endsWith("apex2.png")){
        popUpImg.src = apex3;
        } else if (popUpImg.src.endsWith("apex3.png")){
        popUpImg.src = apex1;
        }
    };

    if (portMode == "mardis"){
        if (popUpImg.src.endsWith("mardis1.png")){
        popUpImg.src = "images/portfoliolargepics/mardis2.png";
        } else if (popUpImg.src.endsWith("mardis3.png")){
        popUpImg.src = "images/portfoliolargepics/mardis1.png";
        } else if (popUpImg.src.endsWith("mardis2.png")){
        popUpImg.src = "images/portfoliolargepics/mardis3.png";
        }
    };

    if (portMode == "age"){
        if (popUpImg.src.endsWith("age1.png")){
        popUpImg.src = "images/portfoliolargepics/age2.png";
        } else if (popUpImg.src.endsWith("age2.png")){
        popUpImg.src = "images/portfoliolargepics/age3.png";
        } else if (popUpImg.src.endsWith("age3.png")){
        popUpImg.src = "images/portfoliolargepics/age1.png";
        }
    };

    if (portMode == "pantalla"){
        if (popUpImg.src.endsWith("pantalla1.png")){
        popUpImg.src = "images/portfoliolargepics/pantalla2.png";
        } else if (popUpImg.src.endsWith("pantalla2.png")){
        popUpImg.src = "images/portfoliolargepics/pantalla3.png";
        } else if (popUpImg.src.endsWith("pantalla3.png")){
        popUpImg.src = "images/portfoliolargepics/pantalla1.png";
        }
    };

    if (portMode == "seastar"){
        if (popUpImg.src.endsWith("seastar1.png")){
        popUpImg.src = "images/portfoliolargepics/seastar2.png";
        } else if (popUpImg.src.endsWith("seastar2.png")){
        popUpImg.src = "images/portfoliolargepics/seastar3.png";
        } else if (popUpImg.src.endsWith("seastar3.png")){
        popUpImg.src = "images/portfoliolargepics/seastar4.png";
        } else if (popUpImg.src.endsWith("seastar4.png")){
        popUpImg.src = "images/portfoliolargepics/seastar1.png";
        }
    };

    if (portMode == "ecusouth"){
        if (popUpImg.src.endsWith("ecusouth1.png")){
        popUpImg.src = "images/portfoliolargepics/ecusouth2.png";
        } else if (popUpImg.src.endsWith("ecusouth2.png")){
        popUpImg.src = "images/portfoliolargepics/ecusouth1.png";
        }
    };

    if (portMode == "reflex"){
        if (popUpImg.src.endsWith("reflex1.jpg")){
        popUpImg.src = "images/portfoliolargepics/reflex2.png";
        } else if (popUpImg.src.endsWith("reflex2.png")){
        popUpImg.src = "images/portfoliolargepics/reflex1.jpg";
        }
    };

    if (portMode == "rumi"){
        if (popUpImg.src.endsWith("rumi1.png")){
        popUpImg.src = "images/portfoliolargepics/rumi2.png";
        } else if (popUpImg.src.endsWith("rumi2.png")){
        popUpImg.src = "images/portfoliolargepics/rumi3.png";
        } else if (popUpImg.src.endsWith("rumi3.png")){
        popUpImg.src = "images/portfoliolargepics/rumi1.png";
        }
    };
    

};

prevBtn.addEventListener("click", function(){
    if (portMode == "apex"){
        if (popUpImg.src.endsWith("apex1.png")){
        popUpImg.src = apex3;
        } else if (popUpImg.src.endsWith("apex3.png")){
        popUpImg.src = apex2;
        } else if (popUpImg.src.endsWith("apex2.png")){
        popUpImg.src = apex1;
        }
    };
    if (portMode == "mardis"){
        if (popUpImg.src.endsWith("mardis1.png")){
        popUpImg.src = "images/portfoliolargepics/mardis3.png";
        } else if (popUpImg.src.endsWith("mardis3.png")){
        popUpImg.src = "images/portfoliolargepics/mardis2.png";
        } else if (popUpImg.src.endsWith("mardis2.png")){
        popUpImg.src = "images/portfoliolargepics/mardis1.png";
        }
    };


    
});



//   document.getElementById("mardisbtn").addEventListener("click", function() {
//     popUp.innerHTML = mardis1;
//   });

