import React from 'react'
import { Link } from 'react-router-dom';

function CategoryList({ categories }) {
  return (
    <div className='my-5'>
      <h3 className='text-uppercase text-warning'>categories</h3>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center align-items-center'>
        {
          categories.map(category => {
            const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;
            return (
              <Link to={`meal/category/${title}`} className='text-decoration-none text-dark my-3 col' key={id}>
                <div className="card text-bg-light border-0">
                  <img src={thumbnail} className="card-img" alt="CategoryImage" />
                  <div className="card-img-overlay">
                    <span className="badge text-bg-warning">{title}</span>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default CategoryList
