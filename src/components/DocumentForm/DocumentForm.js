import React from 'react'
import './DocumentForm.css'


 function DocumentForm(){
     return (
        <div class = "DocumentForm">
            <form>
                <label>
                    Title:
                    <input type="text" name="title" />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" />
                </label>
                <br />
                <label>
                    Image:
                    <input type="text" name="image" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
     )
}

export default DocumentForm