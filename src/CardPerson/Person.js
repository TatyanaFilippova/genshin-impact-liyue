import React from "react";
import Like from "../ButtonLike/Like";
import './Person.css'


function Person({ img, star, openModal, name, onClick, icon, bg }) {
    return (
        <div className='cardPerson' >
            <Like onClick={onClick} />
            <button className='border' onClick={openModal} style={{ background: bg }}>
                <img src={icon} className='iconElement' />
                <img src={img} className='imgPerson' />
                <div className='fieldCardPerson'>
                    <div className='namePerson'>{name}</div>
                    <img src={star} />
                </div>
            </button>
        </div>
    )
}

export default Person