import React from 'react';
import ReactDOM from 'react-dom'


var App = React.createClass({
    render: function(){
        return (<div><p>A foolish consistency is the hobgoblin of little minds.</p></div>);
    }
});

ReactDOM.render(<App />,  document.getElementById("content"));