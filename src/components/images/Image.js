import React, { useState } from 'react';

export default function Image({ image, index, handleOnClickImageRemove }) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="flex justify-center w-1/4 my-4" >
            <div className="relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)} >
                <i className={`fas fa-times bg-white absolute right-0 cursor-pointer opacity-50 
                    hover:opacity-100 ${isHovering ? '' : 'hidden'}`}
                    onClick={() => handleOnClickImageRemove(index)} >
                </i>
                <img src={image} width="250px" alt={image} />
            </div>
        </div>
    );
}
