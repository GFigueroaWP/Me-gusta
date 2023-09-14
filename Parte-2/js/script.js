let posts = document.querySelectorAll('.post');
let postLikes = [];
for (let i = 0; i < posts.length; i++) {
    postLikes.push(posts[i].querySelector('.likes').innerHTML);
}
function like(element) {
    likes = postLikes[element.parentElement.parentElement.id - 1];
    likes++;
    postLikes[element.parentElement.parentElement.id - 1] = likes;
    element.parentElement.parentElement.querySelector('.likes').innerText = likes;
}