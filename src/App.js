import React, { useState } from 'react';
import Images from './components/images/Images';
import './assets/css/style.css';

export default function App() {

    const [title, setTitle] = useState('React Image Toggler');

    return (
        <section className="flex justify-center">
            <div className="w-10/12">
                <div className="text-center">
                    <div className="my-4">
                        {title}
                    </div>
                    <h1>
                        <Images title={setTitle} />
                    </h1>
                </div>
            </div>
        </section>
    );
}