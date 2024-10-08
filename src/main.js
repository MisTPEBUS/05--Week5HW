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

document.addEventListener('DOMContentLoaded', function () {
  const arrow_downward = document.getElementById('arrow-downward');
  const arrow_upward = document.getElementById('arrow-upward');
  const editVerified = document.getElementById('editVerified');
  if (arrow_downward) {
    arrow_downward.addEventListener('click', function () {
      toggleItem(arrow_downward);
      toggleItem(arrow_upward);
      toggleItem(editVerified);
    });
  }
  if (arrow_upward) {
    arrow_upward.addEventListener('click', function () {
      toggleItem(arrow_downward);
      toggleItem(arrow_upward);
      toggleItem(editVerified);
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const assign_footer = document.getElementById('assignFooter');
  const isReply = document.getElementById('isReply');
  const hasReply = document.getElementById('hasReply');
  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      toggleItem(isReply);
      toggleItem(hasReply);
      toggleItem(assign_footer);
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('cancel');
  const assign_footer = document.getElementById('assignFooter');
  const isReply = document.getElementById('isReply');
  const hasReply = document.getElementById('hasReply');
  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      toggleItem(isReply);
      toggleItem(hasReply);
      toggleItem(assign_footer);

    });
  }
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
  const openModal_eddit = document.getElementById('openModal_eddit');
  const openModal_new = document.getElementById('openModal_new');
  if (openModal_view_row || openModal_view) {
    if (openModal_view_row) {
      openModal_view_row.addEventListener('click', toggleModalView);
    }
    if (openModal_view) {
      openModal_view.addEventListener('click', toggleModalView);
    }
  }

  if (openModal_eddit) {
    openModal_eddit.addEventListener('click', toggleModalEdit);
  }
  if (openModal_new) {
    openModal_new.addEventListener('click', toggleModalNew);
  }

  function toggleModalView() {
    const modalView = document.getElementById('modal_view');

    if (modalView) {
      modalView.classList.toggle('hidden');
      document.getElementById('editVerified').classList.add('hidden');
      document.getElementById('arrow-upward').classList.add('hidden');
      document.getElementById('arrow-downward').classList.remove('hidden');
    }
  }
  function toggleModalEdit() {
    const modalView = document.getElementById('modal_edit');
    if (modalView) {
      modalView.classList.toggle('hidden');
    }
  }
  function toggleModalNew() {
    const modalView = document.getElementById('modal_new');
    if (modalView) {
      modalView.classList.toggle('hidden');
    }
  }
});



document.addEventListener('DOMContentLoaded', () => {

  var icons = Quill.import('ui/icons');
  icons['link'] = '<i class="material-icons -mt-1"> link</i>';
  icons['code-block'] = '<i class="material-icons -mt-1"> code</i>';

  const Font = Quill.import('formats/font');
  Font.whitelist = ['lato', 'arial', 'times-new-roman'];
  Quill.register(Font, true);
  const editor_container = document.getElementById('editor-container');
  if (editor_container) {
    const editor = new Quill('#editor-container', {
      theme: 'snow',
      placeholder: 'Reply an answer…',
      modules: {
        toolbar: [
          [{ 'size': ['small', false, 'large', 'huge'] }],
          ['bold'],
          ['italic'],
          [{ 'list': 'bullet' }],
          [{ 'list': 'ordered' }],
          ['image'],
          ['link'],
          ['code-block'],
        ]
      }
    });
  }
});

