import React, { createContext, useReducer } from "react";
import todoReducer from "../reducer/todoReducer";

import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import { Action } from "../constants/todoConstants";

const initializer = {
  todo: [
    // {
    //   id:
    //   name: "fuseini",
    //   description: "Alhamdulillah i am a muslim",
    //   createdAt: "",
    //   expired: false,
    // },
  ],

  view: null,
  isLoading: true,
  update: false, // CHECK IF UPDATE BUTTON IS TRIGGERED / CLICKED
};

export const todoContext = createContext(initializer);

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initializer);

  const navigate = useNavigate();

  function get_todos() {
    dispatch({
      type: Action.GET_TODOS,
      payload: state.todo,
    }); 
  }

  function update_trigger(boolean) {
    dispatch({
      type: Action.UPDATE_TRIGGER,
      payload: boolean,
    });
    
  }

  function add_product(name, description) {
    dispatch({
      type: Action.ADD_PRODUCT,
      payload: {
        id: uuidv4(),
        name,
        description,
        createdAt: new Date().toLocaleDateString(),
        expired: false,
      },
    });
  }

  function remove_product(productId) {
    dispatch({
      type: Action.REMOVE_PRODUCT,
      payload: productId,
    });
  }

  function update_product(id , name , description){
     dispatch({
      type: Action.UPDATE_PRODUCT,
      payload: {
        id,
        name,
        description
      },
      userId: id,
     })
     
  }

  function view_product(productId) {
    dispatch({
      type: Action.VIEW_PRODUCT,
      payload: productId,
    });

    const check = productId !== null && productId !== undefined;

    if (check) {
      load_func(true);
      navigate(`view/${productId}`);
    }
  }

  function load_func(value){
     dispatch({
       type: Action.LOADING,
       payload: value
     })
  }

  return (
    <todoContext.Provider
      value={{
        todo: state.todo,
        update: state.update,
        isLoading: state.isLoading,
        view: state.view,
        get_todos,
        update_trigger,
        add_product,
        remove_product,
        update_product,
        view_product,
        load_func,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default GlobalContext;
