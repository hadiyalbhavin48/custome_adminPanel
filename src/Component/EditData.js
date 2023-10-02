import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditData = () => {
    const [firstName, setfirstName] = useState('');
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    // const [id, setId] = useState('');
    // console.log({ firstName, username, email, phone }, "edit data");

    const { id } = useParams();
    const navigate = useNavigate();

    var token = localStorage.getItem("admin");
    const handleSubmit = (e) => {
        // alert("save")
        e.preventDefault();
        const userData = {
            id,
            firstName,
            username,
            email,
            phone,

        }
        // console.log(userData);

        fetch("http://localhost:8000/users/" + id, {
            method: "PATCH",
            headers: {

                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err.message, "Edit Error");
        })
        console.log(userData);
        navigate("/home")
    }

    useEffect(() => {
        console.log(id, "id");
        fetch("http://localhost:8000/users/" + id, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            return res.json()
        }).then((resp) => {
            console.log(resp, "Edit resp")
            setfirstName(resp.firstName)
            setusername(resp.username)
            setemail(resp.email)
            setphone(resp.phone)
        }).catch((err) => {
            console.log(err.message, "Edit Error");
        })
    }, [])
    return (
        <>
            <div className="container mt-5 pt-5">
                <h2>Update Form</h2>
                <form method="post" onSubmit={handleSubmit}>

                    {/* <div className="form-group">
                        <label htmlFor="firstname">Id</label>
                        <input
                            type="text"
                            disabled
                            value={id}
                            className="form-control"
                            id="exampleInputfirstname"
                            name="firstname"
                        />
                    </div> */}

                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                            className="form-control"
                            id="exampleInputfirstname"
                            name="firstname"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="lastname">User Name</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => { setusername(e.target.value) }}
                            className="form-control"
                            id="exampleInputlastname"
                            name="lastname"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Email1">Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => { setemail(e.target.value) }}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneno">Phone Number</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={e => { setphone(e.target.value) }}
                            className="form-control"
                            id="exampleInputphoneno"
                            name="phoneno"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3" name="create">
                        Save
                    </button>
                </form>
            </div>

        </>
    )
}

export default EditData