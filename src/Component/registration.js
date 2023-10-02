// // {
// //     "firstName": "Administrator",
// //     "lastName": "",
// //     "username": "dfdfdftyt",
// //     "email": "adsbnbnbndsdsmin@gmail.com",
// //     "password": "admin",
// //     "avatar": "https://robohash.org/eaquequasincidunt.png?size=50x50&set=set1",
// //     "gender": "Genderfluid",
// //     "phone": "933-658-1213",
// //     "birthday": "1994-03-23",
// //     "status": true
// //   }

// import React, { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Registration = () => {

//     const [firstName, setfirstName] = useState('');
//     const [lastName, setlastName] = useState('');
//     const [username, setusername] = useState('');
//     const [email, setemail] = useState('');
//     const [password, setpassword] = useState('');
//     const [avatar, setavatar] = useState('');
//     const [gender, setgender] = useState('male');
//     const [phone, setphone] = useState('');
//     const [birthday, setbirthday] = useState('');
//     const [status, setstatus] = useState(false);

//     // console.log(firstName, lastName, username, email, password, avatar, gender, phone, birthday, status);

//     const navigate = useNavigate();

//     // Custome Validation 

//     const isValidation = () => {

//         let isValid = true;
//         // let err = "Please Enter Valide ";
//         if (firstName === '' || firstName === null) {
//             isValid = false;
//             // err += " firstName";
//             let err = "Please Enter Valide firstName"
//             document.getElementById("validFirst").innerHTML = err
//         }

//         if (lastName === '' || lastName === null) {
//             isValid = false;
//             // err += " lastName";
//             let err = "Please Enter Valide lastName"
//             document.getElementById("validLast").innerHTML = err
//         }


//         if (username === '' || username === null) {
//             isValid = false;
//             // err += " username";

//             let err = "Please Enter Valide username"
//             document.getElementById("validuser").innerHTML = err
//         }

//         if (email === '' || email === null) {
//             isValid = false;
//             // err += " email";

//             let err = "Please Enter Valide email"
//             document.getElementById("validemail").innerHTML = err
//         }

//         if (phone === '' || phone === null) {
//             isValid = false;
//             // err += " phone";
//             let err = "Please Enter Valide phone"
//             document.getElementById("validphone").innerHTML = err
//         } else if (!/^[0-9] + $/.test(phone)) {
//             isValid = false;
//             // err += 'Valid Phone Number (only digits), ';
//             let err = "Valid Phone Number (only digits), "
//             document.getElementById("validphone").innerHTML = err
//         } else if (phone.length !== 10) {
//             isValid = false;
//             // err += " Phone Number must be 10 digits";
//             let err = "Phone Number must be 10 digits "
//             document.getElementById("validphone").innerHTML = err
//         }

//         if (!isValid) {
//             // document.getElementById("valid").innerHTML = err
//             // toast.error(err)
//             // alert(err);
//         } else {
//             if (/^[a-zA-Z0-9] + @[z-zA-Z0-9] + \.[a-zA-Z] + $/.test(email)) {

//             } else {
//                 toast.error("Please enter the valid email")
//                 // alert("Please enter the valid email");
//             }
//         }

//         return isValid
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (isValidation()) {
//             const useData = {
//                 firstName: firstName,
//                 lastName: lastName,
//                 username: username,
//                 email: email,
//                 password: password,
//                 avatar: avatar,
//                 gender: gender,
//                 phone: phone,
//                 birthday: birthday,
//                 status: status
//             }

//             fetch("http://localhost:8000/register", {
//                 method: "POST",
//                 headers: { "Content-type": "application/json" },
//                 body: JSON.stringify(useData)
//             }).then((res) => {
//                 return res.json()
//             }).then((resp) => {
//                 console.log(resp);
//             }).catch((err) => {
//                 console.log(err.message, "Registration Error");
//             })

//             navigate("/home")
//         }
//     }
//     return (
//         <>
//             <div className="container mt-5 pt-5 registr">
//                 <h2>Registration Form</h2>
//                 {/* <h3 id='valid' className=' mt-2' style={{ color: "red" }}></h3> */}
//                 <form method="post" onSubmit={handleSubmit}>
//                     <div className="form-group mt-2">
//                         <label htmlFor="firstname">First Name</label>
//                         <input
//                             type="text"
//                             onChange={e => { setfirstName(e.target.value) }}
//                             className="form-control"
//                             // id="exampleInputfirstname"
//                             name="firstname"
//                         />
//                         <p id='validFirst' style={{ color: "red" }}></p>
//                     </div>
//                     <div className="form-group mt-2">
//                         <label htmlFor="lastname">Last Name</label>
//                         <input
//                             type="text"
//                             onChange={e => { setlastName(e.target.value) }}
//                             className="form-control"
//                             id="exampleInputlastname"
//                             name="lastname"
//                         />
//                         <p id='validLast' style={{ color: "red" }}></p>
//                     </div>

//                     <div className="form-group mt-2">
//                         <label htmlFor="lastname">User Name</label>
//                         <input
//                             type="text"
//                             onChange={e => { setusername(e.target.value) }}
//                             className="form-control"
//                             id="exampleInputlastname"
//                             name="lastname"
//                         />
//                         <p id='validuser' style={{ color: "red" }}></p>

//                     </div>

//                     <div className="form-group mt-2">
//                         <label htmlFor="Email1">Email address</label>
//                         <input
//                             type="email"
//                             onChange={e => { setemail(e.target.value) }}
//                             className="form-control"
//                             id="exampleInputEmail1"
//                             aria-describedby="emailHelp"
//                             name="email"
//                         />
//                         <p id='validemail' style={{ color: "red" }}></p>

//                     </div>

//                     <div className="form-group mt-2">
//                         <label htmlFor="Password">Password</label>
//                         <input
//                             type="password"
//                             onChange={e => { setpassword(e.target.value) }}
//                             className="form-control"
//                             id="exampleInputPassword"
//                             name="password"
//                         />

//                     </div>

//                     <div className="form-group mt-2">
//                         <label className='me-2'>gender </label>
//                         <input
//                             type="radio"
//                             name="gender"
//                             value="male"
//                             checked={gender === 'male'}
//                             onChange={e => { setgender(e.target.value) }}
//                         />
//                         <label >Male</label>
//                         <input
//                             type="radio"
//                             // name='female'
//                             name="gender" value="female"
//                             checked={gender === 'female'}
//                             onChange={e => { setgender(e.target.value) }}
//                         />
//                         <label >FeMale</label>
//                     </div>

//                     <div className="form-group mt-2">
//                         <label htmlFor="phoneno">Phone Number</label>
//                         <input
//                             type="text"
//                             onChange={e => { setphone(e.target.value) }}
//                             className="form-control"
//                             id="exampleInputphoneno"
//                             name="phoneno"
//                         />
//                         <p id='validphone' style={{ color: "red" }}></p>

//                     </div>

//                     <div className="form-group mt-2">
//                         <label htmlFor="phoneno">birthday</label>
//                         <input
//                             type="date"
//                             onChange={e => { setbirthday(e.target.value) }}
//                             className="form-control"
//                             id="exampleInputphoneno"
//                             name="phoneno"
//                         />
//                     </div>


//                     <div className="form-group mt-2">
//                         <label className='me-3'>status</label>
//                         <input
//                             type="checkbox"
//                             onChange={() => setstatus(e => !e)}
//                         />
//                     </div>

//                     <button type="submit" className="btn btn-primary me-2 mt-3" name="create">
//                         Sign up
//                     </button>
//                     <Link to="/">
//                         <button className="btn btn-primary mt-3">Login</button>
//                     </Link>

//                     {/* <button className="btn btn-primary">Login</button> */}
//                 </form>
//             </div>

//         </>
//     )
// }

// export default Registration





//  ----------------- validation --------------------


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [gender, setGender] = useState('male');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [status, setStatus] = useState(false);

    // Error message state variables
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const navigate = useNavigate();

    const isValidation = () => {
        let isValid = true;

        // Validate firstName
        if (firstName.trim() === '') {
            setFirstNameError('Please enter a valid first name');
            isValid = false;
        } else {
            setFirstNameError('');
        }

        // Validate lastName   last name empty hoy to false kari nakh se or last name '' hoy tyre if true
        if (!lastName || lastName.trim() === '') {
            setLastNameError('Please enter a valid last name');
            isValid = false;
        } else {
            setLastNameError('');
        }

        // Validate username
        if (!username || username.trim() === '') {
            setUsernameError('Please enter a valid username');
            isValid = false;
        } else {
            setUsernameError('');
        }

        // Validate email
        if (!email || !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            setEmailError('Please enter a valid email');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Validate password
        if (!password || password.trim() === '') {
            setPasswordError('Please enter a valid password');
            isValid = false;
        } else {
            setPasswordError('');
        }

        // Validate phone
        if (!phone || !/^\d+$/.test(phone) || phone.length !== 10) {
            setPhoneError('Please enter a valid 10-digit phone number');
            isValid = false;
        } else {
            setPhoneError('');
        }

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidation()) {
            const useData = {
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password,
                avatar: avatar,
                gender: gender,
                phone: phone,
                birthday: birthday,
                status: status
            }

            fetch("http://localhost:8000/register", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(useData)
            }).then((res) => {
                return res.json()
            }).then((resp) => {
                console.log(resp);
            }).catch((err) => {
                console.log(err.message, "Registration Error");
            })

            navigate("/home")
        }
    }

    return (
        <>
            <div className="container mt-5 pt-5 registr">
                <h2>Registration Form</h2>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="form-group mt-2">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            className="form-control"
                            name="firstname"
                        />
                        <p style={{ color: "red" }}>{firstNameError}</p>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            className="form-control"
                            id="exampleInputlastname"
                            name="lastname"
                        />
                        <p style={{ color: "red" }}>{lastNameError}</p>
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="lastname">User Name</label>
                        <input
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control"
                            id="exampleInputlastname"
                            name="lastname"
                        />
                        <p style={{ color: "red" }}>{usernameError}</p>
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="Email1">Email address</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                        />
                        <p style={{ color: "red" }}>{emailError}</p>
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="Password">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword"
                            name="password"
                        />
                        <p style={{ color: "red" }}>{passwordError}</p>
                    </div>

                    <div className="form-group mt-2">
                        <label className='me-2'>Gender</label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === 'male'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label>Male</label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === 'female'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label>Female</label>
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="phoneno">Phone Number</label>
                        <input
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            id="exampleInputphoneno"
                            name="phoneno"
                        />
                        <p style={{ color: "red" }}>{phoneError}</p>
                    </div>


                    <div className="form-group mt-2">
                        <label htmlFor="phoneno">birthday</label>
                        <input
                            type="date"
                            onChange={e => { setBirthday(e.target.value) }}
                            className="form-control"
                            id="exampleInputphoneno"
                            name="phoneno"
                        />
                    </div>


                    <div className="form-group mt-2">
                        <label className='me-3'>status</label>
                        <input
                            type="checkbox"
                            onChange={() => setStatus(e => !e)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary me-2 mt-3" name="create">
                        Sign up
                    </button>
                    <Link to="/">
                        <button className="btn btn-primary mt-3">Login</button>
                    </Link>

                    {/* <button className="btn btn-primary">Login</button> */}
                </form>
            </div>

        </>
    )
}

export default Registration



