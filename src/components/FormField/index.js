import React from 'react'

const FormField = ({label, type, name, value,placeholder, handleChange}) => {
    return (
        <div>
        <label>{label}:
            <input type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </label>
      </div>
    )
}

export default FormField
