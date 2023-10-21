import { createContext, useState } from "react";


export const ProfileContext = createContext()


const ProfileContextProvider = ({ children }) => {
    const [loginCredentials, setLoginCredentials] = useState(null)

    return <ProfileContext.Provider value={{ loginCredentials, setLoginCredentials }}>{children}</ProfileContext.Provider>
}

export default ProfileContextProvider