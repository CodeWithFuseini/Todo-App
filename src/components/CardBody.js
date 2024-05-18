import React, { useContext } from "react";
import { todoContext } from "../context/GlobalContext";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";


const CardBody = () => {
  const { todo, remove_product, view_product } = useContext(todoContext);

  return (
    <div className="card-body">
      {todo?.length < 1 ? (
        <h4 className="text text-dark">No data available</h4>
      ) : (
        <ul
          className="list-group "
          style={
            todo?.length > 10
              ? { overflowY: "scroll", height: "250px" }
              : { overflowY: "hidden" }
          }
        >
          {todo?.map((todo, index) => {
            return (
              <>
                <div className="d-flex justify-content-between">
                  <li
                    className="list-group-item w-100"
                    key={todo.id}
                    onClick={() => view_product(todo.id)}
                  >
                    {todo.name}
                    <VisibilityOutlinedIcon
                      sx={{ float: "right", color: "#2222bc" }}
                    />
                  </li>
                  <div onClick={() => remove_product(todo.id)}>
                    <DeleteForeverOutlinedIcon
                      className="mt-2"
                      sx={{ color: "#c21717" }}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CardBody;
