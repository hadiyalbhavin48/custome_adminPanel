import React from 'react'
import { useParams } from 'react-router-dom';

const Delete = () => {
    const { id } = useParams();
    const deleteData = () => {
        alert("hiii")
        const togen = localStorage.getItem("admin");
        console.log(id, "delete id");

        fetch("http://localhost:8000/users/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${togen}`
            }
        }).then((res) => {
            // if (res.ok) {
            //     setRecord((elm) =>
            //         elm.filter((output) => {
            //             return output.id !== id
            //         })
            //     )
            // } else {
            //     console.log("Failed to delete user data.");
            // }
        }).catch((err) => {
            console.log(err.message, "delete Error");
        })
    }
    return (
        // <div>hiii</div>
        <div className="modal pt-5" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            onClick={() => deleteData}
                            type="button" className="btn btn-primary">
                            Save changes
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Delete