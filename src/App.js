import { RouterProvider } from 'react-router-dom';
import './App.css';


import { Routes } from './components/Routes/Routes';

function App() {
  return (
    <div style={{ width: '75%', margin: 'auto' }}>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
