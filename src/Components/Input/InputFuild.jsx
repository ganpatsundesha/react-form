import React from 'react'

const InputFuild = ({ type, value, name, onChange, ...rest }) => {
    return (
        <>
            <input type={type} value={value} name={name} onChange={onChange} {...rest} />
        </>
    )
}

export default InputFuild