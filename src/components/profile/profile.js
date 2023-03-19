
import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import  { useAuth } from "../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './profile.css'


const Profile = ({isLogged}) => {
    let id = useParams("userId")
    id = id.userId
   
    
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [mobile, setMobile] = useState("");

    const [vUser, vSetUser] = useState("");
    const [vAge, vSetAge] = useState("");
    const [vGender, vSetGender] = useState("");
    const [vDob, vSetDob] = useState("");
    const [vMobile, vSetMobile] = useState("");
    const [userId , setUserId] =useState(id)
  
    const auth = useAuth();
    const navigate = useNavigate();
    function logout() {
        localStorage.clear()
        isLogged = false;
        navigate('/login')
    }

    const  add = async() =>{
        try {
            const response = await axios.post(`http://localhost:8000/insert/${id}`,{age,gender,dob,mobile});
           
         
            if(response.data.status === 200)
            { 
            
                toast.success('succesfully updated', {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  auth.edit();

            }else{

                toast.success('something went wrong', {
                    position: toast.POSITION.TOP_RIGHT
                  });
                
            }
            
          } catch (error) {
            console.error('Error:', error);
          } 
    }


    const update =async() =>{
        try {
            const response = await axios.post(`http://localhost:8000/update/${id}`,{age,gender,dob,mobile});
           
         
            if(response.data.status === 200)
            { 
            
                toast.success('succesfully updated', {
                    position: toast.POSITION.TOP_RIGHT
                  });

            }else{

                toast.success('something went wrong', {
                    position: toast.POSITION.TOP_RIGHT
                  });
                
            }
            
          } catch (error) {
            console.error('Error:', error);
          } 
    }

    function handleSubmit(e) {
        e.preventDefault();
        vSetAge(age);
        vSetGender(gender);
        vSetDob(dob);
        vSetMobile(mobile);
        vSetUser(auth.userName);
        if(auth.profileEdit)
        {
            update();
        }else{
          add();
        }

    }
const fetchData = async() =>{
    
        // Submit form data
        try {
            const response = await axios.get(`http://localhost:8000/get/${id}`);
            console.log('Response:', response.data);
         
            if(response.data.status === 200)
            { 
                vSetAge(response.data.data[0].age)
                vSetGender(response.data.data[0].gender);
                vSetDob(response.data.data[0].dob)
                vSetMobile(response.data.data[0].mobile)
                vSetUser(auth.userName);
                auth.edit();

            }else{

                auth.noEdit();
                
            }
            
          } catch (error) {
            console.error('Error:', error);
          }
          console.log(22);
}

    useEffect(() => {
        fetchData();
      
      }, []);
    

    return (

        <div className="totalContainer">
            <div className="header">
                <div>Profile Page</div>
                <div>
                    <button onClick={logout}>logout</button>
                </div>
            </div>

            <div className="main">
                {auth.profileEdit &&<div className="left">
                    <div className="leftMain">
                        <h1>Additional Details</h1>
                        <div className="content">
                            <div className="inputs">
                                <div className="innerInput">Name:</div>
                                <div className="innerInputs">{vUser}</div>
                            </div>
                            <div className="inputs">
                                <div className="innerInput">
                                    Age:
                                </div>
                                <div className="innerInputs">
                                    {vAge}
                                </div>
                            </div>
                            <div className="inputs">
                                <div className="innerInput">
                                    Gender:
                                </div>
                                <div className="innerInputs">
                                    {vGender}
                                </div>
                            </div>
                            <div className="inputs">
                                <div className="innerInput">
                                    Date Of Birth:
                                </div>
                                <div className="innerInputs">
                                    {vDob}
                                </div>

                            </div>
                            <div className="inputs">
                                <div className="innerInput">
                                    Mobile:
                                </div>
                                <div className="innerInputs">
                                    {vMobile}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>}
                <div className="right">

                    <div className="rightMain">
                        <div className='profileForm'>
                            <h1> Update Form</h1>
                            <form onSubmit={handleSubmit}>
                                <div className='age'>
                                    <label>Age:</label>
                                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                                </div>
                                <div className='gender'>
                                    <label>Gender:</label>
                                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                                </div>
                                <div className='dob'>
                                    <label>Date of Birth:</label>
                                    <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
                                </div>
                                <div className='mobile'>
                                    <label>Mobile:</label>
                                    <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                </div>
                                <button type="submit">{auth.profileEdit?"Update":"Add"}</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
            <ToastContainer/>
        </div>

    )
}

export default Profile