import React,{useState} from 'react'

function Greeting() {
    const [changedText,setChangedText] = useState(false)

    const changeTextHandler = ()=> {
        setChangedText(!changedText)
    }

  return (
    <div>
        <h2>Hello World!</h2>
        {!changedText && <p>Nice to meet you.</p>}
        {changedText && <p>Nice to meet you too.</p>}
        <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
}

export default Greeting