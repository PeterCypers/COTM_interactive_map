function init(){
    const rooms = document.getElementsByClassName("room");

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i];
        room.onclick = () => {
            // case: clicked cancel -> innertext doesn't change
            room.innerText = prompt("Token:", room.innerText) ?? room.innerText;
            setInStorage();
            if(room.innerText){
                room.style.backgroundColor = "aqua";
            }else{
                room.style.backgroundColor = "white";
            }
        }
    }

    getFromStorage();
}

function getFromStorage(){
    let listFromStorage = JSON.parse(localStorage.getItem("circleOfTheMoonRooms"));
    if(listFromStorage){
        initialiseHtml(listFromStorage);
    }
}

function setInStorage(){
    const list = [];
    const rooms = document.getElementsByClassName("room");
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i];
        list.push(room.innerText);
    }
    window.localStorage.setItem("circleOfTheMoonRooms", JSON.stringify(list));
}

function initialiseHtml(list){
    const rooms = document.getElementsByClassName("room");

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i];
        room.innerText = list[i];
        if(room.innerText){
            room.style.backgroundColor = "aqua";
        }
    }

}

window.onload = init;