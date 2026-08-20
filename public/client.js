const socket = io("http://localhost:3000", { autoConnect: false });
export default socket;

socket.onAny((event, ...args) => {
  console.log(event, args);
});

socket.on("connect_error", (err) => {
  if (err.message === "invalid username") {
    this.usernameAlreadySelected = false;
  }
});

socket.on("connect", ()=>{
    console.log(socket.id);
})
console.log("Mit Server Verbunden!");

const form = document.getElementById("inputForm");
const textfield = document.getElementById("textfield");

function dispalyMessage(msg){
    const msgGrid = document.querySelector(".chatHistory");
    const newMsg = document.createElement("li");
    newMsg.textContent = msg;
    msgGrid.append(newMsg);
    newMsg.classList.add("chatMessage");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = textfield.value.trim();
    if (msg.value === "") {
        return msg;
    }

    socket.emit("chat-message", msg);
    textfield.value = "";
    console.log(msg);
});
socket.on("chat-message", msg =>{
    dispalyMessage(msg)
    console.log(`${socket.msg}`)
})
document.addEventListener("DOMContentLoaded", ()=>{
    const modal = document.querySelector(".modal");
    const NameInput = document.getElementById("NameInput").value;
    modal.style.display = "flex";
    
    
    
})
function closeNameBtn(){
    const modal = document.querySelector(".modal");
    const NameInput = document.getElementById("NameInput").value;
    this.usernameAlreadySelected = true;
    socket.auth = { NameInput };
    socket.connect();
    console.log(socket.id);
    modal.style.display = "none";
}

document.getElementById("closeNameBtn").addEventListener("click", closeNameBtn)