import React from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}</h1>
    } else {
        return <h1>Hello, Stranger.</h1>
    }
}

const user = {
  firstName: 'Harry',
  lastName: 'Wang'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

class Example extends React.Component{
    render(){
        return (
            element
        );
    }
}
export default Example;
