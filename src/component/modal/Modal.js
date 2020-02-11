// src/component/modal/Modal.js

import React from 'react';

import Button from '../button/Button';
import './Modal.css';

const modal = props => {
    return (
        <div className="modal">
            <header className="modal__header">
                <h1>{props.title}</h1>
            </header>
            <div className="modal__content">{props.children}</div>
            <div className="modal__actions">
                <Button
                    design="danger"
                    mode="flat"
                    onClick={props.onCancelModal}
                >
                    Cancel
                </Button>
                <Button
                    mode="raised"
                    onClick={props.onAcceptModal}
                    disabled={!props.acceptEnabled}
                    loading={props.isLoading}
                >
                    Accept
                </Button>
            </div>
        </div>
    );
}

export default modal;