
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