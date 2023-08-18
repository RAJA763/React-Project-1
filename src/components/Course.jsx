import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import bootstrap from '../images/bootstrap.png'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
const Course = () => {
  return (
    <div className="main">
            <div className="col col1">
                <h2>Course List</h2>
            </div>
            <div className="col">
                <div className="card">
                    <img src={html} alt="" />
                    <h3>HTML</h3>
                </div>
                <div className="card">
                    <img src={css} alt="" />
                    <h3>CSS</h3>
                </div>
                <div className="card">
                    <img src={bootstrap} alt="" />
                    <h3>Bootstrap</h3>
                </div>
                <div className="card">
                    <img src={javascript} alt="" />
                    <h3>Javascript</h3>
                </div>
                <div className="card">
                    <img src={react} alt="" />
                    <h3 className='react'>React</h3>
                </div>
            </div>    
        </div>

  )
}

export default Course