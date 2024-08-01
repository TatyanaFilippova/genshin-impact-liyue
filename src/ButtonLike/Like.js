
import like from '../public/like.png'
import noLike from '../public/noLike.png'
import React, { useState } from 'react'
import './Like.css'


function Like({ onClick }) {
    const [isLike, setLike] = useState(false)
    const click = () => {
        onClick(!isLike);
        setLike(!isLike)
    }
    return (
        <div onClick={click}>
            {isLike ? <img className='Like' src={like} /> : <img className='Like' src={noLike} />}
        </div>

    )
}

export default Like