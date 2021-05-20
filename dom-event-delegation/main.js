var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', taskList);

function taskList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var ancestor = event.target.closest('.task-list-item');

    console.log('closest .task-item-list', ancestor);

    ancestor.remove('task-list-item');
  }
}
