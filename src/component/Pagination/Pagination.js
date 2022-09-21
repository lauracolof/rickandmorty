import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  //width by default de 822px

  //cuando entramos a una web, toma el valor del tamaño del window. con los eventlisteners eliminamos el efecto cuando trata de renderizar el tamaño del window. estas funciones trabajan en conjunto
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);
  }, []);

  return (
    <>
      <style jsx>

        {`
      @media(max-width: 768px){
        .next, .prev{
          display: none;
        }
        .pagination{
          font-size: 15px;
        }
      }
      `}


      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        previousLabel="Prev"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousClassName="btn btn-primary prev"
        nextClassName="btn btn-primary next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1)
        }}
        pageCount={info?.pages}
      />
    </>
  )
};

export default Pagination