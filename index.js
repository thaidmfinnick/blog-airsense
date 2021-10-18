var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

$('.blog-detail-action-icon-bookmark').onclick = () =>
    $('.blog-detail-action-icon-bookmark').classList.toggle(
        'blog-detail-action-icon-bookmark--active'
    );
