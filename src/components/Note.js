import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, pinNote } from '../redux/actions';

const Note = ({ note }) => {
    const dispatch = useDispatch();

    const noteStyle = {
        backgroundColor: note.backgroundColor,
        backgroundImage: note.image ? `url(${note.image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="note" style={noteStyle}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => dispatch(pinNote(note.id))}>
                {note.pinned ? 'Unpin' : 'Pin'}
            </button>
            <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
        </div>
    );
};

export default Note;
