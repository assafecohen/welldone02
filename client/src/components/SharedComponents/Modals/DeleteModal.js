import React from 'react'
import Modal from "react-bootstrap/Modal";

const DeleteModal = props => {
    const { modalStatus, setModalStatus, action } = props;
    return (
        <Modal
            show={modalStatus}
            onHide={() => setModalStatus(false)}>
            <Modal.Body>
                <div style={{textAlign: 'center'}}>
                    <span style={{fontWeight: '500', fontSize: '20px', color: '#74788d'}}>
                        Are you sure you want to delete ?
                    </span>
                </div>
                <div style={{minHeight: '150px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <button className='btn btn-secondary' onClick={() => setModalStatus(false)}>Cancel</button>
                    <button className='btn btn-danger' onClick={() => action()}>Yes, delete!</button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteModal
