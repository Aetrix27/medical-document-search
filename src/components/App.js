import { Outlet } from 'react-router-dom'

import Navbar from './Navbar/Navbar.js'
import './App.css';
import DocumentList from './DocumentList/DocumentList'

function App(){
    return (
        <div className="App">
            <Navbar />
            <Outlet />
            <DocumentList />
        </div>
    )
}

export default App;
