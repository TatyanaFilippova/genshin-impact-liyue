import React from "react";
import './ModalContent.css'

function ModalContent({ title, content, closeModal, imgBanner, star, stixia, weapon, cont, video, attack }) {
    return (
      <div>
        <div><h2 className='title'>{title}</h2></div>
        <div className='modalContent'>
          <img className='imgBanner' src={imgBanner} />
          <div className='modalContentText'>
            <div>
              <div className='CaseModalContent'>Рейтинг:<img className='star' src={star} /></div>
              <div className='CaseModalContent'>Глаз бога: <span className='text'> {stixia}</span></div>
              <div className='CaseModalContent'>Оружие: <span className='text'> {weapon}</span></div>
            </div>
            <p>{content}</p>
          </div>
        </div>
        <div className='head'>{cont}</div>
        <div className='attackDescription'>обычная/заряженная атака: {video}
          {attack && <img className='attack' src={attack} />}
        </div>
        <button onClick={closeModal} className='buttonModal'>Закрыть</button>
      </div>)
  };

  export default ModalContent