// My first react component! How exciting.
// Components today, Turkey tomorrow, Santa next month.
// A component in React should be uppercase
function Application(){
    // A React Component must return 1, and ONLY 1 DOM element.
    // Here we can write JS.
    // console.log("Hello, from inside of the Application component.");
    var zachsSeat = 1;
    var niksSeat = 16*2-30;

    // A component can pass props to another component inside of it. props are passed as "HTML attributes" and will be available in the child component

    return(
      {/*<h1>Hello, World</h1>*/}
      <div id="parent">
        <div class="sibling">
          <Student name="Jennifer" seat="3" />
          <Student name="Nikolas" seat={1+1} />
          <Student name="Zach" seat={30*10-299}/>
          {/* <li>Jennifer is in seat {1+2}</li>
          <li>Nikolas</li>
          <li>Zach {zachsSeat}</li> */}
        </div>
      </div>
    )
};

function Student(props){
  //This is a component, a component returns a single DOM element.
  return (
    <li>{props.name} is in seat {props.seat}</li>
  )
}

// ReactDOM is available because we included reactDOM.js
// the .render function needs React (react.js) and it takes 2 args:
//   1 The component to render.
//   2 WHere to render it.

console.log(React);
console.log(ReactDOM);

ReactDOM.render(
  //<h1>Hello, World</h1>,
  <Application />,
  document.getElementById('container')
);
