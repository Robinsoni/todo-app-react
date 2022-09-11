import Layout from './components/Layout';
import classes from './App.css';
import { Fragment } from 'react';
import Items from './components/Items/Items';
import Error from './components/Errors/Error';
function App() {
  return (
    <Fragment>
      <header>
        <nav>To Do - Task Manager</nav>
      </header>
        <div></div>
      <Error ></Error>
        <Items></Items>
    </Fragment>
    
    
  );
}

export default App;
