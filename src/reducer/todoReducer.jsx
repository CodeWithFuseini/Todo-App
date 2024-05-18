import { Action } from "../constants/todoConstants";

export default (state, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todo: state.todo,
      };
    case Action.UPDATE_TRIGGER:
      return {
        ...state,
        update: action.payload,
      };
    case Action.ADD_PRODUCT:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case Action.REMOVE_PRODUCT:
      return {
        ...state,
        todo: [...state.todo.filter((todo) => todo.id !== action.payload)],
      };
    case Action.UPDATE_PRODUCT:
      return {
        ...state,
        todo: [
          ...state.todo.filter((todo) => {
            if (todo.id === action.userId) {
                
                const { name , description } = action.payload;

                 todo.name = name;
                 todo.description = description;
                 todo.updatedAt = new Date().toLocaleDateString()  
            }
         
            return todo;
          }),
        ],
      };
    case Action.VIEW_PRODUCT:
      return {
        ...state,
        view: action.payload,
      };
    case Action.LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      break;
  }
};
