//Main entry point for application

var React = require('react');
var ReactDom = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDom.render (<ListManager title="Ingredients"/>, document.getElementById('ingredients'));
ReactDom.render (<ListManager title="To Do" headingColor="black"/>, document.getElementById('todo'));
ReactDom.render (<ListManager title="Camping Gear" headingColor="#000"/> , document.getElementById('campingGear'));