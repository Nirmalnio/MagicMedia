import React from 'react'
import img1 from "../assets/images/linkedin (1).png"
import img2 from "../assets/images/linkedin (2).png"
import img3 from "../assets/images/linkedin (3).png"
import img4 from "../assets/images/linkedin (4).png"

function socialbar() {
  return (
    <div className='socialmedia_mediaDiv'>
            <div>
                <a>
                    <img src={img1} alt='linkined' />
                </a>
            </div>
            <div>
            <a>
                    <img src={img2} alt='linkined' />
                </a>
            </div>
            <div>
            <a>
                    <img src={img3} alt='linkined' />
                </a>
            </div>
            <div>
            <a>
                    <img src={img4} alt='linkined' />
                </a>
            </div>

    </div>
  )
}

export default socialbar