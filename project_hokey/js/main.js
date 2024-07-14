
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');

burger.addEventListener('click', ()=>{
  burger.classList.toggle('burger--active')
});

burger.addEventListener('click', ()=>{
  menu.classList.toggle('burger--active')
});

let photo = document.querySelector('img');
photo.addEventListener('click', ()=>{
  photo.src = '/img/images.jpg'
})


const formElement = document.getElementsByClassName('addImage'); // извлекаем элемент формы
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
  // теперь можно извлечь данные
  const name = formData.get(file.value);
  console.log('name');
  });