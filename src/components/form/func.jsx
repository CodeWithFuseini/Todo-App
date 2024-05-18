export function resetForm({setProductName , setProductDescription}) {
    return(
      setProductName(''),
      setProductDescription('')
    )
  }

  export function submitHandler(e , productName, productDescription, todo , add_product , toast) {
    e.preventDefault();

    if (productName?.length < 1 && productName !== undefined && !productName?.trim()) {
      toast.error("product filed must not be empty ", {
        autoClose: 5000,
        pauseOnHover: true,
      });

      return false;
    }

    if (
      productDescription?.length < 1 &&
      productDescription !== undefined &&
      !productDescription?.trim()
    ) {
      toast.error("description filed must not be empty ", {
        autoClose: 5000,
        pauseOnHover: true,
      });
      return false;
    }

    if (todo?.find((todo) => todo.name === productName)) {
      toast.warn("product already exist", {
        autoClose: 5000,
        pauseOnHover: true,
      });

      return false;
    }

    add_product(productName, productDescription);
    toast.success("product added successfully", {
      autoClose: 5000,
      pauseOnHover: true,
    });

    resetForm();
  }


  export function updateHandler(e, id, productName, productDescription, update_product, handleClose, toast) {
    e.preventDefault();

    if (
      productName?.length < 1 &&
      productName !== undefined &&
      !productName?.trim()
    ) {
      toast.error("product filed must not be empty ", {
        autoClose: 5000,
        pauseOnHover: true,
      });

      return false;
    }

    if (
      productDescription?.length < 1 &&
      productDescription !== undefined &&
      !productDescription?.trim()
    ) {
      toast.error("description filed must not be empty ", {
        autoClose: 5000,
        pauseOnHover: true,
      });
      return false;
    }

    
    update_product(id, productName, productDescription);
    handleClose();
    toast.success("Update Successfully");
  }
