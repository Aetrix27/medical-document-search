// src/POPOSSpace.js
import { Link } from 'react-router-dom'
import './Document.css'

function Document(props) {
    // Get the
    const { name, image, id } = props

    return (
      <div className="Document">
        <h1>
          <Link
            className="Document-title" // add a class name!
            to={`/details/${id}`}>
            {name}
          </Link>
        </h1>
        <Link to={`/details/${id}`}>
          <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" />
        </Link>
     
      </div>
    )
  }

export default Document