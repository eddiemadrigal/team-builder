import React from "react";
import "./Members.css";

const Members = props => {
    console.log(props);
    return (
        <div className="member-list">
            { props.members.map( member => (
                <ol key = { member.id }>
                    <li>{member.name} ({member.role}): {member.email}</li>
                </ol>
            ))}
        </div>
    );
};

export default Members;