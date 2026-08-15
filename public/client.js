const socket = io("http://localhost:3000");
socket.on("connect", ()=>{
    console.log(socket.id);
})
console.log("Mit Server Verbunden!");

const form = document.getElementById("inputForm");
const textfield = document.getElementById("textfield");

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