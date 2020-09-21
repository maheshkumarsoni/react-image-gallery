import React, { useState } from 'react';

export default function App() {

    const [title, setTitle] = useState('React Gallery');

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}