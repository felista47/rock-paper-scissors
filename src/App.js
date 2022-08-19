import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Layout from "./components/layout"

function App() {
  return (
    <BrowserRouter>
    <Route path='/' element={Layout}/>
    </BrowserRouter>
   
  );
}

export default App;
