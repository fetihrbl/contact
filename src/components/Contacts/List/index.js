import React from "react";

function List({ contacts }) {

    return (
        <div>
            <ul>
                {
                    contacts.map((contact, i) => {
                        return <li key={i}>{contact.fullname}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default List;