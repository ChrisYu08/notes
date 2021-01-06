```javascript
// 方法2：React.createElement
import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement(
    "h1", 
    {className: "main"},
    "Hello React (method 2)"
);
ReactDOM.render(title, document.getElementById('root'));
