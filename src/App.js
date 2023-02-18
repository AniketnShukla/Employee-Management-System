import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Table from './components/Table';
import Form from './components/Form';
import { useEffect, useState } from 'react';

function App() {
  const getFormData = () => {
    return {
        id: "",
        name: "",
        age: "",
        department: "",
        bloodgroup: "",
        contactnumber: "",
        address: "",
      }
  }
  const [formData, setFormData] = useState(getFormData);
  const [isEdit, setIsEdit] = useState(false)
  const [showForm, setShowForm] = useState(false);
  const [displayCategory, setDisplayCategory] = useState("Employee")
  const [displayDepartment, setDisplayDepartment] = useState("");
  //fetching Data from browser localStorage
  const getDatafromLocalStorage = () => {
  const storedArray = localStorage.getItem('formDataArray');
    return JSON.parse(storedArray);
  }
  const [localData, setLocalData] = useState(getDatafromLocalStorage());
  //updating localData whenever information on the form changes
  useEffect(()=> {
      const data = localStorage.getItem('formDataArray');
      setLocalData(JSON.parse(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]); 

  const deleteRow = (id) => {
    const updatedData = localData.filter((obj, index) => {
      return obj.id !== id
    })
    setLocalData(updatedData)
    //saving array with appended info to localStorage
    localStorage.setItem('formDataArray', JSON.stringify(updatedData)); 
  }
  const editRow = (id) => {

    const searchObj = localData.find((obj) => obj.id === id)
    if(searchObj !== undefined) {
        setFormData(searchObj);
        setIsEdit(true);
        setShowForm(!showForm)
    }
  }
  return (

    <div className="App">

      <div className='sidebar-main'>
        <SideBar 
          displayCategory = { displayCategory }
          setDisplayCategory = { setDisplayCategory }
          setDisplayDepartment= { setDisplayDepartment }
        />
      </div>

      <div className='header-main'>
        <Header 
          showForm = { showForm }
          setShowForm = { setShowForm }
          displayCategory = { displayCategory }
          displayDepartment = { displayDepartment }
          setDisplayDepartment= { setDisplayDepartment }
        />
      </div>

      <div className='table-main'>
        <Table 
        formData = { formData }
        localData = { localData }
        deleteRow = { deleteRow }
        editRow = { editRow }
        isEdit = {isEdit}
        setIsEdit = { setIsEdit }
        displayDepartment = { displayDepartment }
        setDisplayDepartment= { setDisplayDepartment }
        />
      </div>

      <div className='form-main'>
        {showForm && 
        <Form 
        showForm = { showForm }
        setShowForm = { setShowForm }
        formData = { formData }
        setFormData = { setFormData }
        isEdit = {isEdit}
        setIsEdit = { setIsEdit }
        deleteRow = { deleteRow }
        />
        }
      </div>
    </div>
  );
}

export default App;
