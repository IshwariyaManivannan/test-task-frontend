import { useState, createContext, useContext } from "react";
const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [profileEdit, setProfileEdit] = useState(false);
    const [userName, setUserName] = useState('');

    const islogin = () => {
        setUser(true);
    }

    const islogout = () => {
        setUser(false);
    }
    const edit = () => {
        setProfileEdit(true);
    }
    const noEdit = () => {
        setProfileEdit(false);
    }
   
    const userNaming =( user)=>{
        setUserName(user)
    }

    return (
        <authContext.Provider value={{ user, profileEdit, islogin, islogout, edit, noEdit ,userNaming,userName}}>
            {children}
        </authContext.Provider>
    )


}
export default AuthProvider
export const useAuth = () => {
    return useContext(authContext);
}

