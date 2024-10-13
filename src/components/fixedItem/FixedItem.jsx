import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { images1 } from "../../data";
function FixedItem({ handleOpen, id }) {
  const [elment, setElement] = useState({});
  const [isId, setIsId] = useState(id)
  useEffect(() => {
    const isElement = images1.filter((x) => x.id === isId);
    setElement(isElement[0]);
  }, [isId]);
  function handleClick (props) {
    if(props==="prev") {
      if(isId<images1.length) {

        setIsId(isId+1)
      }
    }
    if(props==="next") {
      if(isId>1) {

        setIsId(isId-1)
      }
    }

  }
  return (
    <div className="fixed-item">
      <div className="container">
        <div className="fixed-info">
          <div className="fixed-image">
            <img src={elment.image} alt="" />
          </div>
          <BsArrowRightCircleFill style={{color:isId===images1.length&&"red"}} onClick={()=>handleClick("prev")} className="arrow-right" />
          <BsArrowLeftCircleFill style={{color:isId===1&&"red"}} onClick={()=>handleClick("next")} className="arrow-left" />
          <IoMdCloseCircle
            onClick={() => handleOpen(false)}
            className="close"
          />
        </div>
      </div>
    </div>
  );
}

export default FixedItem;
