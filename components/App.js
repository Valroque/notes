const React = require('react');
const Footer = require('./Footer');
const AddTodo = require('../containers/AddTodo');
const VisibleTodoList = require('../containers/VisibleTodoList');

var App = (
            <div>
              <AddTodo />
              <VisibleTodoList />
              <Footer />
            </div>
          )

export default App
