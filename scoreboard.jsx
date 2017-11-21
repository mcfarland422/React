// A component called Application
// Components are Propercase (uppercase first letter)
// All componets must return a single DOM element. THere are no exeptions to this.
function Header(props){
  return(
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  )
}
function Team(props) {

}
function Application(props){
  return(
    <div className="scoreboard">
      <Header title={props} />
        <h1>MLS Semi-Final Scoreboard</h1>
      </div>
      <div className="teams">
        <div className="team">
          <div className="team-name">Columbus</div>


        <div className="counter">
          <button className="minus">-</button>
          <div className="team-score">0</div>
          <button className="plus">+</button>
        </div>

        </div>


    </div>
  );
};

// ReactDOM.render puts a component into the DOM.
// It takes 2 args:
// 1. What.
// 2. Where.

ReactDOM.render(
  <Application title="MLS Semi-Final Scoreboard"/>,
  document.getElementById('root')
);
