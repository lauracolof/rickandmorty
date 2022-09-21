import React from 'react'

const InputGroup = ({ total, name, setId }) => {
  //separar las páginas para que se puedan mostrar indiv. cada episodio

  return (
    <div className='input-group mb-3'>
      <select
        onChange={(e) => setId(e.target.value)}
        className='form-select' id={name}>
        <option value='1' select>Pick one..</option>
        {[...Array(total).keys()].map(x => {
          return (
            <option value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}

      </select>
    </div>
  );
};

export default InputGroup;