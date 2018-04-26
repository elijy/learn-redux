// We need the empty array for the first time it runs
function postComments(state = [], actions) {
  switch(actions.type) {
    case 'ADD_COMMENT':
      // Grab a copy of state
      let tempState = [...state];
      console.log(state);
      // Add the value back to state
      tempState.push({
        user: actions.author,
        text: actions.comment
      });

      // Return state
      return tempState;
    case 'DELETE_COMMENT':
      return state;
    default:
      return state;
  }
}

function comments(state = [], actions) {
  if(typeof actions.postId !== 'undefined') {
    return {
      // Return our current state
      ...state,
      // But also update the state inside the other function
      [actions.postId] : postComments(state=[actions.postId], actions)
    }
  }
  return state;
}

export default comments;
