import {createRef, useState} from "react";

const Form = (props) => {
    let uRef = createRef();
    const submitHanler = (e) => {
        e.preventDefault();
        //let uName = document.querySelector('#userName')
        console.log(uRef.current.value,lastName)
    }
    const{lastName, setlastName} = useState('');
    const changeHendler = (e) => {
        setlastName(e.target.value)
    }
    const buttonHandler = (e => {
        e.preventDefault();
        console.log(lastName)

    })
    return(
        <>

        <form onSubmit={submitHanler}>

                <input type="text" id />
                <button type="submit">click me</button>
            </form>
            <div>
                <input type='text'
                 id='lastName' 
                 value={lastName} 
                 onChange={changeHendler}/>
                <button onClick={buttonHandler}>click me</button>
            

        </div >
        </>
        
    )
    }

export default Form;

