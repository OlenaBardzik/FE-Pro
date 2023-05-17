import Header from './Header';
import Menu from './Menu';
import Main from './Main';


function App() {
  return (
    <div className="app">
      <Menu />
      <div className='content'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
