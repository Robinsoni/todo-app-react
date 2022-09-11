import Layout from './components/Layout';
import classes from './App.css';
import { Fragment } from 'react';
import Items from './components/Items/Items';
import Error from './components/Errors/Error';
import { useSelector } from 'react-redux';
function App() {
  const showMsg = useSelector(state => state.error.showMessage);
  return (
    <Fragment>
      <header>
        <nav>To Do - Task Manager</nav>
      </header>
        <div></div>
      {showMsg && <Error ></Error>}
        <Items></Items>
    </Fragment>
    
    
  );
}

export default App;
