import "./App.scss";
import { MemberCard } from "../src/components/memberCard";
import {useState} from "react";
import { UserProps } from "./components/memberCard/types";
import Form from "./components/form";
import { Tabs } from "./components/tabs";
import {UserList} from "./components/userList/UserList";

export default function App() {
  const [tabForm, setTabForm] = useState(true);
  const [addedUser, setAddedUser] = useState<UserProps | null>(null);
  
  const onUserAddition = (user : UserProps) => {
      setAddedUser(user);
  }

  return (
    <div className="App">
      <Tabs onChange={setTabForm}/>
      {!tabForm && <UserList/>}
      {tabForm && <Form onUserAddition={onUserAddition} />}
      {addedUser && (<MemberCard name={addedUser.name} phone={addedUser.phone} username={addedUser.username} website={addedUser.website}/>)}
    </div>
  );
}
