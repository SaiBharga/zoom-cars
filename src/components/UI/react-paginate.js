import axios from 'axios';
import { Component } from 'react/cjs/react.production.min';

class ReactPaginate extends Component{
    
constructor(props) {
    super(props);
    this.state = {
        offset: 0,
        data: [],
        perPage: 10,
        currentPage: 0
    };
    this.handlePageClick = this
        .handlePageClick
        .bind(this);
  }

  receivedData(){
    axios
        .get(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => {
  
            const data = res.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(pd => <React.Fragment>
                <p>{pd.title}</p>
                <img src={pd.thumbnailUrl} alt=""/>
            </React.Fragment>)
  
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
               
                postData
            })
        });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
  
    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, 
    () => {
        this.receivedData()
    })
  
  };
  
  componentDidMount() {
    this.receivedData()
  }
  render(){
    return (
        <div>
            {this.state.postData}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/>
        </div>
  
    )
  }
}

  