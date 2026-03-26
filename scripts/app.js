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