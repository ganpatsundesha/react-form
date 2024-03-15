import React, { useState } from 'react'
import './App.css'
import InputFuild from './Components/Input/InputFuild'

const nextStep = (setStep, step) => {
    if (step >= 1 && step <= 3) setStep(step + 1)
}

const App = () => {

    const [step, setStep] = useState(1)

    const [details, setDetails] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDetails((prevData) => ({ ...prevData, [name]: value }));
    };

    const handelSubmit = (e) => {
        e.preventDefault()

        if (details.fName.length > 2 && details.lName.length > 2) {
            nextStep(setStep, step)

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailRegex.test(details.email) && details.password.length > 4) {

                nextStep(setStep, step)

            }
        }
    }

    return (
        <form action="" onSubmit={handelSubmit}>
            <InputFuild type="submit" value="Submit" style={{ display: step === 3 ? 'none' : 'block' }} />
            <br />
            {
                step === 1 && <>
                    <label>Your First Name</label>
                    <InputFuild type="text" value={details.fName} name='fName' onChange={(e) => handleChange(e)} />
                    <br />
                    <label>Your Last Name</label>
                    <InputFuild type="text" value={details.lName} name='lName' onChange={(e) => handleChange(e)} />
                </>
            }
            {
                step === 2 && <>
                    <label>Your Email</label>
                    <InputFuild type="email" value={details.email} name='email' onChange={(e) => handleChange(e)} />
                    <br />
                    <label>Your Password</label>
                    <InputFuild type="text" value={details.password} name='password' onChange={(e) => handleChange(e)} /></>
            }
            {step === 3 &&
                <table>
                    <tbody>
                        <tr>
                            <th>Full Name</th>
                            <th>Email Id</th>
                            <th>Password</th>
                        </tr>
                        <tr>
                            <td>{details.fName + " " + details.lName}</td>
                            <td>{details.email}</td>
                            <td>{details.password}</td>
                        </tr>
                    </tbody>
                </table>
            }
        </form >
    )
}

export default App