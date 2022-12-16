import { useState } from "react";

function RegisterForm() {

    const [form, setForm] = useState(
        {
            firstName: "Luke",
            lastName: "James",
            email: "ABCEMAIL@gmail.com"
        }
    )

    return (
        <div>
            <label>
                First Name
                <input
                    value={form.firstName}
                    onChange={e => setForm({ ...form, firstName: e.target.value })}>
                </input>
            </label>
            <label>
                Last Name
                <input
                    value={form.lastName} 
                    onChange={e=>setForm({...form,lastName:e.target.value})}>
                </input>
            </label>
            <label>
                email
                <input
                    value={form.email}
                    onChange={e=>setForm({...form,email:e.target.value})}>
                </input>
            </label>
            <p>
                {form.firstName}{" "}
                {form.lastName}{" "}
                {form.email}
            </p>
        </div>
    )
}

export default RegisterForm