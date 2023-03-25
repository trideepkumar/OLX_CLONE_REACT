import React,{useState} from 'react'

export default function Heart() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
    return(
        <svg
        width="24px"
        height="24px"
        viewBox="0 0 1024 1024"
        data-aut-id="icon"
        className
        fillRule="evenodd"
        onClick={handleClick}
      >
        <path
          className="rui-77aaa"
          d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z" 
          style={{ fill: isClicked ? "red" : "grey" }}
        />
      </svg>
    )
}


// import React, { useState } from "react";

// export default function Heart() {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <svg
//       width="24px"
//       height="24px"
//       viewBox="0 0 1024 1024"
//       data-aut-id="icon"
//       className
//       fillRule="evenodd"
//       onClick={handleClick}
//     >
// <path
// className="rui-77aaa"
// d={isClicked ? "M512.002 940.803l-318.798-389.915c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.<EUGPSCoordinates>547<PhoneNumber>155<PhoneNumber>69<PhoneNumber>155<PhoneNumber>33<PhoneNumber>-10<EUGPSCoordinates>-30<EUGPSCoordinates>" : "M830.<EUGPSCoordinates>-318.<EUGPSCoordinates>-317.<EUGPSCoordinates>-27<EUGPSCoordinates>-59<EUGPSCoordinates><PhoneNumber><PhoneNumber><PhoneNumber><PhoneNumber><EUGPSCoordinates><EUGPSCoordinates>"}
// fill={isClicked ? "red" : "currentColor"}
// />
// </svg>
// );
// }