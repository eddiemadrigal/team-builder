import React, { useState } from 'react';
import MemberForm from "./components/MemberForm";
import './App.css';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Eddie Madrigal",
      email: "edmadrigal@yahoo.com",
      role: "Lambda Student"
    }
  ]);

  const addNewTeamMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamMembers([...teamMembers, newMember])
  }

  return (
    <div>
      <h1>Team Members</h1>
      <MemberForm addNewTeamMember = { addNewTeamMember }/>
    </div>
  );
}

export default App;
