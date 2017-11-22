// DUMB COMPONENT or PRESENTATIONAL OR PURE FUNCTION -
//  It doezn't care what the rest of the application is doing.
// // it will ALWAYS return the same X, given the same Y
// // SMART or STATEFUL component - Cares what's going at an Application level.
// The same X, will return a different Y, based on the state of the application.

// createClass is a helper method, that allows you to create a "class" in es5. it takes an object, objects have properties.
// The only rule for these properties is it MUST HAVE a render function

var CoinFlip = React.createClass({
  render: function(){
    return(
      <h1>Sanity Check</h1>
    )
  }
})


// function CoinFlip(props) {
//   return(
//     <h1>Sanity Check</h1>
//   )
// }

ReactDOM.render(
  // <h1>Sanity Check!</h1>,
  <CoinFlip title="Flip the Coin" />,
  document.getElementById('root')
)
