import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {pen_1} from 'react-icons-kit/ikons'

import './../css/table.css'
function Table(props) {
  let View;
  //if data exists in browsers localStorage, and search Information is not set, Displays all the data fetching the array of objects from localStorage, else only those satisfy search constraint, if null, displays No Data
  if(props.localData !== null){
    const displayData = (props.displayDepartment === "") ? 
    props.localData
    :
    props.localData.filter((obj)=>obj.department === props.displayDepartment);
    if(displayData !== null){
      View = displayData.map(obj => (
          <tr key={obj.id}>
            <td>{obj.id}</td>
            <td>{obj.name}</td>
            <td>{obj.age}</td>
            <td>{obj.department}</td>
            <td>{obj.bloodgroup}</td>
            <td>{obj.contactnumber}</td>
            <td className='addr'>{obj.address}</td>
            <td 
              className='delete-btn'
              onClick={()=>props.deleteRow(obj.id)}
            >
              <Icon icon={trash} />
            </td>
            <td 
              className='edit-btn'
              onClick={()=>{
                props.setIsEdit(!props.isEdit)
                console.log(props.isEdit)
                props.editRow(obj.id)
              }}
            >
              <Icon icon={pen_1} />
            </td>
          </tr>
        ))
      }
  }
  return (
    <div>
      {/* Display No data when no data exists on the browsers localStorage */}
      { (props.localData === null) &&
        <span id='no-data-display'>No Data ...</span> 
      }
      { props.localData && 
      <>
      <div className='table-responsive table-wrapper'>
        <table className='table'>
          <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
                <th>Blood Group</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {View}
          </tbody>
        </table>
      </div>  
      </>
      }
      </div>
  )
}

export default Table