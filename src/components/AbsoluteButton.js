import React from 'react'

const AbsoluteButton = () => {
    const handleRtl = () => {
        document.body.classList.toggle('rtl');
      } // toggle between ltr/rtl


    return (
        <div className='absolute-btn'>
          <button onClick={handleRtl}>Toggle rtl</button>
        </div>
    )
}

export default AbsoluteButton
