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
const optionList = $('.blog-detail__option-list');
const optionItems = $$('.blog-detail__option-item');
const optionIcons = $$('.blog-detail__option-icon');
const optionDescriptions = $$('.blog-detail__option-description');
ellipsis.onclick = () => {
    option.classList.add('blog-detail__option--show');
};

const check = function (eventTarget, optionElements) {
    let i = 0;
    optionElements.forEach(function (item) {
        if (item != eventTarget) i++;
    });
    if (i == optionElements.length) {
        return true;
    } else {
        return false;
    }
};

window.onclick = (event) => {
    if (
        event.target != optionList &&
        check(event.target, optionItems) &&
        check(event.target, optionIcons) &&
        check(event.target, optionDescriptions) &&
        event.target != ellipsis &&
        event.target.parentNode != ellipsis
    ) {
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
