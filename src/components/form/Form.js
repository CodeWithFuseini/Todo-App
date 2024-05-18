import React, { useState, useContext, useRef } from "react";

import Inputs from "./Inputs";
import { todoContext } from "../../context/GlobalContext";

import { toast } from "react-toastify";

import { submitHandler , resetForm } from "../functions/form";

const Form = () => {
  const { add_product , todo } = useContext(todoContext);

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const productNameRef = useRef();
  const productDescriptionRef = useRef();
    
  
    
    function submitFunc(e){
      submitHandler(e, productName, productDescription, todo, add_product, toast );
      productNameRef.current.value = '';
      productDescriptionRef.current.value = ''
     
    }
  
   
  
  return (
    <>
      <form method="POST" action="">
        <Inputs
          setProductName={setProductName}
          setProductDescription={setProductDescription}

          submitHandler={submitFunc}

          productNameRef={productNameRef}
          productDescriptionRef={productDescriptionRef}
        />
      </form>
    </>
  );
};

export default Form;
