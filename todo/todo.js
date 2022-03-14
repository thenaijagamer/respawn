const search = document.querySelector('.search input')
const addForm = document.querySelector('.add');
const taskWrapper = document.querySelector('ul');


const generateTemplate = todo => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>` ;
      taskWrapper.innerHTML += html;
};

// add todo
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if(todo.length != 0){
      generateTemplate(todo);
      
  }else{
    alert("Enter a task to do!")
  }
  addForm.add.value = '';
})

// delete todo
taskWrapper.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete')){
    if (confirm('Are you sure?')) {
      e.target.parentNode.remove();
    }
  }
})

// search todo function
const filterTodos = (term) => {
  const list = document.querySelectorAll('.list-group-item')
  list.forEach(element => {
    if(element.textContent.toLowerCase().includes(term)){
      element.classList.remove('none')
    }else{
      element.classList.add('none')
    }
  }); 
}

search.addEventListener('input', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term)
})


 
