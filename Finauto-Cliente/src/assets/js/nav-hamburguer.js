document.getElementById('search-icon').addEventListener('click', function () {
    const searchForm = document.getElementById('search-form');
    searchForm.style.display = searchForm.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('hamburger').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
});