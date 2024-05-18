import React, { useContext, useState } from "react";
import { Modal, Box } from "@mui/material";
import { todoContext } from "../context/GlobalContext";
import Form from "./form/Form";
import { ToastContainer } from "react-toastify";

export const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


const CardButton = ({cardHeader , btnText}) => {


  const { isOpen } = useContext(todoContext);

  const [openBtn, setOpenBtn] = useState(false);

  function btnHandler() {
    setOpenBtn(() => !openBtn);
  }
  

  function closeModal() {
    setOpenBtn(() => false);
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <button
        className="btn"
        style={{ backgroundColor: "#d5a021", color: "white" }}
        onClick={btnHandler}
      >
        Post Todo
      </button>
      {openBtn && (
        <Modal
          open={!isOpen}
          onClose={closeModal}
          sx={{ backgroundColor: "blue" }}
        >
          <div className="box">
            <Box
              sx={{
                ...style,
                width:
                  window.screen.availWidth && window.screen.width < 480
                    ? "100%"
                    : "500px",
              }}
            >
              <h4 className="text text-default">{cardHeader}</h4>
              <hr />
              <Form />
            </Box>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default CardButton;
