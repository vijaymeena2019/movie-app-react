import _ from 'lodash';  // underscore library
import React from 'react';
import PropTypes from 'prop-types';   // npm install prop-types@15.6.2
const Pagination = ({onPageChange, itemsCount, pageSize, currentPage}) => {
  const itemPerPage = Math.ceil(itemsCount/pageSize);
  // console.log(itemPerPage);

  const pages = _.range(1, itemPerPage + 1)   // need to clearify why floting and intiger works fine here // because it can not include last item
  // console.log(pages)

    return (
        <div>
            <nav aria-label="Page navigation example">
  <ul className="pagination ">
    { pages.length >= 2 ? (pages.map(page => (<li key={page} className={ page === currentPage ? "page-item active" : 'page-item'}><a onClick={()=>onPageChange(page)} style={{ cursor: 'pointer'}}  className="page-link">{page}</a></li>))) : null}
  </ul>
</nav>
        </div>
    )
}

// adding property  to  component and  with this property we define the type checking requirements for this component
Pagination.propTypes = {   // error gives when datatypes as defined is not received // error show in console until we are in developer mode
  onPageChange: PropTypes.func.isRequired,
   itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination;