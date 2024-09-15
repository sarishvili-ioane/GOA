document.addEventListener('DOMContentLoaded', () => {
    const noteText = document.getElementById('noteText');
    const addNoteButton = document.getElementById('addNote');
    const notesContainer = document.getElementById('notesContainer');
    const textColorInput = document.getElementById('textColor');
    const borderColorInput = document.getElementById('borderColor');

    // Load notes from local storage
    const loadNotes = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesContainer.innerHTML = '';
        notes.forEach((note, index) => {
            createNoteElement(note, index);
        });
    };

    // Create note element
    const createNoteElement = (note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.style.color = note.textColor;
        noteDiv.style.borderColor = note.borderColor;
        noteDiv.style.border = `2px solid ${note.borderColor}`;
        noteDiv.innerHTML = `
            <p>${note.text}</p>
            <button class="delete-btn" data-index="${index}">x</button>
        `;
        notesContainer.appendChild(noteDiv);
    };

    // Save note to local storage
    const saveNote = (text, textColor, borderColor) => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ text, textColor, borderColor });
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
    };

    // Delete note from local storage
    const deleteNote = (index) => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
    };

    // Add note event
    addNoteButton.addEventListener('click', () => {
        const text = noteText.value.trim();
        const textColor = textColorInput.value;
        const borderColor = borderColorInput.value;
        if (text) {
            saveNote(text, textColor, borderColor);
            noteText.value = '';
        }
    });

    // Delete note event
    notesContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            deleteNote(index);
        }
    });

    // Initial load
    loadNotes();
});
