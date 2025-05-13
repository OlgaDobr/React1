import logo from './logo.svg';
import './App.css';
import TestComponent from './containers/newTestComponent';
import ClassComponent from './containers/classComponent';
import CurrentData from './containers/currentDate';
import CurrentTime from './containers/currentTime';

function App() {
  const someFunc = (value) => {
    alert(value)
  }
  return (
    <>
    {/* <AnotherOneComponent/> */}
    <div className="App">
      current time
      <TestComponent title={"button 1"} color={'red'} onclick={someFunc}/>
      <TestComponent title={"button 2"} color={'green'} onclick={someFunc}/>
      <TestComponent title={"button 3"} color={'pink'}/>
      <TestComponent title={"button 4"} color={'blue'}/>

      <ClassComponent startValue={5} incValue={3}/>
    </div>
    <div> no class</div>
    <CurrentData/>
    <CurrentTime/>
    </>
  );
}

export default App;
