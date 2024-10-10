document.addEventListener('DOMContentLoaded', () => { 
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskDescription = document.getElementById('new-task-description').value;
      const priority = document.getElementById('priority-select').value;
      
      if (taskDescription !== "") {
          addTaskToList(taskDescription, priority);
      }

      form.reset();
  });

  function addTaskToList(task, priority) {
      const li = document.createElement('li');
      li.textContent = `${task} `;
      
      li.style.color = getColorByPriority(priority);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
          li.remove();
      });

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
          const newTaskDescription = prompt('Edit task:', task);
          if (newTaskDescription) {
              li.firstChild.textContent = `${newTaskDescription} `;
          }
      });

      li.appendChild(deleteButton);
      li.appendChild(editButton);

      taskList.appendChild(li);
  }

  function getColorByPriority(priority) {
      switch (priority) {
          case 'high':
              return 'red';
          case 'medium':
              return 'blue';
          case 'low':
              return 'green';
          default:
              return 'black';
      }
  }
});
