const slides = document.querySelectorAll('#slides .slide');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const controls = document.querySelectorAll('.controls');

// текущий слайд 0
let currentSlide = 0;

//осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';

}

// навешивает обработчики событий на элементы next и previous
function setupListners() {
    next.onclick = function() {
        goToSlide(currentSlide + 1);
    }
    previous.onclick = function(){
        goToSlide(currentSlide - 1);
    }
}

//Показывает кнопки для навигации
function showButtons() {
    for(var i=0; i<controls.length; i++) {
        controls[i].style.display = 'inline-block';
    }
}

// Инициализация слайдера (подключение)
function sliderInit() {
    if (slides.length !== 0) { //если на странице есть нужный html код
        setupListners();
        showButtons();
    }
}

module.exports = sliderInit;