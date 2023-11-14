import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingIn from './pages/SignIn';
import SingUpForm from './pages/SignUp';

const App = () => {
	return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SingIn/>} />
        <Route path='/' element={<SingUpForm/>} />
        <Route path='/Home' element={<Home/>} />

      </Routes>
    </BrowserRouter>
	);
};

export default App;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AddTodoForm from './components/AddTodoForm';
// import TodoList from './components/TodoList';
// import TotalCompleteItems from './components/TotalCompleteItems';
// import SingIn from './pages/SignIn';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// const App = () => {
// 	return (
//     <div className='container bg-[#37373750] p-4 mt-5'>
//       <Router>
        
//         <div>
//           <div className='font-semibold text-[#373737] text-[2rem] text-center'>My bucket List =')</div>
//           <Routes>
//           {/* Define your routes without Switch */}
//           <Route path='/add' component={AddTodoForm} />
//           <Route path='/signin' component={SingIn} />
//           <Route path='/list' component={TodoList} />
//           <Route path='/total' component={TotalCompleteItems} />

//           {/* Default route (optional): */}
//           <Route exact path='/' component={TodoList} />
//           </Routes>
//         </div>
       
//       </Router>
//     </div>
// 	);
// };

// export default App;