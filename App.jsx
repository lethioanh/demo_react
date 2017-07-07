import React from 'react';

class App extends React.Component {
  render() {
    var i = 0;
    var myStyle = {
      fontSize: '200',
      color: 'red'
    }
    return (
      <div>
        <h1 style= {myStyle}>{i == 1 ? 'True!' : 'False!' }</h1>
        <h4>Header</h4>
        <h2>Content</h2>
        <p data-myattribte="somevalue">This is the content</p>
        <h3>{1+1}</h3>
      </div>
    );
  }
}

export default App;