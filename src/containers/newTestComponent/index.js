import react from "react";
const TestComponent = function(props) {
    let title = props.title
    let color = props.color
    const clickHandler = () => {
        if (typeof props.onclick === 'function') {
            props.onclick("props color is")
        }
        props
        alert (clickHandler)
    }
    return (
        <div>
            <button>onClick[clickHandler] test button</button>
        </div>
    )
}
export default TestComponent;