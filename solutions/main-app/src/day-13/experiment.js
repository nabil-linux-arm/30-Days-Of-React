import { useRef } from "react"

const UncontrolledInput = () => {
    const firstName = useRef('')

    function handleSubmit(e) {
        e.preventDefault();
        console.log(firstName.current.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name: </label>
                <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    ref={firstName}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledInput
