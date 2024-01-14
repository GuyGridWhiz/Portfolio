import React, { useState } from "react";
import ClickNext from "../assets/Img/ClickNextLogo.webp";
import Backyard from "../assets/Img/Backyard.png";

function Experience() {
  const [conpany, setCompany] = useState([
    {
      companyIMG: ClickNext,
      companyName: "ClickNext",
      period: "03/2023 - 12/2023",
      project: "DPA ERP Web App",
      details: "ERP Web Using Vue 3 + TypeScript + Bootstrap 5 UI",
      duties: [
        "Set global functions of the structural project environment, such as axios config",
        "Convert data to xlsx",
        "Create components for the project, such as inputs, buttons, DataGrid, Modal, Accordion",
        "Create modules with components and send values for the page",
      ],
    },
    {
      companyIMG: Backyard,
      companyName: "Backyard",
      period: "06/2022 - 02/2023",
      project: "Floward",
      details: "ERP Web Using Vue 3 + TypeScript + Bootstrap 5 UI",
      duties: [
        "Set global functions of the structural project environment, such as axios config",
        "Convert data to xlsx",
        "Create components for the project, such as inputs, buttons, DataGrid, Modal, Accordion",
        "Create modules with components and send values for the page",
      ],
    },
  ]);
  return (
    <div className="space-y-[50px]">
      <div className="flex justify-center mb-5 text-2xl border-b-2 pb-5 border-white">
        EXPERIENCE
      </div>
      {conpany.map((v, i) => (
        <div
          key={i}
          className="card 2xl:card-side bg-neutral-content-200 shadow-xl"
        >
          <figure>
            <img
              className="rounded-md ml-5"
              style={{ maxHeight: "500px", minHeight: "200px" }}
              src={v.companyIMG}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{v.companyName}</h2>
            <h3>{v.period}</h3>
            <h2>{v.project}</h2>
            <div className="collapse bg-base-200">
              <input type="checkbox" className="peer" />
              <div className="collapse-title peer-checked text-white">
                Details
              </div>
              <div className="collapse-content text-white long-text">
                <div className="ml-[40px]">
                  <p>{v.details}</p>
                  {v.duties.map((text, j) => (
                    <p key={j}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Experience;
