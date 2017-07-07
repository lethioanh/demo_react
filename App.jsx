import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state1 = {
      header: "Header form state...",
      "content": "Content from state"
    }
    this.state = {
      data: [
        {
          "id":1,
          "name":"Foo",
          "age":"20"
        },

        {
          "id":2,
          "name":"Bar",
          "age":"30"
        },

        {
          "id":3,
          "name":"Baz",
          "age":"40"
        }
      ]
    }
  }

  render() {
    var i = 0;
    var myStyle = {
      fontSize: '200',
      color: 'red'
    }

    return (
      <div>
        <h1 style= {myStyle}>{i == 1 ? 'True!' : 'False!' }</h1>
        <h4>Header Static</h4>
        <h2>Content Static</h2>
        <p data-myattribte="somevalue">This is the content</p>
        <h3>{1+1}</h3>

        <h1>{this.state1.header}</h1>
        <h1>{this.state1.content}</h1>

        <Header/>
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
          </tbody>
        </table>
        <Content/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
      </div>
    )
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    )
  }
}
export default App;