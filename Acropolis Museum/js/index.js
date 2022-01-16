let museum1 = new museum();
museum1.initializeGallery();
const artPieces = museum1.getPieces();

function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";

}  

function normalImg(x) {
    x.style.height = "350px";
    x.style.width = "350px";
    alert(artPieces[0].getDescription())
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
    document.getElementById("Olivo").innerHTML = artPieces[1].getDescription();
}

function allowDrop(event) {
    event.preventDefault();
}

function scrl() {
    document.getElementById("Mosco").innerHTML = artPieces[2].getDescription();
}

function key() {
    alert(artPieces[3].getDescription())
}

function dblclick() {
    document.getElementById("rampin").innerHTML = artPieces[4].getDescription();
}