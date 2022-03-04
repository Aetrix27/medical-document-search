// src/DocumentList.js
import data from '../../document-data.js'
import Document from '../Document/Document';
import './DocumentList.css';
import { useState } from 'react'
import React from 'react'

function DocumentList() {
  const [ query, setQuery ] = useState('')
 
    // deconstruct hours here
    const documents = data.filter(({ features, title }) => {
    // true if query is in title
    const inTitle = title.toLowerCase().includes(query.toLowerCase())
    // true if query is in address
      // return true if either is true
      return inTitle 
    }).map((obj) => { // remove i here
			// Add id here!
			const { id, title, images, features } = obj
		return (
			<Document
				id={id} // use id here
				key={`${title}-${id}`} // use id here
                name={title}
				image={images[0]}
      />
		)
	})
    
      return (
        <div className="DocumentList">
        <form>
          <input
            value={query}
            placeholder="search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {documents}
      </div>
      )
  }
  
 
  export default DocumentList