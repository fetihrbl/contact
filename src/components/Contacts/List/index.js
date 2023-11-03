import React, { useState } from "react";

function List({ contacts }) {

    const [filterText, setFilterText] = useState('');

    const filtred = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        });
    })

    return (
        <div>

            <input 
                placeholder="filter contact" 
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}             
            />

            <ul className="List">
                {
                    filtred.map((contact, i) => {
                        return <li key={i}>
                            <span>{contact.fullname}</span>
                            <span>{contact.phone_number}</span>
                                </li>
                    })
                }
            </ul>

            <p>Total Contacts ({filtred.length})</p>

        </div>
    )
}

export default List;