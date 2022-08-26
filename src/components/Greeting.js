import React,{useState} from 'react'
import Output from './Output'
function Greeting() {
    const [changedText,setChangedText] = useState(false)

    const changeTextHandler = ()=> {
        setChangedText(!changedText)
    }

  return (
    <div>
        <h2>Hello World!</h2>
        {!changedText && <Output>Nice to meet you.</Output>}
        {changedText && <Output>Nice to meet you too.</Output>}
        <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
}

export default Greeting