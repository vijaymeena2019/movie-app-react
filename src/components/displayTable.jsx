import React, {Component} from 'react';
import axios from 'axios'


class DisplayTable extends Component {

  state={
    posts:[]
  }

  componentDidMount () {
    // sent some http request to server and it will return a promise
    // What is a Promise?
    // Promise is an object that holds the result of asynchronous operation. An asynchronous operation is an operation that is going to compelete in future
    // pending > resolved (Success) OR rejected (failure)
    const promise = axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(promise)
  }

  render() {
    return (
        <React.Fragment>
            <button className="btn btn-primary">Add</button>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  
</table>
        </React.Fragment>
    )
}
}

export default DisplayTable;