import Layout from './components/Layout';
import  './App.css';
import { Fragment } from 'react';
import Items from './components/Items/Items';
import Error from './components/Errors/Error';
import { useSelector } from 'react-redux';
function App() {
  const showMsg = useSelector(state => state.error.showMessage);
  var fadeClass = "";
  if(showMsg){
    fadeClass = "fade";
  }
  
  return (
    <Fragment>
      <header className={fadeClass}>
        <nav>To Do - Task Manager</nav>
      </header>
        <div></div>
      {showMsg && <Error ></Error>}
        <Items></Items>
    </Fragment>
  );
}

export default App;
