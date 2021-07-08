import React, { useState } from 'react';
import MembersForm from "./MemberForm";
import Members from "./Members";

function MemberData() {

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
    <div className="App">
      <h1 className="App-header">Team Members</h1>
      <MembersForm addNewTeamMember = { addNewTeamMember }/>
      <Members members={teamMembers} />
    </div>
  );
}

export default MemberData;
