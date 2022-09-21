import React from 'react'

const FilterBtn = ({ name, index, items, task, setPageNumber }) => {
  return (
    <>
      <style jsx>
        {`
          .x: checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type='radio']{
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            //cuando se clickee algun status irá desde la página uno y cambiará el estado de la api
            setPageNumber(1);
            task(items);
          }}
          className="form-check-input"
          type='radio'
          name='name'
          id={`${name}-${index}`}
        />
        <label className='btn btn-outline-primary' for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </>
  )
}

export default FilterBtn