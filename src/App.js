// //   node fake api link
// //   https://github.com/robinhuy/fake-api-nodejs

// import './App.css';
// import Navbar from './Component/Navbar';
// import Sidebar from './Component/Sidebar';
// import Dashboard from './Component/Dashboard';
// import Login from './Login';
// import Registration from './Component/registration';
// import './style.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Component/Home';
// import EditData from './Component/EditData';
// import { ToastContainer, toast } from 'react-toastify';
// // import Delete from './Component/delete';
// // import DeleteRecord from './Component/DeleteRecord';
// function App() {
//   return (
//     <div className="App">
//       <ToastContainer />
//       <BrowserRouter>

//         <Routes>
//           <Route path='/' element={<Login />} />
//           <Route path='/register' element={<Registration />} />
//           <Route path='/home' element={<Home />} />
//           <Route path='/edit/:id' element={<EditData />} />
//           {/* <Route path='/delete/:id' element={<Delete />} /> */}
//           {/* <Route path='/delete/:id' element={<DeleteRecord />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// --------- Private Route -----------------


//   node fake api link
//   https://github.com/robinhuy/fake-api-nodejs

import './App.css';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import Dashboard from './Component/Dashboard';
import Login from './Login';
import Registration from './Component/registration';
import './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import EditData from './Component/EditData';
import { ToastContainer, toast } from 'react-toastify';
import PrivateRoutes from './Component/PrivateRoutes';
import PublicRoute from './Component/PublicRoute';
// import Delete from './Component/delete';
// import DeleteRecord from './Component/DeleteRecord';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<PublicRoute />} >
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
          </Route>

          <Route path='/' element={<PrivateRoutes />} exact={true}>
            <Route path='/home' element={<Home />} />
            <Route path='/edit/:id' element={<EditData />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

