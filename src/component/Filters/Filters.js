import React from 'react'
import Gender from './Categories/Gender'
import Species from './Categories/Species'
import Status from './Categories/Status'

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  //reestablecemos todos los valores a 0
  let clear = () => {
    setStatus('');
    setPageNumber('');
    setGender('');
    setSpecies('');
    //recargar la página
    window.location.reload(false);
  }
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className='text-center fw-bold fs-4 mb-4'>Filter</div>
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className='text-center text-primary text-decoration-underline'>
        Clear filters
      </div>

      <div className='accordion' id='accordionExample'>
        <Gender
          setGender={setGender}
          setPageNumber={setPageNumber} />
        <Status
          setStatus={setStatus}
          setPageNumber={setPageNumber} />
        <Species
          setSpecies={setSpecies}
          setPageNumber={setPageNumber} />
      </div>
    </div>
  )
}

export default Filters