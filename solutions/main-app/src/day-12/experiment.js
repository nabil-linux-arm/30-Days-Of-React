import { useState } from "react"

const SingleInput = () => {
    const [firstName, setFirstName] = useState('')

    function handleChange(e) {
        const value = e.target.value;
        setFirstName(value);
    }
    return (
        <div>
            <label htmlFor='firstName'>First Name: </label>
            <input
                type='text'
                id='firstName'
                name='firstName'
                placeholder='First Name'
                value={firstName}
                onChange={handleChange}
            />
            <h1>{firstName}</h1>
        </div>
    )

}

const MultipleInput = () => {
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        country: '',
        title: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setStudent({
            ...student,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(student)
    }

    const { firstName, lastName, country, title } = student;
    return (
        <div className='App'>
            <h3>Add Student</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    value={firstName}
                    onChange={handleChange}
                />
                </div>
                <div>
                <input
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={handleChange}
                />
                </div>
                <div>
                <input
                    type='text'
                    name='country'
                    placeholder='Country'
                    value={country}
                    onChange={handleChange}
                />
                </div>
                <div>
                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={title}
                    onChange={handleChange}
                />
                </div>

                <button >Submit</button>
            </form>
        </div>
    )
}


const Day12 = () => {
    return (
        <div>
            {/* <SingleInput /> */}
            <MultipleInput />
        </div>
    )
}

export default Day12
