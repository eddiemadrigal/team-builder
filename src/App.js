import React, { useState } from 'react';
import MembersForm from "./components/MemberForm";
import Members from "./components/Members";
import './App.css';

function App() {

  const [teamMembers, setTeamMember] = useState([
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
    setTeamMember([...teamMembers, newMember])
  }

  return (
    <div>
      <h1>Team Members</h1>
      <MembersForm addNewTeamMember = { addNewTeamMember }/>
      <Members members={teamMembers} />
    </div>
  );
}

export default App;
