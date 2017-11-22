// DUMB COMPONENT or PRESENTATIONAL OR PURE FUNCTION -
//  It doezn't care what the rest of the application is doing.
// // it will ALWAYS return the same X, given the same Y
// // SMART or STATEFUL component - Cares what's going at an Application level.
// The same X, will return a different Y, based on the state of the application.

// createClass is a helper method, that allows you to create a "class" in es5. it takes an object, objects have properties.
// The only rule for these properties is it MUST HAVE a render function

// var CoinFlip = React.createClass({
//   render: function(){
//     return(
//       <h1>Sanity Check</h1>
//     )
//   }
// })


// function CoinFlip(props) {
//   return(
//     <h1>Sanity Check</h1>
//   )
// }
// class Car {
//   construtor(year, model, mpg){
//     this.year = year
//   }
// }

class CoinFlip extends React.Component{
    //First thing that comes in any new class...
    construtor(props){
      //this is a child class of the React.Component class.
      // We MUST call super to use it.
      super();
      this.test = "This is a test class property";
      this.title = props.title;
      this.state = {
        image: '/quarter-coin-head.jpg'
      }
    }

    flipCoin(){
      console.log("flip Coin ran");
      we are going to change this.state.
      Listen.
      Really, listen.
    }

    // The one function we MUST have in a component is...
    render(){
      //render MUST return a single DOM element
      return(
        <div className="coin-flip">
        <h1>{this.title}</h1>
          <div>
            <button onClick={this.flipCoin}>Click to Flip the Coin</button>
            <img src={this.state.image} />
          </div>
        </div>
      )
    }
}

ReactDOM.render(
  // <h1>Sanity Check!</h1>,
  <CoinFlip title="Flip the Coin" />,
  document.getElementById('root')
)
