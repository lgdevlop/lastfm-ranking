const INITIAL_STATE = {
  exampleKey: ""
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ANY_ACTION":
      return {
        ...state,
        exampleKey: action.payload
      }
    default:
      return state;
  }
}
