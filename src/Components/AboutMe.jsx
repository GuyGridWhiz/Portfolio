import React from "react";
import GuyIMG from "../assets/Img/IMG_3384.jpg";
function aboutMe() {
    return (
        <div>
            <div className="card lg card-side bg-white shadow-xl pt-[80px]">
            <figure>
                <img
                   style={{maxWidth:'500px'}} src={GuyIMG}
                />
            </figure>
            <div className="card-body text-base-100">
                <h1 className="card-title flex justify-center text-xl pb-4">About Me</h1>
                <h2 className="card-title">Mongkol Pokpipat</h2>
                <h2 className="card-title">Kasetsart university</h2>
                <h2 className="card-title">Bachelor of science Information Technology (IT) major</h2>
                <h2 className="card-title">23 years</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-base-100 text-white">Skill</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default aboutMe;
