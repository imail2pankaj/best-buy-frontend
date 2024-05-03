import React from 'react'

export const capitalize = (string) => (string.charAt(0).toUpperCase() + string.slice(1)).replace("_", " ")

const ValidationError = ({ errors, id }) => {
  return <>
    {
      errors &&
      <div
        style={{ fontSize: "12px" }}
        className='text-start text-danger'
        id={id}
      >
        {errors?.message ? capitalize(errors.message.replace("_", " ")) : capitalize(errors)}
      </div>
    }
  </>
}

export default ValidationError