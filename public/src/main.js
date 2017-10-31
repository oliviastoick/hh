
console.log('main js is connected!');

function completeTodo(id, div) {
  fetch(`/hh/${id}/complete`, {
    method: 'PUT',
  }).then(res => res.json())
    .then(jsonRes => {
      if (jsonRes.completed) {
        div.innerHTML = '<p>Done</p>';
      }
    }).catch(err => {
      console.log(err);
    });
}

function grabCompletionDivs() {
  const completionDivs = document.querySelectorAll('.completion');
  completionDivs.forEach(div => {
    div.addEventListener('click', () => completeHh(div.dataset.hhid, div));
  })
}

document.addEventListener('DOMContentLoaded', grabCompletionDivs);
