//import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download={true} className='btn'>Downloat cv</a>
        <a href="#contact" className="btn btn-primary">Let Talk</a>

    </div>
  )
}

export default CTA