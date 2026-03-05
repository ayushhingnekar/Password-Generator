import { useState, useCallback, useEffect} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  if(numberAllowed) str += '0123456789'
  if(charAllowed) str += '~!@#$%&*'

  for(let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }

  setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 text-light'>
      <div className='m-5 p-5 rounded-4 bg-primary-subtle text-primary-emphasis'>
         <h1>Random Password Generator</h1>
          <div className='input-group mt-4 px-4'>
            <input 
            className='form-control'
            type='text' 
            value={password}
            placeholder='Password'
            readOnly
            />
            <button className='btn btn-primary'>Copy</button>
          </div>

          <div className='d-flex justify-content-evenly m-3 px-5 text-primary-emphasis fw-medium fst-italic'>
            <div>
              <input 
              type='range'
              min={6}
              max={16}
              value={length}
              onChange={(e) => {setLength(e.target.value)}} /> 
              <label>Length: {length} </label>
            </div>

            <div>
              <input 
              type='checkbox'
              defaultChecked={numberAllowed}
              onChange={() => {setNumberAllowed((prev) => !prev); }} />
              <label> Number {numberAllowed} </label>
            </div>

            <div>
              <input
              type='checkbox'
              defaultChecked={charAllowed}
              onChange={() => {setCharAllowed((prev) => !prev); }} />
              <label> Character {charAllowed} </label>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
