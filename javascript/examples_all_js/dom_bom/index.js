import { greetingMessage } from "./utils.js";
// import greetingMessage from "./utils";

function sayHiMessage() {
  // console.log("hi, Hello");
  const name = prompt("What is your name?");
  const message = greetingMessage(name);
  document.getElementById("welcomeMessage").innerHTML = message;
}

window.sayHiMessage = sayHiMessage;
