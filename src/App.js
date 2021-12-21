import './App.scss';
import { Form1 } from './components/form1/Form1';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app-root'>
      <div>
        <div><a href="/form1">Form1</a></div>
        <hr/>
      </div>
      <Routes>
        <Route path="/form1" exact element={<Form1/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
