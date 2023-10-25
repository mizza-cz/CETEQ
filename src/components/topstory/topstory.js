 // Получите все элементы с классом "topstory__col"
const elements = document.querySelectorAll('.topstory__col');

// Переберите элементы и добавьте обработчик события для каждого из них
elements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    // Удалите класс "active" у всех элементов
    elements.forEach((el) => {
      el.classList.remove('active');
    });

    // Добавьте класс "active" к элементу, на который навели
    element.classList.add('active');
  });
});