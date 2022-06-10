import React from 'react'
import resume from '../../assets/images/resume.pdf'

const CTA = () => {
  return (
      <div className='cta'>
          <a href={resume} download className='btn'>Get Resume</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
