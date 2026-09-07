const socket = io("http://localhost:3000", { autoConnect: false });
const nameInput = document.getElementById("nameInput");
export default socket;

socket.onAny((event, ...args) => {
  console.log(event, args);
});

socket.on("username-assigned", (username) => {
    nameInput.value = username;
});
socket.connect();

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
    modal.style.display = "flex";
})
function closeNameBtn(){
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
}

document.getElementById("closeNameBtn").addEventListener("click", closeNameBtn)