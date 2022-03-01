// src/POPOSDetails.js

import React from 'react'
import { useParams } from 'react-router'
import data from '../../sfpopos-data.js'
import './POPOSDetails.css'
//import POPOSFeatureList from '../DocumentDetails/POPOSFeatureList'

function DocumentDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, features} = data[id]
  //<DocumentList features={features} />
  return (
    <div className="DocumentDetails">
      <div className="DocumentDetails-image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt='' />
      </div>
      <div className="DocumentDetails-info">
        <h1 className="DocumentDetails-title">{ title }</h1>
        <p className="DocumentDetails-desc">{ desc }</p>
      </div>
    </div>
  )
}

export default DocumentDetails