import React, { useState } from 'react';
import Modal from './modal';
// import './App.css';

function ModalButton() {
    const [status, setStatus] = useState(false);
    return (
        <div>
            { status && (<Modal closeModal={() => setStatus(false)}
                headerText={"Header"}
                primaryButton={'Cancel'}
                secondaryButton={'Delete This'}
            >
                <p>The content of the modal</p>
            </Modal>)
            }
            <button onClick={() => setStatus(true)}>Open Modal</button>

        </div>
    );
}

export default ModalButton;