import React from 'react'
import moviesData from './moviesData'
import './movies.css'

const Movies = () => {

    
  return (
   <>
   <div className="container ">
    <h1 className="heading1 text-danger text-center mt-5">Must Watch Movies in India</h1>
    <div className="row">

          {
            moviesData.map((cval)=>{

                return(
                   <div className="col-lg-4 mt-5" key={cval.id}>
                    <div className="card moviesCont">
                    <img src={cval.Cover} alt="coverImg" />
                        <div className="card-body">
                            <div className="card-title text-danger">
                            {cval.Movie_Title}
                            </div>
                            <div className="card-text text-dark">
                                {cval.Rating}
                            </div>
                            <a href="#" className='btn btn-danger mt-3'>Watch Now</a>
                        </div>
                    </div>
                   </div>
                )
            })
          }

    </div>
   </div>
   </>
  )
}

export default Movies;