import { Outlet } from 'react-router-dom'

import Navbar from './Navbar.js'
import './App.css';
import DocumentList from './DocumentList/DocumentList'

function App(){
    return (
        <div className="App">
        <Navbar />
        <DocumentList />
        </div>
    )
}

export default App;
