import Layout from './components/Layout';
import classes from './App.css';
import { Fragment } from 'react';
import Items from './components/Items/Items';
function App() {
  return (
    <Fragment>
      <body>
      <header>
        <nav>To Do - Task Manager</nav>
      </header>
        <div>Body</div>
        <Items></Items>
      </body>
    </Fragment>
    
    
  );
}

export default App;
