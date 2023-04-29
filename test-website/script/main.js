const myImage = document.querySelector("img");
myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/ipl.jpg"){
		myImage.setAttribute("src","images/ipl2.png");
	}
	else{
		myImage.setAttribute("src","images/ipl.jpg");
	}
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1")
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `IPL is super cool, hello, ${myName}`;
  }
}


myButton.onclick = () => {
	setUserName();
};
