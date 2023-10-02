
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Dashboard = () => {
//     const [record, setRecord] = useState([])
//     const [open, setOpen] = useState(false);

//     // const togen = localStorage.getItem("admin");

//     // const onOpenModal = () => {
//     //     setOpen(true)
//     // }

//     // const onCloseModal = () => {
//     //     setOpen(false)
//     // }

//     const navigate = useNavigate();
//     // Edit
//     const editData = (id) => {
//         navigate("/edit/" + id);
//     }

//     // Delete

//     const deleteData = (id) => {
//         // const togen = localStorage.getItem("admin");
//         // console.log(id, "delete id");

//         // fetch("http://localhost:8000/users/" + id, {
//         //     method: "DELETE",
//         //     headers: {
//         //         "Authorization": `Bearer ${togen}`
//         //     }
//         // }).then((res) => {

//         //     // onOpenModal();
//         //     if (res.ok) {
//         //         setRecord((elm) =>
//         //             elm.filter((output) => {
//         //                 return output.id !== id
//         //             })
//         //         )
//         //     } else {
//         //         console.log("Failed to delete user data.");
//         //     }
//         // }).catch((err) => {
//         //     console.log(err.message, "delete Error");
//         // })
//         // navigate("/delete/" + id)
//     }

//     const getData = () => {
//         const togen = localStorage.getItem("admin");
//         // const togen = JSON.stringify(localStorage.getItem("admin"));
//         console.log(togen);

//         fetch('http://localhost:8000/users', {
//             method: "GET",
//             headers: { "Authorization": `Bearer ${togen}` }
//         }).then((resposne) => {
//             return resposne.json()
//         }).then((res) => {
//             console.log(res, "res")
//             setRecord(res)
//         }).catch((err) => {
//             console.log(err.message, "list Error");
//         })
//     }
//     useEffect(() => {
//         getData();
//     }, [])

//     return (
//         <div className="col main pt-5 mt-3">

//             <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                     <li className="breadcrumb-item"><a href="#">Home</a></li>
//                     <li className="breadcrumb-item"><a href="#">Library</a></li>
//                     <li className="breadcrumb-item active" aria-current="page">Data</li>
//                 </ol>
//             </nav>
//             <p className="lead d-none d-sm-block">Add Employee Details and Records</p>

//             <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
//                 <button type="button" className="close" data-dismiss="alert" aria-label="Close">
//                     <span aria-hidden="true">×</span>
//                     <span className="sr-only">Close</span>
//                 </button>
//                 <strong>Data and Records</strong> Learn more about employee
//             </div>
//             <div className="row mb-3">
//                 <div className="col-xl-3 col-sm-6 py-2">
//                     <div className="card bg-success text-white h-100">
//                         <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
//                             <div className="rotate">
//                                 <i className="fa fa-user fa-4x"></i>
//                             </div>
//                             <h6 className="text-uppercase">Users</h6>
//                             <h1 className="display-4">134</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-xl-3 col-sm-6 py-2">
//                     <div className="card text-white bg-danger h-100">
//                         <div className="card-body bg-danger">
//                             <div className="rotate">
//                                 <i className="fa fa-list fa-4x"></i>
//                             </div>
//                             <h6 className="text-uppercase">Posts</h6>
//                             <h1 className="display-4">87</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-xl-3 col-sm-6 py-2">
//                     <div className="card text-white bg-info h-100">
//                         <div className="card-body bg-info">
//                             <div className="rotate">
//                                 <i className="fab fa-twitter fa-4x"></i>
//                             </div>
//                             <h6 className="text-uppercase">Tweets</h6>
//                             <h1 className="display-4">125</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-xl-3 col-sm-6 py-2">
//                     <div className="card text-white bg-warning h-100">
//                         <div className="card-body">
//                             <div className="rotate">
//                                 <i className="fa fa-share fa-4x"></i>
//                             </div>
//                             <h6 className="text-uppercase">Shares</h6>
//                             <h1 className="display-4">36</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <hr />
//             <div className="row ">
//                 <div className="">
//                     <h5 className="mt-3 mb-3 text-secondary">
//                         Check More Records of Employees
//                     </h5>
//                     <div className="table-responsive">
//                         <table className="table table-striped">
//                             <thead className="thead-light">
//                                 <tr>
//                                     <th>Id</th>
//                                     <th>First Name</th>
//                                     <th>Email</th>
//                                     <th>User Name</th>
//                                     <th>Phone</th>
//                                     <th>action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {/* record.slice(0, 5).map((output) */}
//                                 {record.map((output) =>
//                                     <tr key={output.id}>
//                                         <td>{output.id}</td>
//                                         <td>{output.firstName}</td>
//                                         <td>{output.email}</td>
//                                         <td>{output.username}</td>
//                                         <td>{output.phone}</td>
//                                         <td>
//                                             <button
//                                                 onClick={() => editData(output.id)}
//                                                 className='btn btn-success'>Edit</button>
//                                         </td>
//                                         <td>
//                                             <button
//                                                 onClick={() => deleteData(output.id)}
//                                                 className='btn btn-danger'>delete</button>

//                                             <button
//                                                 type="button"
//                                                 className="btn btn-primary"
//                                                 data-toggle="modal"
//                                                 data-target="#exampleModal"
//                                             >
//                                                 Launch demo modal
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Button trigger modal --> */}


//             {/* Modal */}
//             <div
//                 className="modal fade"
//                 id="exampleModal"
//                 tabIndex={-1}
//                 role="dialog"
//                 aria-labelledby="exampleModalLabel"
//                 aria-hidden="true"
//             >
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">
//                                 Modal title
//                             </h5>
//                             <button
//                                 type="button"
//                                 className="close"
//                                 data-dismiss="modal"
//                                 aria-label="Close"
//                             >
//                                 <span aria-hidden="true">×</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">...</div>
//                         <div className="modal-footer">
//                             <button
//                                 type="button"
//                                 className="btn btn-secondary"
//                                 data-dismiss="modal"
//                             >
//                                 Close
//                             </button>
//                             <button type="button" className="btn btn-primary">
//                                 Save changes
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Dashboard





// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import DeleteRecord from './DeleteRecord'

// const Dashboard = () => {
//     const [record, setRecord] = useState([])
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [recordToDeleteId, setRecordToDeleteId] = useState(null);
//     console.log(record, "record");

//     // const togen = localStorage.getItem("admin");

//     const openModal = (id) => {
//         setRecordToDeleteId(id);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setRecordToDeleteId(null);
//     };

//     const handleDeleteSuccess = () => {
//         // Handle UI updates after successful deletion (e.g., refresh the record list).
//         // You can also close the modal here.
//         getData(); // Refresh record list
//         closeModal(); // Close the modal
//     };


//     const navigate = useNavigate();
//     // Edit
//     const editData = (id) => {
//         navigate("/edit/" + id);
//     }

//     // Delete

//     // const deleteData = (id) => {

//     // openModal();

//     // const togen = localStorage.getItem("admin");
//     // console.log(id, "delete id");

//     // fetch("http://localhost:8000/users/" + id, {
//     //     method: "DELETE",
//     //     headers: {
//     //         "Authorization": `Bearer ${togen}`
//     //     }
//     // }).then((res) => {

//     //     // onOpenModal();
//     //     if (res.ok) {
//     //         setRecord((elm) =>
//     //             elm.filter((output) => {
//     //                 return output.id !== id
//     //             })
//     //         )
//     //     } else {
//     //         console.log("Failed to delete user data.");
//     //     }
//     // }).catch((err) => {
//     //     console.log(err.message, "delete Error");
//     // })
//     // navigate("/delete/" + id)
//     // }

//     // const deleteData = () => {
//     //     if (!recordToDeleteId) {
//     //         return;
//     //     }

//     //     const token = localStorage.getItem("admin");

//     //     fetch(`http://localhost:8000/users/${recordToDeleteId}`, {
//     //         method: "DELETE",
//     //         headers: { "Authorization": `Bearer ${token}` }
//     //     })
//     //         .then((res) => {
//     //             if (res.ok) {
//     //                 // Deletion was successful, call onDeleteSuccess
//     //                 onDeleteSuccess();
//     //             } else {
//     //                 // Log the error message to the console
//     //                 console.error('Failed to delete user data.');
//     //             }
//     //         })
//     //         .catch((err) => {
//     //             // Log the error message to the console
//     //             console.error(err.message, "delete Error");
//     //         });
//     // };

//     const getData = () => {
//         const togen = localStorage.getItem("admin");
//         // const togen = JSON.stringify(localStorage.getItem("admin"));
//         console.log(togen, "get data");

//         fetch('http://localhost:8000/users', {
//             method: "GET",
//             headers: { "Authorization": `Bearer ${togen}` }
//         }).then((resposne) => {
//             return resposne.json()
//         }).then((res) => {
//             console.log(res, "res get")
//             setRecord(res)
//         }).catch((err) => {
//             console.log(err.message, "list Error");
//         })
//     }
//     useEffect(() => {
//         getData();
//     }, [])

//     return (
//         <div className="col main pt-5 mt-3">

//             <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                     <li className="breadcrumb-item"><a href="#">Home</a></li>
//                     <li className="breadcrumb-item"><a href="#">Library</a></li>
//                     <li className="breadcrumb-item active" aria-current="page">Data</li>
//                 </ol>
//             </nav>
//             <p className="lead d-none d-sm-block">Add Employee Details and Records</p>

//             <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
//                 <button type="button" className="close" data-dismiss="alert" aria-label="Close">
//                     <span aria-hidden="true">×</span>
//                     <span className="sr-only">Close</span>
//                 </button>
//                 <strong>Data and Records</strong> Learn more about employee
//             </div>
//             <div className="row mb-3">
//                 <div className="col-xl-3 col-sm-6 py-2">
//                     <div className="card bg-success text-white h-100">
//                         <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
//                             <div className="rotate">
//                                 <i className="fa fa-user fa-4x"></i>
//                             </div>
//                             <h6 className="text-uppercase">Users</h6>
//                             <h1 className="display-4">134</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-xl-3 col-sm-6 py-2">
//                     <div className="card text-white bg-danger h-100">
//                         <div className="card-body bg-danger">
//                             <div className="rotate">
//                                 <i className="fa fa-list fa-4x"></i>
//                             </div>
//                             <h6 className="text-uppercase">Posts</h6>
//                             <h1 className="display-4">87</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-xl-3 col-sm-6 py-2">
//                     <div className="card text-white bg-info h-100">
//                         <div className="card-body bg-info">
//                             <div className="rotate">
//                                 <i className="fab fa-twitter fa-4x"></i>
//                             </div>
//                             <h6 className="text-uppercase">Tweets</h6>
//                             <h1 className="display-4">125</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-xl-3 col-sm-6 py-2">
//                     <div className="card text-white bg-warning h-100">
//                         <div className="card-body">
//                             <div className="rotate">
//                                 <i className="fa fa-share fa-4x"></i>
//                             </div>
//                             <h6 className="text-uppercase">Shares</h6>
//                             <h1 className="display-4">36</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <hr />
//             <div className="row ">
//                 <div className="">
//                     <h5 className="mt-3 mb-3 text-secondary">
//                         Check More Records of Employees
//                     </h5>
//                     <div className="table-responsive">
//                         <table className="table table-striped">
//                             <thead className="thead-light">
//                                 <tr>
//                                     <th>Id</th>
//                                     <th>First Name</th>
//                                     <th>Email</th>
//                                     <th>User Name</th>
//                                     <th>Phone</th>
//                                     <th>action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {/* record.slice(0, 5).map((output) */}
//                                 {record.map((output) =>
//                                     <tr key={output.id}>
//                                         <td>{output.id}</td>
//                                         <td>{output.firstName}</td>
//                                         <td>{output.email}</td>
//                                         <td>{output.username}</td>
//                                         <td>{output.phone}</td>
//                                         <td>
//                                             <button
//                                                 onClick={() => editData(output.id)}
//                                                 className='btn btn-success'>Edit</button>
//                                         </td>
//                                         <td>
//                                             {/* <button
//                                                 onClick={() => deleteData(output.id)}
//                                                 className='btn btn-danger'>
//                                                 delete
//                                             </button> */}

//                                             <button
//                                                 type="button"
//                                                 onClick={() => openModal(output.id)}
//                                                 className="btn btn-primary"
//                                                 // onClick={openModal}
//                                                 data-toggle="modal"
//                                                 data-target="#exampleModal"
//                                             >
//                                                 delete
//                                             </button>
//                                             {/* <DeleteRecord isOpen={isModalOpen} onClose={closeModal} /> */}
//                                         </td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                         <DeleteRecord
//                             isOpen={isModalOpen}
//                             onClose={closeModal}
//                             recordToDeleteId={recordToDeleteId}
//                             // onDeleteSuccess={showDeleteSuccessMessage}
//                             onDeleteSuccess={() => {

//                                 // Handle record deletion success, e.g., update the UI.
//                                 // You can fetch data again or update the state as needed.
//                                 // Close the modal.
//                                 closeModal();
//                             }}
//                         />
//                     </div>
//                 </div>
//             </div>
//             {/* {deleteSuccessMessage && (
//                 <div className="alert alert-success">{deleteSuccessMessage}</div>
//             )} */}
//             {/* <!-- Button trigger modal --> */}



//         </div>
//     )
// }

// export default Dashboard


// ----------------------------------------------

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteRecord from './DeleteRecord'

const Dashboard = () => {
    const [record, setRecord] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [recordToDeleteId, setRecordToDeleteId] = useState(null);
    console.log(record, "record delete");

    // const togen = localStorage.getItem("admin");

    const openModal = (id) => {
        setRecordToDeleteId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setRecordToDeleteId(null);
    };

    // const handleDeleteSuccess = () => {
    //     getData(); // Refresh record list
    //     closeModal(); // Close the modal
    // };

    const navigate = useNavigate();
    // Edit
    const editData = (id) => {
        navigate("/edit/" + id);
    }

    // Delete

    const deleteData = () => {
        const token = localStorage.getItem("admin");
        // fetch(`http://localhost:8000/users/${recordToDeleteId}`
        fetch("http://localhost:8000/users/" + recordToDeleteId, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((res) => {
                if (res.ok) {
                    setRecord((existingRecords) =>
                        existingRecords.filter((output) => {
                            return output.id !== recordToDeleteId
                        })
                    )
                    // console.log("success");
                } else {
                    console.log("Failed to delete user data.");
                }
            })
            .catch((err) => {
                // Log the error message to the console
                console.error(err.message, "delete Error");
            });

        closeModal();

    };

    const getData = () => {
        const togen = localStorage.getItem("admin");
        // const togen = JSON.stringify(localStorage.getItem("admin"));
        console.log(togen, "get data");

        fetch('http://localhost:8000/users', {
            method: "GET",
            headers: { "Authorization": `Bearer ${togen}` }
        }).then((resposne) => {
            return resposne.json()
        }).then((res) => {
            console.log(res, "res get")
            setRecord(res)
        }).catch((err) => {
            console.log(err.message, "list Error");
        })
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="col main pt-5 mt-3">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
            <p className="lead d-none d-sm-block">Add Employee Details and Records</p>

            <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    <span className="sr-only">Close</span>
                </button>
                <strong>Data and Records</strong> Learn more about employee
            </div>
            <div className="row mb-3">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Users</h6>
                            <h1 className="display-4">134</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-list fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Posts</h6>
                            <h1 className="display-4">87</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fab fa-twitter fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Tweets</h6>
                            <h1 className="display-4">125</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-share fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Shares</h6>
                            <h1 className="display-4">36</h1>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div className="row ">
                <div className="">
                    <h5 className="mt-3 mb-3 text-secondary">
                        Check More Records of Employees
                    </h5>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Email</th>
                                    <th>User Name</th>
                                    <th>Phone</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* record.slice(0, 5).map((output) */}
                                {record.map((output) =>
                                    <tr key={output.id}>
                                        <td>{output.id}</td>
                                        <td>{output.firstName}</td>
                                        <td>{output.email}</td>
                                        <td>{output.username}</td>
                                        <td>{output.phone}</td>
                                        <td>
                                            <button
                                                onClick={() => editData(output.id)}
                                                className='btn btn-success'>Edit</button>
                                        </td>
                                        <td>
                                            {/* <button
                                                onClick={() => deleteData(output.id)}
                                                className='btn btn-danger'>
                                                delete
                                            </button> */}

                                            <button
                                                type="button"
                                                onClick={() => openModal(output.id)}
                                                className="btn btn-primary"
                                                // onClick={openModal}
                                                data-toggle="modal"
                                                data-target="#exampleModal"
                                            >
                                                delete
                                            </button>
                                            {/* <DeleteRecord isOpen={isModalOpen} onClose={closeModal} /> */}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

            <div
                className={`modal ${isModalOpen ? 'show' : ''}`}
                tabIndex="-1"
                role="dialog"
                style={{ display: isModalOpen ? 'block' : 'none' }}
            >
                {/* <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            > */}
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Record deleted</h5>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                    onClick={closeModal}>Close</button>
                                <button
                                    type="button"
                                    onClick={() => deleteData()}
                                    className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard