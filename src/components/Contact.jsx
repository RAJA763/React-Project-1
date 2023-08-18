import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <section id='form'>
            <h2>CONTACT US</h2>
            <form>
                <div className="row form-input">
                    <input type="text" name="name" id="name" placeholder="Enter your Name" />
                </div>
                <div className="row form-input">
                    <input type="number" name="phoneNumber" id="phoneNumber" placeholder="Enter your Phone Number"/>
                </div>
                <div className="row form-input">
                    <input type="email" name="email" id="email" placeholder="Enter your Email"/>
                </div>
                <div className="row form-input">
                    <input type="text" name="Address" id="Address" placeholder="Enter Your Address"/>
                </div>
                <div className="row form-input">
                    <button type="submit" class="btn btn-outline-success form-button">Submit</button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Contact