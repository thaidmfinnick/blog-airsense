const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Bookmark
const bookmark = $('.blog-detail__icon-bookmark');
bookmark.onclick = () =>
    bookmark.classList.toggle('blog-detail__icon-bookmark--active');

// Like
const likeAside = $('.blog-aside__like');
const likeBottom = $('.blog-bottom__like');
const likeAsideIcon = $('.blog-aside__like-icon');
const likeBottomIcon = $('.blog-bottom__like-icon');

likeBottom.onclick = () => {
    likeBottomIcon.classList.toggle('blog-bottom__like-icon--active');
    likeAsideIcon.classList.toggle('blog-aside__like-icon--active');
};

likeAside.onclick = () => {
    likeBottomIcon.classList.toggle('blog-bottom__like-icon--active');
    likeAsideIcon.classList.toggle('blog-aside__like-icon--active');
};

// Option
const ellipsis = $('.blog-detail__ellipsis');
const option = $('.blog-detail__option');

ellipsis.onclick = () => {
    option.classList.add('blog-detail__option--show');
};

window.onclick = (event) => {
    if (event.target != ellipsis && event.target.parentNode != ellipsis) {
        option.classList.remove('blog-detail__option--show');
    }
};

// Comment
const messageButtons = [$('.blog-aside__comment'), $('.blog-bottom__comment')];
const closeButton = $('.comment-close');
const modal = $('.modal');
const commentContainer = $('.comment-container');

const showComment = () => {
    modal.classList.add('modal--show');
};

messageButtons.forEach((messageButton) => {
    messageButton.addEventListener('click', showComment);
});

const closeComment = () => {
    modal.classList.remove('modal--show');
};

closeButton.onclick = () => closeComment();

modal.onclick = () => closeComment();

commentContainer.onclick = (event) => event.stopPropagation();
