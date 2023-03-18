
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './profile.css'

const Profile = () => {
    const [user, setUser] = useState("yuvaraj");
    const [age, setAge] = useState("23");
    const [gender, setGender] = useState("male");
    const [dob, setDob] = useState("26/03/2000");
    const [mobile, setMobile] = useState("9095243449");

    const [vUser, vSetUser] = useState("");
    const [vAge, vSetAge] = useState("");
    const [vGender, vSetGender] = useState("");
    const [vDob, vSetDob] = useState("");
    const [vMobile, vSetMobile] = useState("");

    const navigate = useNavigate();
    function logout() {
        navigate('/login')
    }

    function handleSubmit(e) {
        e.preventDefault();
        vSetUser(user);
        vSetAge(age);
        vSetGender(gender);
        vSetDob(dob);
        vSetMobile(mobile);
    }
    return (

        <div className="totalContainer">
            <div className="header">
                <div>Profile Page</div>
                <div>
                    <button onClick={logout}>logout</button>
                </div>
            </div>

            <div className="main">
                <div className="left">
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
                </div>
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
                                <button type="submit">Update</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Profile