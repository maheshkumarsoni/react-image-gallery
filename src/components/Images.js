import React, { useState } from 'react';

export default function Images() {
    const [images, setimages] = useState([
        "https://images.unsplash.com/photo-1600498834254-7c1fd0c2b9d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1600498834254-7c1fd0c2b9d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1600498834254-7c1fd0c2b9d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1600498834254-7c1fd0c2b9d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1600498834254-7c1fd0c2b9d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    ]);
    const [newImageUrl, setNewImageUrl] = useState('');

    function ShowImage() {
        return images.map((image) => {
            return (
                <div>
                    <img src={image} />
                </div>
            );
        });
    }

    function handleOnChangeImageUrl(event) {
        setNewImageUrl(event.target.value);
    }

    function handleOnClickAddImage() {
        if (newImageUrl !== '') {
            setimages([
                newImageUrl,
                ...images
            ]);
            setNewImageUrl('');
        }
    }


    return (
        <section>
            <div>
                <ShowImage />
            </div>
            <div>
                <input type="text" value={newImageUrl} onChange={handleOnChangeImageUrl} />
            </div>
            <div>
                <button disabled={newImageUrl === ''} onClick={handleOnClickAddImage}>
                    Add Image
                </button>
            </div>
        </section>
    );
}