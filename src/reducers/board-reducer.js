export default (state = {}, action) => {
    switch (action.type) {
    case '':
      const { } = action;
      let newState = Object.assign({}, state, {
        
      });
      return newState;
    default:
      return state;
    }
  };