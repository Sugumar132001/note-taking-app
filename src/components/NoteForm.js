import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/actions';

const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({ title, content, backgroundColor, image }));
        setTitle('');
        setContent('');
        setBackgroundColor('#ffffff');
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className="content-container">
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <div className="picker-container">
                    <div className='flex'>
                    <label htmlFor="backgroundColor" className="picker-label">Color:</label>
                    <input
                        type="color"
                        id="backgroundColor"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="picker-input"
                    /></div>
                    <div className='flex'>
                    <label htmlFor="image" className="picker-label">Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="picker-input"
                    /></div>
                </div>
            </div>
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NoteForm;
