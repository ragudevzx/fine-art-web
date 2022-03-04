import React from 'react'

const Home = () => {
  return (
    <div>
        <section id="home">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 mt-5">
                    <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                        Feels the fresh Business Perspective 
                    </h1>
                    <p className="lead text-center fs-4 mb-5 text-white">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Provident pariatur ducimus debitis vero maiores, deserunt unde neque! 
                        Dolor nobis, id deserunt dolore atque assumenda alias, 
                        quas tempore, adipisci doloribus veniam quam numquam corrupti 
                        autem doloremque impedit vitae natus. Nam, fugit?
                    </p>
										<div className="buttons d-flex justify-content-center">
											<button className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</button>
											<button className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</button>
										</div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Home