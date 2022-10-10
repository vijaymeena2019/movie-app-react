import React from "react";
import queryString from 'query-string';

const Posts = ({match,location}) => {
 // const {sortBy, approved} = queryString.parse(location.search) // object properties values always in string from 

  return (
    <div>
      <h1>Posts</h1>
      Year:{match.params.year} , Month:{match.params.month}
    </div>
  );
};

export default Posts;
