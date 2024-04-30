let password;
password = "frida";
let password1 = "tasha";
let response;
let entryCount = 0;
let entryLimit = 3;
let error = false;

function resumePassword() {
  while (response != password || (!password1 && !error && !null)) {
    if (entryCount < entryLimit) {
      response = window.prompt(`Enter Password`);
      entryCount++;
    } else {
      error = true;
    }
    if (response === null) {
      entryCount = 0;
      error = false;
      return;
    }
  }

  if (error) {
    alert("Contact Roger for password: rparedes@costra.ec");
    entryCount = 0;
    error = false;
  } else {
    window.open("resume/Resume2024_RogerParedes.pdf", "_blanc");
  }
  return;
}
