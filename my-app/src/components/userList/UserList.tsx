import {MemberCard} from "../memberCard";
import {ButtonWithLabel} from "../buttonWithLabel";
import {useUsers} from "../../hooks/useUsers";
import {useEffect} from "react";

export const UserList = () => {
    const {users, setUserList} = useUsers();
    useEffect(() => {
        setUserList();
    }, []);

    const onButtonClick = () => {
        setUserList();
    };
    
    return (
        <>
            {users.map((user) => {
                return <MemberCard key={user.name} name={user.name} phone={user.phone} username={user.username} website={user.website} />
            })}
            <ButtonWithLabel onClick={onButtonClick} label="нажми меня!">more users</ButtonWithLabel>
        </>
    );
};