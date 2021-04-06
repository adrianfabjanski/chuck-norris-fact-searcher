import React from 'react'

const AbsoluteButton = () => {
    const handleRtl = () => {
        document.body.classList.toggle('rtl');
      } // toggle between ltr/rtl


    return (
        <div className='absolute-btn-cnt'>
          <button onClick={handleRtl} id='absolute-btn'>RTL</button>
        </div>
    )
}

export default AbsoluteButton
