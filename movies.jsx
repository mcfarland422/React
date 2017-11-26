
class Movies extends React.Component{
  constructor(){
    super();
    this.state = {
      moviesToShow: []
    }
  }

  // componentDidMount is special. We can make our own methods,
  // but this one is used by React.Component.
  componentDidMount(){
    console.log("Movies was just put into the DOM");
  }

  render(){
    return(
      <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="th-wrapper">
                            <button className="btn btn-primary">Reset Search</button>
                        </div>
                        <div className="movie-rows">
                            {/* Movies go here! */}
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}


// 1 what
// 2 Where
ReactDOM.render(
  <Movies />,
  document.getElementById('root')
)
