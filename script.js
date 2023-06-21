// Получаем элементы объекта и кнопки "Старт!"
let object = document.getElementById('myObject');
let startButton = document.getElementById('startButton');

// Задаем функцию анимации для вращения объекта вокруг кнопки
function rotateObject(duration) {
  let start = performance.now();
  let angle = 0;

  function animate(currentTime) {
    let elapsed = currentTime - start;
    let progress = elapsed / duration;

    angle = progress * 360;

    let buttonRect = startButton.getBoundingClientRect();
    let centerX = buttonRect.left + buttonRect.width / 2;
    let centerY = buttonRect.top + buttonRect.height / 2;

    let radius = 50; // Половина диаметра окружности

    let x = centerX + Math.cos(angle * (Math.PI / 180)) * radius;
    let y = centerY + Math.sin(angle * (Math.PI / 180)) * radius;

    let translateX = x - object.offsetWidth / 2;
    let translateY = y - object.offsetHeight / 2;

    object.style.transform = `translate(${translateX}px, ${translateY}px)`;

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    } else {
      object.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
  }

  requestAnimationFrame(animate);
}

// Обработчик события нажатия на кнопку "Старт!"
startButton.addEventListener('click', function() {
  rotateObject(10000); // Запускаем анимацию вращения на 10 секунд
});