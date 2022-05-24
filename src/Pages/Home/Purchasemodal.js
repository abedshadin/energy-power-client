import React, { useState } from "react";
import "./PurchaseModal.css";
const Purchasemodal = ({ props }) => {
  const { show, close } = props;
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal-ui1">
        <h3 className="mdhead">Modal Heading</h3>
        <div className="mdbody">Modal Body</div>
        <div className="mdactions">
          <button className="btnui" type="button">
            OK
          </button>
          <button onClick={close} className="btnui btnui2" name="close">
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Purchasemodal;
