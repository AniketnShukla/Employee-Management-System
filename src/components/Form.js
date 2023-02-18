import React from 'react'
import './../css/form.css'
const Form = (props) => {
    const emptyFormData = {    
            id: "",
            name: "",
            age: "",
            department: "",
            bloodgroup: "",
            contactnumber: "",
            address: "",
        }
    const handleChange = (e) => {
        const {name, value} = e.target;
        props.setFormData((prevData) => {
            return {
            ...prevData,
            [name] : value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();    
        //sets showform to false
        props.setShowForm((prevValue) => !prevValue);
        if(props.isEdit === true){
            props.setIsEdit((prev)=>!prev);
            console.log(props.isEdit)
            props.deleteRow(props.formData.id);    
        }
        //fetching array of objects from localStorage
        let storedArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
        //checking for duplicates
        const searchObj = storedArray.find((obj) => obj.id === props.formData.id)
        if(searchObj === undefined){
            storedArray.push(props.formData)
        }
        else if(searchObj !== undefined) {
            alert('ID Already Exists');
            return;
        }
        //saving array with appended info to localStorage
        localStorage.setItem('formDataArray', JSON.stringify(storedArray)); 
        //clearing form values
        props.setFormData(emptyFormData)
    }
    const handleCancel = () => {
        props.setShowForm((prevValue)=>!prevValue);
        props.setIsEdit(false);
        props.setFormData(emptyFormData)
    }
    // useeffect not running on state chnage showform/// checking that to update table data, imp.
  return (
      <div className='form-content'>
        <form className='add-form'>
            <figcaption>Employee Information</figcaption>
            <div className="input--wrapper">
            <label>Employee ID</label>
            <input 
                type="text" 
                value={ props.formData.id }
                onChange={ handleChange }
                disabled={props.isEdit} //if the form is for editing, id cannot be changed
                name="id"
            />
            <label>Name</label>
            <input 
                type="text" 
                value={ props.formData.name }
                onChange={ handleChange }
                name="name"
            />
            </div>
            <div className="input--wrapper">
            <label>Age</label>
            <input 
                type="text" 
                value={ props.formData.age }
                onChange={ handleChange }
                name="age"
            />
            </div>
            <div className="input--wrapper">
            <label>Department</label>
            <input 
                type="text" 
                value={ props.formData.department }
                onChange={ handleChange }
                name="department"
            />
            </div>
            <div className="input--wrapper">
            <label>Blood Group</label>
            <input 
                type="text" 
                value={ props.formData.bloodgroup }
                onChange={ handleChange }
                name="bloodgroup"
            />
            </div>
            <div className="input--wrapper">
            <label>Contact Number</label>
            <input 
                type="text" 
                value={ props.formData.contactnumber }
                onChange={ handleChange }
                name="contactnumber"
            />
            </div>
            <div className="input--wrapper">
            <label>Address</label>
            <input 
                type="text" 
                value={ props.formData.address }
                onChange={ handleChange }
                name="address"
            />
            </div>
            {(props.isEdit === false) && 
                <button onClick={ handleSubmit } className='form-button'>Add</button>
            }
            {(props.isEdit === true) && (
                <button onClick={ handleSubmit } className='form-button'>Edit</button>
            )
            }
            
            <img id='cancel' onClick={handleCancel} src="/images/close-icon.svg" alt="close-icon"  />
        </form>
    </div>
)
}
export default Form