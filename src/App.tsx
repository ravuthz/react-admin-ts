import logo from './logo.svg';
import './App.less';

function App(props: any) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 18
        </a>
      </header>
      {/* <Pagination defaultCurrent={1} total={50} showSizeChanger /> */}
    </div>
  );
}

export default App;
