import React, { useState } from 'react';

export function SimpleList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        if (newItem !== '') {
        setItems([...items, newItem]);
        setNewItem('');
        }
    };

    const clearList = () => {
    setItems([]);
    };

  // Creating list items without using map
    const listItems = [];
        for (let i = 0; i < items.length; i++) {
        listItems.push(<li key={i}>{items[i]}</li>);
    }

return (
    <div class = "ButtonContainer">
        <h1>Simple To Do List... </h1>
        <div>
            <input className ="TextInputContainer"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
        <button class="ColorButton" onClick={addItem}>Add To List</button>
        </div>
        <ul>{listItems}</ul>
        <button class = "ColorButton" onClick={clearList}>Reset</button>
        </div>
    );
}
