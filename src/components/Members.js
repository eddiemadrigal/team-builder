import React from "react";
import "./Members.css";

const Members = props => {
    console.log(props);
    return (
        <div className="member-list">
            { props.members.map( member => (
                <ul key = { member.id }>
                    <li>{member.name} ({member.role}): <a href={'mailto:' + member.email}>{member.email}</a></li>
                </ul>
            ))}
        </div>
    );
};

export default Members;