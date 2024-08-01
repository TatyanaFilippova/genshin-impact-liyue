import React from "react";
import './ModalContent.css'

function ModalContent({ title, content, closeModal, imgBanner, star, stixia, weapon, cont, video, attack }) {
    return (
        <div>
            <div><h2 className='titleModalContent'>{title}</h2></div>
            <div className='modalContent'>
                <img className='imgBanner' src={imgBanner} />
                <div className='modalContentText'>
                    <div>
                        <div className='caseModalContent'>Рейтинг:<img className='star' src={star} /></div>
                        <div className='caseModalContent'>Глаз бога: <span className='textCaseModalContent'> {stixia}</span></div>
                        <div className='caseModalContent'>Оружие: <span className='textCaseModalContent'> {weapon}</span></div>
                    </div>
                    <p>{content}</p>
                </div>
            </div>
            <div className='headAttack'>{cont}</div>
            <div className='attackDescription'>обычная/заряженная атака: {video}
                {attack && <img className='attackImg' src={attack} />}
            </div>
            <button onClick={closeModal} className='buttonModal'>Закрыть</button>
        </div>)
};

export default ModalContent