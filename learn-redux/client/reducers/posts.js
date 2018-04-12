// We need the empty array for the first time it runs
function posts(state = [], actions) {
  switch(actions.type) {
    case 'INCREMENT_LIKE':
      // Grab a copy of state
      let tempState = [...state];

      // Add the value back to state
      tempState[actions.index].likes++;

      // Return state
      return tempState;
    default:
      return state;
  }
  return state;
}
export default posts;
