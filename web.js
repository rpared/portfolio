
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

//PORTFOLIO Pop Up 
var popUp = document.querySelector("#port-popup");
let popUpContent = document.querySelector("#popup-content");
let popUpImg = document.querySelector(".popimg");
let nextBtn = document.querySelector("#next");
let prevBtn = document.getElementById("prev");
let player = document.getElementById("player");
let portMode;




// PORTFOLIO BUTTONS
function costravid(){
    popUp.style.display = "flex";
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    document.getElementById("player").style.display = "flex";
    portMode = "costravid";
    popUpImg.src = "";
    popUpImg.alt = "";
    document.getElementById("player").innerHTML = `<iframe width="720px" height="480" src="https://www.youtube.com/embed/olBVt3xlsTA?controls=1"></iframe>` ;

}

function produ(){
    popUp.style.display = "flex";
    portMode = "produ";
    popUpImg.src = "images/portfoliolargepics/produ1.png"; 
};
document.getElementById("produbtn").addEventListener("click", produ);

//This was to link the button to github, but was troublesome
// let hangman = () =>{
//     popUp.style.display = "flex";
//     portMode = "hangman";
//     popUp.innerHTML = `
//              <div id="popup-controls">
//                 <button type="button" id="closebtn" title="Close" > x </button>
            
//                 <div id="popup-content" > 
//                 <a href="https://github.com/rpared/hangmangame.git" target="_blank"> 
//                 <img class="popimg" src="images/portfoliolargepics/hangman1.png" alt="Portfolio">
//                 </a>
//                 </div> 
//                 <div id="player">
//                 </div>
//             </div>
//     `
// };


let hangman = () =>{
    popUp.style.display = "flex";
    portMode = "hangman";
    popUpImg.src = "images/portfoliolargepics/hangman1.png"; 
    
};

document.getElementById("hangmangame").addEventListener("click", hangman);



// Pop Up Buttons Functions
function nextSlide(){
    if (portMode == "hangman"){
        if (popUpImg.src.endsWith("hangman1.png")){
        popUpImg.src = "images/portfoliolargepics/hangman2.png";
        } else if (popUpImg.src.endsWith("hangman2.png")){
        popUpImg.src = "images/portfoliolargepics/hangman3.png";
        } else if (popUpImg.src.endsWith("hangman3.png")){
            popUpImg.src = "images/portfoliolargepics/hangman1.png";
            }
    };
    if (portMode == "produ"){
        if (popUpImg.src.endsWith("produ1.png")){
        popUpImg.src = "images/portfoliolargepics/produ2.png";
        } else if (popUpImg.src.endsWith("produ2.png")){
        popUpImg.src = "images/portfoliolargepics/produ3.png";
        } else if (popUpImg.src.endsWith("produ3.png")){
            popUpImg.src = "images/portfoliolargepics/produ1.png";
            }
    };
    if (portMode == "rcb"){
        if (popUpImg.src.endsWith("rcb1.png")){
        popUpImg.src = "images/portfoliolargepics/rcb2.png";
        } else if (popUpImg.src.endsWith("rcb2.png")){
        popUpImg.src = "images/portfoliolargepics/rcb3.png";
        } else if (popUpImg.src.endsWith("rcb3.png")){
        popUpImg.src = "images/portfoliolargepics/rcb4.png";
        } else if (popUpImg.src.endsWith("rcb4.png")){
            popUpImg.src = "images/portfoliolargepics/rcb1.png";
            }
    };

    if (portMode == "yachay"){
        if (popUpImg.src.endsWith("yachay1.png")){
        popUpImg.src = "images/portfoliolargepics/yachay2.png";
        } else if (popUpImg.src.endsWith("yachay2.png")){
        popUpImg.src = "images/portfoliolargepics/yachay3.png";
        } else if (popUpImg.src.endsWith("yachay3.png")){
        popUpImg.src = "images/portfoliolargepics/yachay4.png";
        } else if (popUpImg.src.endsWith("yachay4.png")){
            popUpImg.src = "images/portfoliolargepics/yachay1.png";
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

    if (portMode == "apex"){
        if (popUpImg.src.endsWith("apex1.png")){
        popUpImg.src = "images/portfoliolargepics/apex2.png";
        } else if (popUpImg.src.endsWith("apex2.png")){
        popUpImg.src = "images/portfoliolargepics/apex3.png";
        } else if (popUpImg.src.endsWith("apex3.png")){
        popUpImg.src = "images/portfoliolargepics/apex1.png";
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

// PREV BUTTON
// function for web&It
function prevSlide(){
    if (portMode == "hangman"){
        if (popUpImg.src.endsWith("hangman1.png")){
        popUpImg.src = "images/portfoliolargepics/hangman3.png";
        } else if (popUpImg.src.endsWith("hangman3.png")){
        popUpImg.src = "images/portfoliolargepics/hangman2.png";
        } else if (popUpImg.src.endsWith("hangman2.png")){
            popUpImg.src = "images/portfoliolargepics/hangman1.png";
            }
        }
    if (portMode == "produ"){
        if (popUpImg.src.endsWith("produ1.png")){
        popUpImg.src = "images/portfoliolargepics/produ3.png";
        } else if (popUpImg.src.endsWith("produ3.png")){
        popUpImg.src = "images/portfoliolargepics/produ2.png";
        } else if (popUpImg.src.endsWith("produ2.png")){
            popUpImg.src = "images/portfoliolargepics/produ1.png";
            }
        }
};

prevBtn.addEventListener("click", function(){

    if (portMode == "rcb"){
        if (popUpImg.src.endsWith("rcb1.png")){
        popUpImg.src = "images/portfoliolargepics/rcb4.png";
        } else if (popUpImg.src.endsWith("rcb4.png")){
        popUpImg.src = "images/portfoliolargepics/rcb3.png";
        } else if (popUpImg.src.endsWith("rcb3.png")){
        popUpImg.src = "images/portfoliolargepics/rcb2.png";
        } else if (popUpImg.src.endsWith("rcb2.png")){
            popUpImg.src = "images/portfoliolargepics/rcb1.png";
            }
        }

    if (portMode == "yachay"){
        if (popUpImg.src.endsWith("yachay1.png")){
        popUpImg.src = "images/portfoliolargepics/yachay4.png";
        } else if (popUpImg.src.endsWith("yachay4.png")){
        popUpImg.src = "images/portfoliolargepics/yachay3.png";
        } else if (popUpImg.src.endsWith("yachay3.png")){
        popUpImg.src = "images/portfoliolargepics/yachay2.png";
        } else if (popUpImg.src.endsWith("yachay2.png")){
            popUpImg.src = "images/portfoliolargepics/yachay1.png";
            }
        }

    if (portMode == "apex"){
        if (popUpImg.src.endsWith("apex1.png")){
        popUpImg.src = "images/portfoliolargepics/apex3.png";
        } else if (popUpImg.src.endsWith("apex3.png")){
        popUpImg.src = "images/portfoliolargepics/apex2.png";
        } else if (popUpImg.src.endsWith("apex2.png")){
        popUpImg.src = "images/portfoliolargepics/apex1.png";
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

    if (portMode == "age"){
        if (popUpImg.src.endsWith("age1.png")){
        popUpImg.src = "images/portfoliolargepics/age3.png";
        } else if (popUpImg.src.endsWith("age3.png")){
        popUpImg.src = "images/portfoliolargepics/age2.png";
        } else if (popUpImg.src.endsWith("age2.png")){
        popUpImg.src = "images/portfoliolargepics/age1.png";
        }
    };

    if (portMode == "pantalla"){
        if (popUpImg.src.endsWith("pantalla1.png")){
        popUpImg.src = "images/portfoliolargepics/pantalla3.png";
        } else if (popUpImg.src.endsWith("pantalla3.png")){
        popUpImg.src = "images/portfoliolargepics/pantalla2.png";
        } else if (popUpImg.src.endsWith("pantalla2.png")){
        popUpImg.src = "images/portfoliolargepics/pantalla1.png";
        }
    };

    if (portMode == "seastar"){
        if (popUpImg.src.endsWith("seastar1.png")){
        popUpImg.src = "images/portfoliolargepics/seastar4.png";
        } else if (popUpImg.src.endsWith("seastar4.png")){
        popUpImg.src = "images/portfoliolargepics/seastar3.png";
        } else if (popUpImg.src.endsWith("seastar3.png")){
        popUpImg.src = "images/portfoliolargepics/seastar2.png";
        } else if (popUpImg.src.endsWith("seastar2.png")){
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
        if (popUpImg.src.endsWith("rumi3.png")){
        popUpImg.src = "images/portfoliolargepics/rumi2.png";
        } else if (popUpImg.src.endsWith("rumi2.png")){
        popUpImg.src = "images/portfoliolargepics/rumi1.png";
        } else if (popUpImg.src.endsWith("rumi1.png")){
        popUpImg.src = "images/portfoliolargepics/rumi3.png";
        }
    };
    
});

// CLOSE BUTTON
document.getElementById("closebtn").addEventListener("click", function(){
    popUp.style.display = "none";
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
    document.querySelector("#player").style.display = "none";
    document.getElementById("player").innerHTML = `<iframe width="650px" height="480px"src=""></iframe>` ;

});

// If user clicks outside the popup-controls element, hide it!
    popUp.addEventListener("click", function(event) {
        if (!event.target.closest("#popup-controls")) {
            console.log("click");
            popUp.style.display = "none";
            document.querySelector("#player").style.display = "none";
            nextBtn.style.display = "block";
    prevBtn.style.display = "block";
        }
    });
    
