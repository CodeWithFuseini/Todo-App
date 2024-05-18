import React from "react";

import "react-toastify/dist/ReactToastify.css";

const Inputs = ({
  setProductName,
  setProductDescription,
  
  submitHandler,

  productNameValue,
  productDescriptionValue,

  productNameRef,
  productDescriptionRef,
}) => {
 

  return (
    <>
      <div className="form-group">
        {/* <label for="name" className='form-label'>product name</label> */}
        <input
          type="text"
          className="form-control"
          placeholder="Enter product name"
          ref={productNameRef}
          onChange={(e) => setProductName(e.target.value)}
          value={'' || productNameValue}
        />
      </div>
      <br />
      <div className="form-group">
        {/* <label for="description" className='form-label'>product description</label> */}
        <textarea
          type="text"
          className="form-control"
          placeholder="Enter product description"
          ref={productDescriptionRef}
          rows={4}
          onChange={(e) => setProductDescription(e.target.value)}
          value={'' || productDescriptionValue}
        />
      </div>
      <br />

      <button className="btn btn-primary" onClick={submitHandler}>
        Create Post
      </button>
    </>
  );
};

export default Inputs;
