import { useState } from "react";
import {mouseEnterHandler} from './util'

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  const [isActive, setActive] = useState(false);


  return (
    <div onMouseEnter={() => mouseEnterHandler(setActive, mouseEnterCallbak)} className={isActive ? "active" : ""}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  const [isActive, setActive] = useState(false);


  return (
    <div onMouseEnter={() => mouseEnterHandler(setActive, mouseEnterCallbak)} className={isActive ? "active" : ""}>
      <p>{content}</p>
    </div>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  const [isActive, setActive] = useState(false);


  return (
    <div onMouseEnter={() => mouseEnterHandler(setActive, mouseEnterCallbak)} className={isActive ? "active" : ""}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </div>
  );
};
