
import React, { useState, useEffect } from "react";
import './profile.css'

const Profile = () => {
    const [user, setUser] = useState(null);
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [mobile, setMobile] = useState("");

    function handleSubmit() {

    }
    return (
        <div className="main">
            <div className="left">
                <div className="leftMain">
                    <div className="userName">
                        <div>Name:</div>
                        <div>{user}</div>
                    </div>
                    <div className="age">
                        <div>
                            Age:
                        </div>
                        <div>
                            {age}
                        </div>
                    </div>
                    <div className="gender">
                        <div>
                            Gender:
                        </div>
                        <div>
                            {gender}
                        </div>
                    </div>
                    <div className="dob">
                        <div>
                            Date Of Birth:
                        </div>
                        <div>
                            {dob}
                        </div>

                    </div>
                    <div className="mobile">
                        <div>
                            Mobile:
                        </div>
                        <div>
                            {mobile}
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
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

    )
}

export default Profile