import { Link } from 'react-router-dom'
import './Document.css'
import { useState } from 'react'

function Document(props) {
    // Get the
    const { name, image, id } = props
    const [data, setData] = useState(null);
    const [doctor, setDoctor] = useState([]);
  
    const getSelection = (key) => {    
        setData(doctor => [doctor, key]);
    }

    const display = () => {
        return data.map((doctor) => {
          return (
            <div class = "postInfo">
              { doctor } <div> </div>
            </div>

          )
        });

    }
    return (
      <div className="Document">
        <h2>
          <a
            className="DocumentTitle" // add a class name!
            href={`/details/${id}`}>
            {name}
          </a>
          </h2>
        <Link to={`/details/${id}`}>
          <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" />
        </Link>
        
        <form>
          <label for="doctor"> Enter a Doctor: </label>
          <br />

          <input
            type="text"
            onChange={(e) => {
              setDoctor(e.target.value);
            }}
          ></input>
            <input
              type="button"
              value="Submit"
              onClick={() => getSelection(doctor)}
            ></input>
        </form>
        {data ? display() : ''}
     
      </div>
    )

  
  }

export default Document