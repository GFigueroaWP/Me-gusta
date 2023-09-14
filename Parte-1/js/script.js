let likeElement = document.querySelector(".likes");
let likesCount = likeElement.innerText;

function like() {
    likesCount++;
    likeElement.innerText = likesCount;
}
