import { RouterProvider } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import './App.css';


import { Routes } from './components/Routes/Routes';

function App() {
  return (
    <div style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }} className='container h-75'>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
