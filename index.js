let menuDisplay = false;
let dropDownMenu = document.getElementById("dropdown");


function dropdownmenu() {
  if (menuDisplay == false) {
    dropDownMenu.style.display = "flex";
    menuDisplay = true;
  } else if (menuDisplay == true) {
    dropDownMenu.style.display = "none";
    menuDisplay = false;
  }
}

//Year
document.addEventListener("DOMContentLoaded", function() {
  var currentYear = new Date().getFullYear();
  var yearElements = document.querySelectorAll(".year");
  yearElements.forEach(function(element) {
    element.textContent = currentYear;
  });
});

//PORTFOLIO Pop Up
var popUp = document.querySelector("#port-popup");
let popUpContent = document.querySelector("#popup-content");
let popUpImg = document.querySelector(".popimg");
let nextBtn = document.querySelector("#next");
let prevBtn = document.getElementById("prev");
let portMode;

// CLOSE BUTTON
document.getElementById("closebtn").addEventListener("click", function () {
  popUp.style.display = "none";
  nextBtn.style.display = "block";
  prevBtn.style.display = "block";
  document.querySelector("#player").style.display = "none";
  document.getElementById(
    "player"
  ).innerHTML = `<iframe width="650px" height="480px"src=""></iframe>`;
});



// PORTFOLIO BUTTONS
function oraclelensvid() {
  popUp.style.display = "flex";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  document.getElementById("player").style.display = "flex";
  portMode = "costravid";
  popUpImg.src = "";
  popUpImg.alt = "";
  document.getElementById(
    "player"
  ).innerHTML = `<iframe width="720px" height="480" src="https://www.youtube.com/embed/aXnLaFSGINs?controls=1"></iframe>`;
}
function vfootprintvid() {
  popUp.style.display = "flex";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  document.getElementById("player").style.display = "flex";
  portMode = "costravid";
  popUpImg.src = "";
  popUpImg.alt = "";
  document.getElementById(
    "player"
  ).innerHTML = `<iframe width="720px" height="480" src="https://www.youtube.com/embed/cc_AYLLZWBo"></iframe>`;
}
function costravid() {
  popUp.style.display = "flex";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  document.getElementById("player").style.display = "flex";
  portMode = "costravid";
  popUpImg.src = "";
  popUpImg.alt = "";
  document.getElementById(
    "player"
  ).innerHTML = `<iframe width="720px" height="480" src="https://www.youtube.com/embed/olBVt3xlsTA?controls=1"></iframe>`;
}

function tarjetarojavid() {
  popUp.style.display = "flex";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  document.getElementById("player").style.display = "flex";
  portMode = "costravid";
  popUpImg.src = "";
  popUpImg.alt = "";
  document.getElementById(
    "player"
  ).innerHTML = `<iframe width="720px" height="480" src="https://www.youtube.com/embed/XXwmUF6pLnc?controls=1"></iframe>`;
}



function aopusprototypevid() {
  popUp.style.display = "flex";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  document.getElementById("player").style.display = "flex";
  portMode = "costravid";
  popUpImg.src = "";
  popUpImg.alt = "";
  document.getElementById(
    "player"
  ).innerHTML = `<iframe width="720px" height="480" src="https://www.youtube.com/embed/pRv8SsMGM6o?controls=1"></iframe>`;
}


function presentationsvid() {
  popUp.style.display = "flex";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  document.getElementById("player").style.display = "flex";
  portMode = "costravid";
  popUpImg.src = "";
  popUpImg.alt = "";
  document.getElementById(
    "player"
  ).innerHTML = `<iframe width="720px" height="480" src="https://www.youtube.com/embed/B84_TtxoSAE?controls=1"></iframe>`;
}


document.getElementById("sudavesabtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "sudavesa";
  popUpImg.src = "images/portfoliolargepics/sudavesa1.png";
});

document.getElementById("latinbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "latintrails";
  popUpImg.src = "images/portfoliolargepics/latintrails1.png";
});

document.getElementById("credifebtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "credife";
  popUpImg.src = "images/portfoliolargepics/credife1.png";
});

document.getElementById("odysseybtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "odyssey";
  popUpImg.src = "images/portfoliolargepics/godyssey1.png";
});

document.getElementById("rcbbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "rcb";
  popUpImg.src = "images/portfoliolargepics/rcb1.png";
});

document
  .getElementById("equinoctialbtn")
  .addEventListener("click", function () {
    popUp.style.display = "flex";
    portMode = "equinoctial";
    popUpImg.src = "images/portfoliolargepics/equinoctial1.png";
  });

document.getElementById("yachaybtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "yachay";
  popUpImg.src = "images/portfoliolargepics/yachay1.png";
});

document.getElementById("apexbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "apex";
  popUpImg.src = "images/portfoliolargepics/apex2.png";
});

document.getElementById("purebtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "pure";
  popUpImg.src = "images/portfoliolargepics/pure1.png";
});

document
  .getElementById("age-resurgencebtn")
  .addEventListener("click", function () {
    popUp.style.display = "flex";
    portMode = "age";
    popUpImg.src = "images/portfoliolargepics/age1.png";
  });

document.getElementById("pantallabtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "pantalla";
  popUpImg.src = "images/portfoliolargepics/pantalla1.png";
});

document.getElementById("investmentbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "investment";
  popUpImg.src = "images/portfoliolargepics/investment1.png";
});

document.getElementById("mardisbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "mardis";
  popUpImg.src = "images/portfoliolargepics/mardis1.png";
});

document.getElementById("seastarbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "seastar";
  popUpImg.src = "images/portfoliolargepics/seastar1.png";
});

document.getElementById("ecusouthbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "ecusouth";
  popUpImg.src = "images/portfoliolargepics/ecusouth1.png";
});

document.getElementById("reflexbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "reflex";
  popUpImg.src = "images/portfoliolargepics/reflex1.jpg";
});

document.getElementById("rumibtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "rumi";
  popUpImg.src = "images/portfoliolargepics/rumi1.png";
});

document.getElementById("interactionbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "interaction";
  popUpImg.src = "images/portfoliolargepics/FlowDiagram1.png";
});

document.getElementById("isenbeckbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "isenbeck";
  popUpImg.src = "images/portfoliolargepics/isenbeck1.png";
});

document.getElementById("ancienteditorialbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "ancienteditorial";
  popUpImg.src = "images/portfoliolargepics/ancienteditorial1.png";
});

document.getElementById("ancientartconceptbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "ancientartconcept";
  popUpImg.src = "images/portfoliolargepics/ancientartconcept1.png";
});

document.getElementById("chillpackagingbtn").addEventListener("click", function () {
  popUp.style.display = "flex";
  portMode = "chillpackaging";
  popUpImg.src = "images/portfoliolargepics/chillpackaging1.png";
});

// Pop Up Buttons Functions
// NEXT BUTTON
function nextSlide() {
  
  if (portMode == "sudavesa") {
    if (popUpImg.src.endsWith("sudavesa1.png")) {
      popUpImg.src = "images/portfoliolargepics/sudavesa2.png";
    } else if (popUpImg.src.endsWith("sudavesa2.png")) {
      popUpImg.src = "images/portfoliolargepics/sudavesa1.png";
    }
  }

  if (portMode == "latintrails") {
    if (popUpImg.src.endsWith("latintrails1.png")) {
      popUpImg.src = "images/portfoliolargepics/latintrails2.png";
    } else if (popUpImg.src.endsWith("latintrails2.png")) {
      popUpImg.src = "images/portfoliolargepics/latintrails3.png";
    } else if (popUpImg.src.endsWith("latintrails3.png")) {
      popUpImg.src = "images/portfoliolargepics/latintrails4.png";
    } else if (popUpImg.src.endsWith("latintrails4.png")) {
      popUpImg.src = "images/portfoliolargepics/latintrails1.png";
    }
  }

  if (portMode == "credife") {
    if (popUpImg.src.endsWith("credife1.png")) {
      popUpImg.src = "images/portfoliolargepics/credife2.png";
    } else if (popUpImg.src.endsWith("credife2.png")) {
      popUpImg.src = "images/portfoliolargepics/credife1.png";
    }
  }

  if (portMode == "interaction") {
    if (popUpImg.src.endsWith("FlowDiagram1.png")) {
      popUpImg.src = "images/portfoliolargepics/FlowDiagram2.png";
    } else if (popUpImg.src.endsWith("FlowDiagram2.png")) {
      popUpImg.src = "images/portfoliolargepics/FlowDiagram1.png";
    }
  }

  if (portMode == "odyssey") {
    if (popUpImg.src.endsWith("godyssey1.png")) {
      popUpImg.src = "images/portfoliolargepics/godyssey2.png";
    } else if (popUpImg.src.endsWith("godyssey2.png")) {
      popUpImg.src = "images/portfoliolargepics/godyssey3.png";
    } else if (popUpImg.src.endsWith("godyssey3.png")) {
      popUpImg.src = "images/portfoliolargepics/godyssey1.png";
    }
  }

  if (portMode == "produ") {
    if (popUpImg.src.endsWith("produ1.png")) {
      popUpImg.src = "images/portfoliolargepics/produ2.png";
    } else if (popUpImg.src.endsWith("produ2.png")) {
      popUpImg.src = "images/portfoliolargepics/produ3.png";
    } else if (popUpImg.src.endsWith("produ3.png")) {
      popUpImg.src = "images/portfoliolargepics/produ1.png";
    }
  }

  if (portMode == "rcb") {
    if (popUpImg.src.endsWith("rcb1.png")) {
      popUpImg.src = "images/portfoliolargepics/rcb2.png";
    } else if (popUpImg.src.endsWith("rcb2.png")) {
      popUpImg.src = "images/portfoliolargepics/rcb3.png";
    } else if (popUpImg.src.endsWith("rcb3.png")) {
      popUpImg.src = "images/portfoliolargepics/rcb4.png";
    } else if (popUpImg.src.endsWith("rcb4.png")) {
      popUpImg.src = "images/portfoliolargepics/rcb1.png";
    }
  }

  if (portMode == "equinoctial") {
    if (popUpImg.src.endsWith("equinoctial1.png")) {
      popUpImg.src = "images/portfoliolargepics/equinoctial2.png";
    } else if (popUpImg.src.endsWith("equinoctial2.png")) {
      popUpImg.src = "images/portfoliolargepics/equinoctial1.png";
    }
  }

  if (portMode == "yachay") {
    if (popUpImg.src.endsWith("yachay1.png")) {
      popUpImg.src = "images/portfoliolargepics/yachay2.png";
    } else if (popUpImg.src.endsWith("yachay2.png")) {
      popUpImg.src = "images/portfoliolargepics/yachay3.png";
    } else if (popUpImg.src.endsWith("yachay3.png")) {
      popUpImg.src = "images/portfoliolargepics/yachay4.png";
    } else if (popUpImg.src.endsWith("yachay4.png")) {
      popUpImg.src = "images/portfoliolargepics/yachay1.png";
    }
  }

  if (portMode == "pure") {
    if (popUpImg.src.endsWith("pure1.png")) {
      popUpImg.src = "images/portfoliolargepics/pure2.png";
    } else if (popUpImg.src.endsWith("pure2.png")) {
      popUpImg.src = "images/portfoliolargepics/pure1.png";
    }
  }

  if (portMode == "mardis") {
    if (popUpImg.src.endsWith("mardis1.png")) {
      popUpImg.src = "images/portfoliolargepics/mardis2.png";
    } else if (popUpImg.src.endsWith("mardis3.png")) {
      popUpImg.src = "images/portfoliolargepics/mardis1.png";
    } else if (popUpImg.src.endsWith("mardis2.png")) {
      popUpImg.src = "images/portfoliolargepics/mardis3.png";
    }
  }

  if (portMode == "investment") {
    if (popUpImg.src.endsWith("investment1.png")) {
      popUpImg.src = "images/portfoliolargepics/investment2.png";
    } else if (popUpImg.src.endsWith("investment3.png")) {
      popUpImg.src = "images/portfoliolargepics/investment1.png";
    } else if (popUpImg.src.endsWith("investment2.png")) {
      popUpImg.src = "images/portfoliolargepics/investment3.png";
    }
  }

  if (portMode == "apex") {
    if (popUpImg.src.endsWith("apex1.png")) {
      popUpImg.src = "images/portfoliolargepics/apex2.png";
    } else if (popUpImg.src.endsWith("apex2.png")) {
      popUpImg.src = "images/portfoliolargepics/apex3.png";
    } else if (popUpImg.src.endsWith("apex3.png")) {
      popUpImg.src = "images/portfoliolargepics/apex1.png";
    }
  }

  if (portMode == "age") {
    if (popUpImg.src.endsWith("age1.png")) {
      popUpImg.src = "images/portfoliolargepics/age2.png";
    } else if (popUpImg.src.endsWith("age2.png")) {
      popUpImg.src = "images/portfoliolargepics/age3.png";
    } else if (popUpImg.src.endsWith("age3.png")) {
      popUpImg.src = "images/portfoliolargepics/age1.png";
    }
  }

  if (portMode == "pantalla") {
    if (popUpImg.src.endsWith("pantalla1.png")) {
      popUpImg.src = "images/portfoliolargepics/pantalla2.png";
    } else if (popUpImg.src.endsWith("pantalla2.png")) {
      popUpImg.src = "images/portfoliolargepics/pantalla3.png";
    } else if (popUpImg.src.endsWith("pantalla3.png")) {
      popUpImg.src = "images/portfoliolargepics/pantalla1.png";
    }
  }

  if (portMode == "seastar") {
    if (popUpImg.src.endsWith("seastar1.png")) {
      popUpImg.src = "images/portfoliolargepics/seastar2.png";
    } else if (popUpImg.src.endsWith("seastar2.png")) {
      popUpImg.src = "images/portfoliolargepics/seastar3.png";
    } else if (popUpImg.src.endsWith("seastar3.png")) {
      popUpImg.src = "images/portfoliolargepics/seastar4.png";
    } else if (popUpImg.src.endsWith("seastar4.png")) {
      popUpImg.src = "images/portfoliolargepics/seastar1.png";
    }
  }

  if (portMode == "ecusouth") {
    if (popUpImg.src.endsWith("ecusouth1.png")) {
      popUpImg.src = "images/portfoliolargepics/ecusouth2.png";
    } else if (popUpImg.src.endsWith("ecusouth2.png")) {
      popUpImg.src = "images/portfoliolargepics/ecusouth1.png";
    }
  }

  if (portMode == "reflex") {
    if (popUpImg.src.endsWith("reflex1.jpg")) {
      popUpImg.src = "images/portfoliolargepics/reflex2.png";
    } else if (popUpImg.src.endsWith("reflex2.png")) {
      popUpImg.src = "images/portfoliolargepics/reflex1.jpg";
    }
  }

  if (portMode == "rumi") {
    if (popUpImg.src.endsWith("rumi1.png")) {
      popUpImg.src = "images/portfoliolargepics/rumi2.png";
    } else if (popUpImg.src.endsWith("rumi2.png")) {
      popUpImg.src = "images/portfoliolargepics/rumi3.png";
    } else if (popUpImg.src.endsWith("rumi3.png")) {
      popUpImg.src = "images/portfoliolargepics/rumi1.png";
    }
  }

  if (portMode == "ancienteditorial") {
    if (popUpImg.src.endsWith("ancienteditorial1.png")) {
      popUpImg.src = "images/portfoliolargepics/ancienteditorial2.png";
    } else if (popUpImg.src.endsWith("ancienteditorial2.png")) {
      popUpImg.src = "images/portfoliolargepics/ancienteditorial3.png";
    } else if (popUpImg.src.endsWith("ancienteditorial3.png")) {
      popUpImg.src = "images/portfoliolargepics/ancienteditorial1.png";
    }
  }

  if (portMode == "ancientartconcept") {
    if (popUpImg.src.endsWith("ancientartconcept1.png")) {
      popUpImg.src = "images/portfoliolargepics/ancientartconcept2.png";
    } else if (popUpImg.src.endsWith("ancientartconcept2.png")) {
      popUpImg.src = "images/portfoliolargepics/ancientartconcept3.png";
    } else if (popUpImg.src.endsWith("ancientartconcept3.png")) {
      popUpImg.src = "images/portfoliolargepics/ancientartconcept1.png";
    }
  }

  if (portMode == "chillpackaging") {
    if (popUpImg.src.endsWith("chillpackaging1.png")) {
      popUpImg.src = "images/portfoliolargepics/chillpackaging2.png";
    } else if (popUpImg.src.endsWith("chillpackaging2.png")) {
      popUpImg.src = "images/portfoliolargepics/chillpackaging3.png";
    } else if (popUpImg.src.endsWith("chillpackaging3.png")) {
      popUpImg.src = "images/portfoliolargepics/chillpackaging1.png";
    }
  }

  if (portMode == "isenbeck") {
    if (popUpImg.src.endsWith("isenbeck1.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck2.png";
    } else if (popUpImg.src.endsWith("isenbeck2.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck3.png";
    } else if (popUpImg.src.endsWith("isenbeck3.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck4.png";
    } else if (popUpImg.src.endsWith("isenbeck4.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck5.png";
    } else if (popUpImg.src.endsWith("isenbeck5.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck6.png";
    } else if (popUpImg.src.endsWith("isenbeck6.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck7.gif";
    } else if (popUpImg.src.endsWith("isenbeck7.gif")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck1.png";
    }
  }
}

// PREV BUTTON
prevBtn.addEventListener("click", function () {

  if (portMode == "sudavesa") {
    if (popUpImg.src.endsWith("sudavesa2.png")) {
      popUpImg.src = "images/portfoliolargepics/sudavesa1.png";
    } else if (popUpImg.src.endsWith("sudavesa1.png")) {
      popUpImg.src = "images/portfoliolargepics/sudavesa2.png";
    }
  }

  if (portMode == "latintrails") {
    if (popUpImg.src.endsWith("latintrails4.png")) {
      popUpImg.src = "images/portfoliolargepics/latintrails3.png";
    } else if (popUpImg.src.endsWith("latintrails3.png")) {
      popUpImg.src = "images/portfoliolargepics/latintrails2.png";
    } else if (popUpImg.src.endsWith("latintrails2.png")) {
      popUpImg.src = "images/portfoliolargepics/latintrails1.png";
    } else if (popUpImg.src.endsWith("latintrails1.png")) {
      popUpImg.src = "images/portfoliolargepics/latintrails4.png";
    }
  }

  if (portMode == "credife") {
    if (popUpImg.src.endsWith("credife2.png")) {
      popUpImg.src = "images/portfoliolargepics/credife1.png";
    } else if (popUpImg.src.endsWith("credife1.png")) {
      popUpImg.src = "images/portfoliolargepics/credife2.png";
    }
  }
  if (portMode == "interaction") {
    if (popUpImg.src.endsWith("FlowDiagram1.png")) {
      popUpImg.src = "images/portfoliolargepics/FlowDiagram2.png";
    } else if (popUpImg.src.endsWith("FlowDiagram2.png")) {
      popUpImg.src = "images/portfoliolargepics/FlowDiagram1.png";
    }
  }
  if (portMode == "odyssey") {
    if (popUpImg.src.endsWith("godyssey1.png")) {
      popUpImg.src = "images/portfoliolargepics/godyssey3.png";
    } else if (popUpImg.src.endsWith("godyssey2.png")) {
      popUpImg.src = "images/portfoliolargepics/godyssey1.png";
    } else if (popUpImg.src.endsWith("godyssey3.png")) {
      popUpImg.src = "images/portfoliolargepics/godyssey2.png";
    }
  }

  if (portMode == "rcb") {
    if (popUpImg.src.endsWith("rcb1.png")) {
      popUpImg.src = "images/portfoliolargepics/rcb4.png";
    } else if (popUpImg.src.endsWith("rcb4.png")) {
      popUpImg.src = "images/portfoliolargepics/rcb3.png";
    } else if (popUpImg.src.endsWith("rcb3.png")) {
      popUpImg.src = "images/portfoliolargepics/rcb2.png";
    } else if (popUpImg.src.endsWith("rcb2.png")) {
      popUpImg.src = "images/portfoliolargepics/rcb1.png";
    }
  }

  if (portMode == "equinoctial") {
    if (popUpImg.src.endsWith("equinoctial2.png")) {
      popUpImg.src = "images/portfoliolargepics/equinoctial1.png";
    } else if (popUpImg.src.endsWith("equinoctial1.png")) {
      popUpImg.src = "images/portfoliolargepics/equinoctial2.png";
    }
  }

  if (portMode == "yachay") {
    if (popUpImg.src.endsWith("yachay1.png")) {
      popUpImg.src = "images/portfoliolargepics/yachay4.png";
    } else if (popUpImg.src.endsWith("yachay4.png")) {
      popUpImg.src = "images/portfoliolargepics/yachay3.png";
    } else if (popUpImg.src.endsWith("yachay3.png")) {
      popUpImg.src = "images/portfoliolargepics/yachay2.png";
    } else if (popUpImg.src.endsWith("yachay2.png")) {
      popUpImg.src = "images/portfoliolargepics/yachay1.png";
    }
  }

  if (portMode == "apex") {
    if (popUpImg.src.endsWith("apex1.png")) {
      popUpImg.src = "images/portfoliolargepics/apex3.png";
    } else if (popUpImg.src.endsWith("apex3.png")) {
      popUpImg.src = "images/portfoliolargepics/apex2.png";
    } else if (popUpImg.src.endsWith("apex2.png")) {
      popUpImg.src = "images/portfoliolargepics/apex1.png";
    }
  }

  if (portMode == "mardis") {
    if (popUpImg.src.endsWith("mardis1.png")) {
      popUpImg.src = "images/portfoliolargepics/mardis3.png";
    } else if (popUpImg.src.endsWith("mardis3.png")) {
      popUpImg.src = "images/portfoliolargepics/mardis2.png";
    } else if (popUpImg.src.endsWith("mardis2.png")) {
      popUpImg.src = "images/portfoliolargepics/mardis1.png";
    }
  }

  if (portMode == "pure") {
    if (popUpImg.src.endsWith("pure1.png")) {
      popUpImg.src = "images/portfoliolargepics/pure2.png";
    } else if (popUpImg.src.endsWith("pure2.png")) {
      popUpImg.src = "images/portfoliolargepics/pure1.png";
    }
  }

  if (portMode == "age") {
    if (popUpImg.src.endsWith("age1.png")) {
      popUpImg.src = "images/portfoliolargepics/age3.png";
    } else if (popUpImg.src.endsWith("age3.png")) {
      popUpImg.src = "images/portfoliolargepics/age2.png";
    } else if (popUpImg.src.endsWith("age2.png")) {
      popUpImg.src = "images/portfoliolargepics/age1.png";
    }
  }

  if (portMode == "pantalla") {
    if (popUpImg.src.endsWith("pantalla1.png")) {
      popUpImg.src = "images/portfoliolargepics/pantalla3.png";
    } else if (popUpImg.src.endsWith("pantalla3.png")) {
      popUpImg.src = "images/portfoliolargepics/pantalla2.png";
    } else if (popUpImg.src.endsWith("pantalla2.png")) {
      popUpImg.src = "images/portfoliolargepics/pantalla1.png";
    }
  }

  if (portMode == "investment") {
    if (popUpImg.src.endsWith("investment1.png")) {
      popUpImg.src = "iminvestments/portfoliolargepics/investment3.png";
    } else if (popUpImg.src.endsWith("investment3.png")) {
      popUpImg.src = "iminvestments/portfoliolargepics/investment2.png";
    } else if (popUpImg.src.endsWith("investment2.png")) {
      popUpImg.src = "iminvestments/portfoliolargepics/investment1.png";
    }
  }

  if (portMode == "seastar") {
    if (popUpImg.src.endsWith("seastar1.png")) {
      popUpImg.src = "images/portfoliolargepics/seastar4.png";
    } else if (popUpImg.src.endsWith("seastar4.png")) {
      popUpImg.src = "images/portfoliolargepics/seastar3.png";
    } else if (popUpImg.src.endsWith("seastar3.png")) {
      popUpImg.src = "images/portfoliolargepics/seastar2.png";
    } else if (popUpImg.src.endsWith("seastar2.png")) {
      popUpImg.src = "images/portfoliolargepics/seastar1.png";
    }
  }

  if (portMode == "ecusouth") {
    if (popUpImg.src.endsWith("ecusouth1.png")) {
      popUpImg.src = "images/portfoliolargepics/ecusouth2.png";
    } else if (popUpImg.src.endsWith("ecusouth2.png")) {
      popUpImg.src = "images/portfoliolargepics/ecusouth1.png";
    }
  }

  if (portMode == "reflex") {
    if (popUpImg.src.endsWith("reflex1.jpg")) {
      popUpImg.src = "images/portfoliolargepics/reflex2.png";
    } else if (popUpImg.src.endsWith("reflex2.png")) {
      popUpImg.src = "images/portfoliolargepics/reflex1.jpg";
    }
  }

  if (portMode == "rumi") {
    if (popUpImg.src.endsWith("rumi3.png")) {
      popUpImg.src = "images/portfoliolargepics/rumi2.png";
    } else if (popUpImg.src.endsWith("rumi2.png")) {
      popUpImg.src = "images/portfoliolargepics/rumi1.png";
    } else if (popUpImg.src.endsWith("rumi1.png")) {
      popUpImg.src = "images/portfoliolargepics/rumi3.png";
    }
  }

  if (portMode == "ancienteditorial") {
    if (popUpImg.src.endsWith("ancienteditorial3.png")) {
      popUpImg.src = "images/portfoliolargepics/ancienteditorial2.png";
    } else if (popUpImg.src.endsWith("ancienteditorial2.png")) {
      popUpImg.src = "images/portfoliolargepics/ancienteditorial1.png";
    } else if (popUpImg.src.endsWith("ancienteditorial1.png")) {
      popUpImg.src = "images/portfoliolargepics/ancienteditorial3.png";
    }
  }

  if (portMode == "ancientartconcept") {
    if (popUpImg.src.endsWith("ancientartconcept3.png")) {
      popUpImg.src = "images/portfoliolargepics/ancientartconcept2.png";
    } else if (popUpImg.src.endsWith("ancientartconcept2.png")) {
      popUpImg.src = "images/portfoliolargepics/ancientartconcept1.png";
    } else if (popUpImg.src.endsWith("ancientartconcept1.png")) {
      popUpImg.src = "images/portfoliolargepics/ancientartconcept3.png";
    }
  }

  if (portMode == "chillpackaging") {
    if (popUpImg.src.endsWith("chillpackaging3.png")) {
      popUpImg.src = "images/portfoliolargepics/chillpackaging2.png";
    } else if (popUpImg.src.endsWith("chillpackaging2.png")) {
      popUpImg.src = "images/portfoliolargepics/chillpackaging1.png";
    } else if (popUpImg.src.endsWith("chillpackaging1.png")) {
      popUpImg.src = "images/portfoliolargepics/chillpackaging3.png";
    }
  }

  if (portMode == "isenbeck") {
    if (popUpImg.src.endsWith("isenbeck7.gif")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck6.png";
    } else if (popUpImg.src.endsWith("isenbeck6.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck5.png";
    } else if (popUpImg.src.endsWith("isenbeck5.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck4.png";
    } else if (popUpImg.src.endsWith("isenbeck4.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck3.png";
    } else if (popUpImg.src.endsWith("isenbeck3.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck2.png";
    } else if (popUpImg.src.endsWith("isenbeck2.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck1.png";
    } else if (popUpImg.src.endsWith("isenbeck1.png")) {
      popUpImg.src = "images/portfoliolargepics/isenbeck7.gif";
    }
  }

});

// If user clicks outside the popup-controls element, hide it!
popUp.addEventListener("click", function (event) {
  if (!event.target.closest("#popup-controls")) {
    console.log("click");
    popUp.style.display = "none";
    document.querySelector("#player").style.display = "none";
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
  }
});


