import React from 'react'
import qr from '../images/image-qr-code.png'

function Qr() {
return (
<div className='max-w-[300px] sm:max-w-xs bg-white p-4 rounded-2xl'>
    <img src={qr} alt="qr code" className='rounded-xl' />
    <div className='p-5 space-y-2'>
        <h2 className='font-Outfit  font-bold text-xl text-center text-[#1f3251]'>Improve your front-end
            skills by building projects</h2>
        <p className='font-Outfit  text-[15px] font-normal  text-[#7b879d] text-center'>Scan the QR code to visit Frontend
            Mentor and take your coding skills to next level</p>
    </div>
</div>
)
}

export default Qr