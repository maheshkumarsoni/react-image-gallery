import React, { useState } from 'react';

export default function Images() {
    const [images, setimages] = useState([
        "https://images.unsplash.com/photo-1600712365047-26f7a4f04d44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1539614119683-5bfaf2013b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1600521605615-a8d3a23d8262?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1600622282148-696ecca9bfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1599133806498-2620bbb50813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    ]);
    const [newImageUrl, setNewImageUrl] = useState('');

    function ShowImage() {
        return images.map((image) => {
            return (
                <div className="flex justify-center w-1/4 my-4">
                    <img src={image} width="250px" alt={image} />
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
            <div className="flex flex-wrap justify-center">
                <ShowImage />
            </div>
            <div className="flex justify-between my-5">
                <div className="w-full">
                    <input type="text" className="p-2 border border-gray-800 shadow rounded w-full"
                        value={newImageUrl}
                        onChange={handleOnChangeImageUrl} />
                </div>
            </div>
            <div className="">
                <button disabled={newImageUrl === ''} onClick={handleOnClickAddImage}
                    className={`p-2 mb-10 text-white rounded ${newImageUrl !== '' ? "bg-green-700" : "bg-gray-700"}`}>
                    Add Image
                </button>
            </div>
        </section>
    );
}