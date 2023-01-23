const btnToogle = document.querySelector('.toogle-btn');

btnToogle.addEventListener('click', function() {
    document.getElementById('nav-bar').classList.toggle('active')
})