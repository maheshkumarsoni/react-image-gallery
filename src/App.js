import React, { useState } from 'react';
import Images from './components/Images';

export default function App() {

    const [title, setTitle] = useState('React Gallery');

    return (
        <section>
        <div>
            <h1>{title}</h1>
                <div>
                    <Images />
                </div>
        </div>
        </section>
    );
}