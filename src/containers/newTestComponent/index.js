import react, { useState } from "react";
const TestComponent = function(props) {
    
  const [bgcolor, setBgColor] = useState(props.color) 
    const btnClickFn = (val) => {
        if (bgcolor === 'green') {
            setBgColor(props.color)
        } else {
            setBgColor('green')
        }
        console.log(bgcolor)
    }
    return (
        <div className={"header"} style={{color: bgcolor}} onClick={btnClickFn}>

            header
            
        </div>
    )
}
export default TestComponent;