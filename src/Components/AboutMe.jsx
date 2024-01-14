import React from 'react'
import GuyIMG from '../assets/Img/IMG_3384.jpg'
function aboutMe() {
    return (
        <div className='flex justify-center'>
            <div className="card w-[70%] bg-neutral-content-500 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title flex justify-center text-neutral-200">About Me</h2>
                    <p className='text-white'>MONGKOL POKPIPAT</p>
                    <p className='text-white'>Guy</p>
                    <p className='text-white'>Kasetsart University 2018-2022</p>
                    <p className='text-white'>Bachelor of Science in Information and technology major</p>
                </div>
                <figure><img width={1000} src={GuyIMG} alt="" /></figure>
            </div>
        </div>
    )
}

export default aboutMe