import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { todoContext } from "../context/GlobalContext";

import { RotatingLines } from "react-loader-spinner";
import { Card, Button } from "react-bootstrap";

import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { Home } from "@mui/icons-material";

import { style } from "../components/CardButton";
import CardTitle from "../components/CardTitle";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Inputs from "../components/form/Inputs";
import { updateHandler } from "../components/functions/form";

const ViewProduct = () => {
  const { todo, view, isLoading, load_func, update_trigger, update_product } =
    useContext(todoContext);
  const { productId } = useParams();

  const [open, setOpen] = useState(false);

  const { id, name, description, createdAt } = todo?.find(
    (todo) => todo.id === productId
  );

  const [productName, setProductName] = useState(name);
  const [productDescription, setProductDescription] = useState(description);

  useEffect(() => {
    (async () => {
      const { data, status } = await axios(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      if (status === 200 && data?.length > 1) {
        load_func(false);
        //    console.log(data)
      }

      return data || "";
    })();
  }, [view]);

  function update_modal() {
    setOpen(() => !open);
    update_trigger(true);
    return open;
  }

  function handleClose() {
    setOpen(() => !open);
    update_trigger(false);
  }

  function updateFunc(e) {
    updateHandler(
      e,
      id,
      productName,
      productDescription,
      update_product,
      handleClose,
      toast
    );
  }

  return (
    <>
      {isLoading ? (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
          style={{ marginTop: "30px" }}
        />
      ) : (
        <div className="container">
          <div className="d-flex justify-content-between">
            <span
              className="badge"
              style={{ backgroundColor: "rgb(63 118 128)" /*rgb(85 63 128)*/ }}
            >
              <h5 className="text text-white">Hi @fuseini</h5>
            </span>

            <Link to={`/`}>
              <Home
                sx={{ color: "#c650ad", marginTop: "5px", fontSize: "30px" }}
              />
            </Link>
          </div>

          <hr />
          <div className="row justify-content-center">
            <Card id="views">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Title>{name}</Card.Title>
                  <Card.Title
                    style={{
                      padding: "5px",
                      backgroundColor: "rgb(85 63 128)",
                      color: "white",
                    }}
                  >
                    {createdAt}
                  </Card.Title>
                </div>
                <Card.Text
                  style={{
                    padding: "5px",
                    backgroundColor: "rgb(239 251 253)",
                  }}
                >
                  {description}
                </Card.Text>
                <Button variant="primary" onClick={update_modal}>
                  Update
                </Button>
                {open && (
                  <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{ backgroundColor: "blue" }}
                  >
                    <Box sx={{ ...style }}>
                      <CardTitle title="Update Post" titleColor="dark" />
                      <hr />
                      <>
                        <form method="POST" action="">
                          <Inputs
                            setProductName={setProductName}
                            setProductDescription={setProductDescription}

                            submitHandler={updateFunc}
                            
                            productNameValue={productName}
                            productDescriptionValue={productDescription}
                          />
                        </form>
                      </>
                    </Box>
                  </Modal>
                )}
              </Card.Body>
            </Card>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default ViewProduct;
