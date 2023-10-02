
import React from 'react';
import { useParams } from 'react-router-dom';

const DeleteRecord = ({ isOpen, onClose, recordToDeleteId, onDeleteSuccess }) => {

    const deleteData = () => {
        if (!recordToDeleteId) {
            console.error('recordToDeleteId is not set.');
            return;
        }

        const token = localStorage.getItem("admin");

        console.log('Deleting record with ID:', recordToDeleteId);

        fetch(`http://localhost:8000/users/${recordToDeleteId}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((res) => {
                if (res.ok) {
                    console.log('Record deleted successfully.');
                    onDeleteSuccess(); // Call the success callback.
                } else {
                    console.error('Failed to delete user data.');
                }
            })
            .catch((err) => {
                console.error(err.message, "delete Error");
            });
    };

    return (
        <div
            className={`modal ${isOpen ? 'show' : ''}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: isOpen ? 'block' : 'none' }}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Record deleted</h5>
                        {/* <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button> */}
                    </div>
                    {/* <div className="modal-body">
                        Modal content goes here.
                    </div> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button
                            type="button"
                            onClick={() => deleteData()}
                            className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteRecord;


// export default DeleteRecord