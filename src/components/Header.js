import React from 'react'
import './../css/header.css'
import {Icon} from 'react-icons-kit'
import {search} from 'react-icons-kit/icomoon/search'

function Header(props) {
  // function for handling Showing of the Add Employee form
  const handleShowForm = () => {
    props.setShowForm((prevValue) => !prevValue)
  }
  const handleChange = (e) => {
    props.setDisplayDepartment(e.target.value)
    
  }
  return (
    <div className='header'> 
        <div className='display-category'>{props.displayCategory}</div>
        {/* Changing Header Content based on the display category via states  */}
        {props.displayCategory === "Department" && 
        <>
        <input 
            type="text" 
            name="searchbar" 
            placeholder='Department'
            onChange={handleChange}
            value={props.displayDepartment}
            />
            <Icon icon={search} id="search-icon"/>
        </>
        }
        <button
            onClick={handleShowForm}
        >Add Employee</button>
    </div>
  )
}

export default Header

