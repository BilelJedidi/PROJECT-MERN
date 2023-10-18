import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from "./components/Main"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
