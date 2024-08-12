import {useState} from "react";
import {addUser, getUsers} from "../client/api";
import {UserProps} from "../components/memberCard/types";

export const useUsers = () => {
    const [users, setUsers] = useState<UserProps[]>([]);
  
    const setUserList = () => {
        getUsers.then((data : UserProps[]) => {
            setUsers(data)
        });
    }
        
    const setUser = (username: string, phone: string, website: string) => {
        return addUser(username, phone, website)
    }

    return {
        users,
        setUser,
        setUserList
    }
}