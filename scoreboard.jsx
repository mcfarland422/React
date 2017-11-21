// A component called Application
// Components are Propercase (uppercase first letter)
// All componets must return a single DOM element. THere are no exeptions to this.
function Application(){
  return(
    <div className="scoreboard">
      <h1>MLS Semi-Final Scoreboard</h1>
  )
}

// ReactDOM.render puts a component into the DOM.
// It takes 2 args:
// 1. What.
// 2. Where.
ReactDOM.render(
  <div>Sanity, Check</div>
  document.getElementById('root')
);
