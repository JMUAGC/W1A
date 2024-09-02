// src/components/StreamList.js
import React, { useState } from 'react';

const StreamList = () => {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            console.log(input); // Display input in the console
            setItems([...items, input]);
            setInput('');
        }
    };

    return (
        <div>
            <h1>StreamList</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a movie or show"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default StreamList;
