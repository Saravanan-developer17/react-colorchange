import React from 'react'

const Contacts = () => {
    return (
      <div>
        <Nav/>
      <section id="contact">
        <div className="container box">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img src={image} className="img-fluid" alt='image1' />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h1>CONTACT US</h1>
              <form className="mb-3">
                <input type="text" className="form-control" placeholder="Enter your name"/>
                 <input type="email" className="form-control" placeholder="Enter your email"/>
                 <textarea className="form-control" placeholder="Enter your message"></textarea>
                 <button className="btn signin">Send message</button>
              </form>
            </div>
          </div>
        </div>
       </section>
       <Footer/>
      </div>
    )
  }

export default Contact