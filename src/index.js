//Practice Code
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    form.reset();
  })
})

function buildToDo(todo, dueDate) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' X';
  p.textContent = `${todo} `
  p.appendChild(btn);
  document.getElementById('tasks').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

function colorChanger(e) {

}

//CORRECT CODE FOR THE LAB
// document.addEventListener("DOMContentLoaded", () => {
//   let form = document.querySelector('form')
//   form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     buildToDo(e.target.new_task_description.value)
//     form.reset()
//   })
// });

// function buildToDo(todo) {
//   let p = document.createElement('p')
//   let btn = document.createElement('button')
//   btn.addEventListener('click', handleDelete)
//   btn.textContent = ' X'
//   p.textContent = `${todo} `
//   p.appendChild(btn)
//   console.log(p)
//   document.querySelector('#tasks').appendChild(p)
// }

// function handleDelete (e) {
//   e.target.parentNode.remove();
// }

// function changeColor() {
//   const color = document.getElementById('priority').value;
//   const list = document.getElementsByTagName('p');
//   for (let i=0; i<list.length; i++) {
//     list[i].style.color = color;
//   }


// }
