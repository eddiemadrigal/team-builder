import React, { useState } from "react";
import "./MemberForm.css";

const MembersForm = props => {
    console.log("props: ", props);

    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        console.log(teamMember);
        setTeamMember({
            ...teamMember,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeamMember(teamMember);
        setTeamMember({
            name: "",
            email: "",
            role: ""
        });
    };

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" onChange={handleChanges} value={teamMember.name} />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" onChange={handleChanges} value={teamMember.email} />
            <label htmlFor="role">Role</label>
            <input id="role" type="text" name="role" onChange={handleChanges} value={teamMember.role} />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default MembersForm;