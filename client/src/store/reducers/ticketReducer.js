import {
  GET_TICKETS,
  TICKETS_LOADING,
  CREATE_TICKET,
  ADD_COMMENT,
  ASSIGN_TICKET,
  UPDATE_TICKET,
} from "../actions/types";
const initState = {
  tickets: [],
  loading: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
        loading: false,
      };
    case CREATE_TICKET:
      return {
        ...state,
        tickets: [action.payload, ...state.tickets],
      };
    case ADD_COMMENT:
    case UPDATE_TICKET:
      return {
        ...state,
        tickets: [action.payload],
      };
    case ASSIGN_TICKET:
      return {
        ...state,
        tickets: [action.payload, ...state.tickets],
      };
    case TICKETS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
