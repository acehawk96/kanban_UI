
import './App.css';
import ToDo from'./ToDo.js';
import Progressing from'./Progressing.js';
import Done from'./Done.js';
import AddBox from './AddBox';

const toDos = {}

function App() {
  return (
      <header className="App-header">
          <aside>
              <AddBox></AddBox>
          </aside>
          <div className="flex-container">
              <ToDo/>
              <Progressing/>
              <Done/>
          </div>
      </header>
  );
}

export default App;

