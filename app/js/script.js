const btnHumburger = document.querySelector('#btnHumburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHumburger.addEventListener('click', function() {
    console.log("Open Humburger")

    // содержит ли кнопка класс "open". Если содержит, то удаляет этот класс.
    if(header.classList.contains('open')) {
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    else {
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
})