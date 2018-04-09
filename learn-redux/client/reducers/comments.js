// We need the empty array for the first time it runs
function comments(state = [], actions) {
  console.log(state, actions);
  return state;
}
export default comments;
