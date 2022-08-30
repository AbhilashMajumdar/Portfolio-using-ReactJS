import React from 'react'

const Contact = () => {

  return (
    <>
      <div className="contact-container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-10 text-center contact-head">
            <h1>Contact Me</h1>
          </div>
        </div>

        <div className="row justify-content-center my-3">
          <div className="col-lg-4 col-md-6 col-10 contact-info">
            <form className='text-center' method='POST' action='https://getform.io/f/43d6c3c3-292f-418c-8af7-577613fc8b57'>
              <div className="mb-3">
                <label>Name</label>
                <input type="text"
                  className='form-control'
                  placeholder='Enter Name'
                  name='name'
                />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input type="email"
                  className='form-control'
                  placeholder='Enter Email'
                  name='email'
                />
              </div>

              <div className="mb-3">
                <label>Phone Number</label>
                <input type="text"
                  className='form-control'
                  placeholder='Enter Phone'
                  name='phone'
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder='Enter Message'
                  name='message'
                ></textarea>
              </div>

              <div className="my-4 text-center">
                <button className='btn btn-warning mx-3'>Send Message</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact