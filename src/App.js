import react from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './containers/newTestComponent';
import AnotherOneComponent from './containers/anotherOneComponent';
import ClassComponent from './containers/classComponent';
import CurrentDate from './containers/CurrentDate';
import CurrentTime from './containers/CurrentTime';
import  Writers  from './containers/Writers';
import Form from './containers/Form';
function App(props) {
  const someFunc = (value) => {
    alert(value)
  }

  const someFunc1 = (value) => {
    console.log(value)
  }
  
  return (
    <>
       <AnotherOneComponent title={'button'} color={'grey'}/>
      <div className="App">
        <Form />
        Current time
        <Writers/>
        {/* //<TestComponent  title={"button 1"} color={'red'} onclick={someFunc}/>
        <TestComponent  title={"button 2"} color={'green'} onclick={someFunc1}/>

        <TestComponent  title={"button 3"} color={'pink'}/>

        <TestComponent  title={"click me"} color={'blue'} />

        <ClassComponent  startValue={3} incValue={5}/>// */}
      </div>
      <div> no class </div>
     <CurrentDate />
     <CurrentTime />
     
    </>
    
  );
}

export default App;