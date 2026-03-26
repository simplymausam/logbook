document.addEventListener('DOMContentLoaded', function() { 
    const app = document.getElementById('app');

    //Create a simple note
    const note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = `
        <h1> Welcome to logbook </h1>
        <p> This is your personal logbook. You can create notes, organize them, and keep track of your thoughts and ideas. </p>
    `;
    app.appendChild(note);
});

document.addEventListener('DOMContentLoaded', function() {
  const app = document.getElementById('app');
  const addNoteButton = document.createElement('button');
  addNoteButton.textContent = 'Add Note';
  addNoteButton.onclick = addNote;
  app.appendChild(addNoteButton);

  // Load saved notes from localStorage
  loadNotes();

  function addNote() {
    const note = document.createElement('div');
    note.className = 'note';
    note.contentEditable = 'true';
    note.innerHTML = '<h3>New Note</h3><p>Start typing...</p>';
    note.onblur = saveNotes; // Save when note loses focus
    app.insertBefore(note, addNoteButton);
    saveNotes();
  }

  function saveNotes() {
    const notes = [];
    document.querySelectorAll('.note').forEach(note => {
      notes.push(note.innerHTML);
    });
    localStorage.setItem('logbook-notes', JSON.stringify(notes));
  }

  function loadNotes() {
    const savedNotes = localStorage.getItem('logbook-notes');
    if (savedNotes) {
      JSON.parse(savedNotes).forEach(noteHTML => {
        const note = document.createElement('div');
        note.className = 'note';
        note.contentEditable = 'true';
        note.innerHTML = noteHTML;
        note.onblur = saveNotes;
        app.insertBefore(note, addNoteButton);
      });
    }
  }
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(
      function(registration) {
        console.log('ServiceWorker registration successful');
      },
      function(err) {
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}