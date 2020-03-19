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

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    return (
    <ul>
        {numbers.map((number) =>
            <ListItem key={number.toString()}
                value={number} />
        )}
    </ul>
    );
}

function Blog(props) {
    const sidebar = (
        <ul>
            {
                props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )
            }
        </ul>
    );

    const content = props.posts.map((post)=>
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
);

    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}

const posts = [
  {id: 1, title: 'Post 1: Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Post 2: Installation', content: 'You can install React from npm.'}
];

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
          <label>
              Is going:
              <input
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
              Number of guests:
              <input
                  name="numberOfGuests"
                  type="number"
                  value={this.state.numberOfGuests}
                  onChange={this.handleInputChange} />
          </label>
      </form>
    );
  }
}

class Example extends React.Component{
    render(){
        return (

            <div>
                {element}
                <Blog posts={posts} />
                <NumberList numbers={[1, 3, 5]}/>
                <Reservation />
            </div>

        );
    }
}
export default Example;
