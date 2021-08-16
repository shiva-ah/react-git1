import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route,HashRouter } from 'react-router-dom';
import Page1 from './page1';
import Home from './Home';
import Users from './users';

function App() {
  return (
		<HashRouter basename="/">
			<Route exact path={"/page1"} component={Page1}/ >
			<Route exact path={"/users"} component={Users}/ >
			<Route exact path="/" component={Home}/ >
			
		</HashRouter>
		
  );
}
ReactDOM.render(<App/>,document.getElementById('root'));
export default App;
