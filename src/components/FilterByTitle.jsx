import React from 'react'
import { Form } from 'react-bootstrap'

function FilterByTitle({setSearchTitle, searchTitle}) {
  return (
    <div style={{width:"50%", margin:"auto", marginTop:"20px"}}>
         <Form.Control type="text" placeholder="search movie by title...." 
         value={searchTitle}
         onChange={(e)=> setSearchTitle(e.target.value)}/>
    </div>
  )
}

export default FilterByTitle;