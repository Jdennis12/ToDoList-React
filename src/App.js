import './styles.css';
import List from './components/List';
import Header from './components/Header';
import Tour from './components/Tour';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Header/>
      <TodoList/>
    </div>
  );
}

export default App;
