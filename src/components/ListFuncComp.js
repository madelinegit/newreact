import React, { useState } from 'react';

export function SimpleList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        if (newItem !== '') {
        setItems([items, newItem]);
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
        <h1>Simple To Do List </h1>
        <div>
            <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
        </div>
        <button onClick={addItem}>Add Item</button>
        <ul>{listItems}</ul>
        <button onClick={clearList}>Clear List</button>
        </div>
    );
}
