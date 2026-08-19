const socket = io("http://localhost:3000");
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
    modal.style.display = "flex"
    
    socket.id = NameInput;
    console.log(socket.id);
    
})
function closeNameBtn(){
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
    alert("Hallo Welt");
}
doc

document.getElementById("closeNameBtn").addEventListener("click", closeNameBtn)