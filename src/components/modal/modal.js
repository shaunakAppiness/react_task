import React from 'react';
import './modal.css';
import FontAwesome from 'react-fontawesome';

const Modal = (props) => {
    const { closeModal, headerText, primaryButton, secondaryButton } = props;

    const closeicon = () => (
        <FontAwesome
            name="times"
            onClick={closeModal}
            style={{
                color: '#000000',
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: 0,
                position: 'absolute',
                top: '1.2rem',
                right: '0.5rem',
            }}
        />
    );

    return (
        <div className="overlay">
            <div className="content" >
                <div >
                    <div style={{ display: 'flex', alignSelf: 'flex-start'}}>
                    {headerText}
                    {closeicon()}
                    </div>
                    {props.children}
                </div>
                <div style={{ display: 'flex',}}>
                    <button style={{marginLeft:'auto', marginRight:'10px'}}>{primaryButton}</button>
                    <button >{secondaryButton}</button>
                </div>
            </div>
        </div>
    );
};


export default Modal;