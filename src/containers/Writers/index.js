 import Writer from './component/writers'

 const writers = [
     { name: 'John', lastName: "doe", id:1},
     { name: 'asdv', lastName: "seb", id:1},
     { name: 'John', lastName: "doe", id:1},
     { name: 'John', lastName: "doe" , aid:1},
     { name: 'John', lastName: "doe" , id:1},
     { name: 'John', lastName: "doe", id:1 },
 ]
 
const Writers = (props) => {
    return (
        <div>
            {/* <Writer {...writers[0]}/>
            <Writer {...writers[0]}/>
            <Writer {...writers[0]}/>
            <Writer {...writers[0]}/>
            <Writer {...writers[0]}/> */}
            {writers.map((item, index) => {
                return (<Writer {...item} key={index}/>)
            })}

        </div>
    )
    

 }
{

}
export default Writers