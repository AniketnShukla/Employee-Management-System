import React from 'react'
import './../css/sidebar.css'
function SideBar(props) {
  return (
    <div className='sidebar'>
        <div className='logo'>EMS</div>
        <div className='display-categories'>
            <h3>Display</h3>
            <ul>
                {/* onClicking the Employee Category, display Category sets to employee and the search state information resets to show all data */}
                <li onClick={() => {
                  props.setDisplayCategory("Employee")
                  props.setDisplayDepartment("")
                }}>Employee</li>
                {/* OnClick sets the Display Category to Department */}
                <li onClick={() => props.setDisplayCategory("Department")}>Deparment</li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar