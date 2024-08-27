import '@/assets/styles/tailwind.css';


function removeFocus() {
  document.querySelectorAll('#menu li').forEach(item => {
    item.classList.remove('nav-active');
  });
}



document.querySelectorAll('#menu li').forEach(item => {
  item.addEventListener('click', function () {
    removeFocus();
    if (this.id === 'Assignment' || this.id === 'Admin') {
      if (this.id === 'Assignment') {
        window.location = './assignment.html';
      }
      if (this.id === 'Admin') {

        window.location = './admin.html';
      }
      this.classList.add('nav-active');
    }

  });
});


function toggleItem(item) {
  if (item.classList.contains('hidden')) {
    item.classList.remove('hidden');
  }
  else {
    item.classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const openModal_view = document.getElementById('openModal_view');
  const openModal_view_row = document.getElementById('openModal_view_row');
  if (openModal_view_row || openModal_view) {
    openModal_view_row.addEventListener('click', toggleModalView);
  }

  function toggleModalView() {
    const modalView = document.getElementById('modal_view');
    if (modalView) {
      modalView.classList.toggle('hidden');
    }
  }

});

