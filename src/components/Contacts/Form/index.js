import {useState, useEffect} from "react";

function Form({addContacts, contacts}) {

    const [form, setForm] = useState({
        fullname: "",
        phone_number: ""
    });

    useEffect(() => {
        setForm({ fullname: "", phone_number: ""})
    }, [contacts])

    const onChanceInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }

        addContacts([...contacts, form])  
        
    };

    return (
        <form onSubmit={onSubmit}>

            <div>
                <input name="fullname"
                       placeholder="Fullname"
                       value={form.fullname}
                       onChange={onChanceInput}
                />
            </div>

            <div>
                <input name="phone_number"
                       placeholder="Phone Number"
                       value={form.phone_number}
                       onChange={onChanceInput}
                />
            </div>

            <div className="btn">
                <button>Add</button>
            </div>
            
        </form>
    )
}

export default Form;