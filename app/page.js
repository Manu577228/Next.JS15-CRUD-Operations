"use client"

import { useState } from 'react';

export default function Home() {
    let [items, setItems] = useState([]);
    let [input, setInput] = useState('');
    let [editingIndex, setEditingIndex] = useState(null);

    let addItem = () => {
        if (input.trim() === '') return alert('Enter an item.');
        if (editingIndex !== null) {
            let updatedItems = [...items];
            updatedItems[editingIndex] = input;
            setItems(updatedItems);
            setEditingIndex(null);
        } else {
            setItems([...items, input]);
        }
        setInput('');
    };

    let editItem = (index) => {
        setInput(items[index]);
        setEditingIndex(index);
    };

    let deleteItem = (index) => {
        let updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <main
                style={{
                    flex: '1',
                    maxWidth: '600px',
                    margin: 'auto',
                    padding: '20px',
                }}
            >
                <h1 style={{ textAlign: 'center' }}>CRUD</h1>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter an item"
                        style={{
                            flex: '1',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}
                    />
                    <button
                        onClick={addItem}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#0070f3',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        {editingIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>

                <ul style={{ listStyle: 'none', padding: '0' }}>
                    {items.length === 0 && <li>No items to display.</li>}
                    {items.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                marginBottom: '10px',
                            }}
                        >
                            <span>{item}</span>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    onClick={() => editItem(index)}
                                    style={{
                                        padding: '5px 10px',
                                        fontSize: '14px',
                                        backgroundColor: '#ff9800',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteItem(index)}
                                    style={{
                                        padding: '5px 10px',
                                        fontSize: '14px',
                                        backgroundColor: '#f44336',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>

            <footer
                style={{
                    textAlign: 'center',
                    padding: '10px',
                    // backgroundColor: '#f4f4f4',
                    fontSize: '14px',
                }}
            >
                CRUD App by{' '}
                <a
                    href="https://youtube.com/@code-with-Bharadwaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#f44336',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                    }}
                >
                    Bharadwaj
                </a>
            </footer>
        </div>
    );
}
