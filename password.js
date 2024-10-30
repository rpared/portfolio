let entryCount = 0;
let entryLimit = 3;
let error = false;
let enteredPassword;

// Base URL
const baseUrl = "https://resume-api-six.vercel.app/apiRogerResume";

// Function to fetch data from my API
async function fetchAPI(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let blob = await response.blob();
    let blobUrl = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = blobUrl;
    a.download = "Resume_RogerParedes.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Error fetching the API:", error);
    if (error) {
      alert("Incorrect password. Please try again.");
    }
  }
}

function resumePassword() {
  if (entryCount < entryLimit) {
    enteredPassword = window.prompt(`Enter Password`, "f");
    entryCount++;
  } else {
    error = true;
  }
  if (enteredPassword === null) {
    entryCount = 0;
    error = false;
    return;
  }

  if (error) {
    alert("Contact Roger for password: paredes.roger@gmail.com");

    entryCount = 0;
    error = false;
  } else {
    // Append query parameter with the entered password
    const urlWithQueryParam = `${baseUrl}?password=${enteredPassword}`;
    fetchAPI(urlWithQueryParam);
  }
  return;
}
