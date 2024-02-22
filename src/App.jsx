
import { useState } from 'react'
import './App.css'

function App() {

  const[result,setResult]=useState('')

  const allClear=()=>{
    setResult('')
  }

  const getData=(e)=>{
    setResult(result.concat(e))
  }

  const backSpace=()=>{
    setResult(result.slice(0,-1))
  }

  const calculate=()=>{
    try{
      setResult(eval(result).toString())

    }catch(Error){
      setResult('Error')
    }
  }

  return (
    <>
      <div className=' d-flex justify-content-center align-items-center mt-5'>
        <div className='calc rounded'>
          <div>
            <h5 className='text-center text-light mt-3'>CASIO</h5>
          </div>

          <div className='text-center mt-3'>
            <input value={result} className='intext rounded pe-1' type="text" readOnly placeholder='0' />
          </div>


          <div className='d-flex justify-content-around mt-5'>
            <button onClick={allClear} className='btn text-danger bt '>AC</button>
            <button onClick={backSpace} className='btn text-danger bt'>DEL</button>
            {/* <button value={'%'} onClick={(e)=>getData(e.target.value)} className='btn text-warning '>%</button> */}
            <button value={'/'} onClick={()=>getData('/')} className='btn text-success bttn'>/</button>
          </div>

          <div className='d-flex justify-content-around mt-3'>
            <button value={'7'} onClick={()=>getData('7')} className='btn text-light bttn '>7</button>
            <button value={'8'} onClick={()=>getData('8')} className='btn text-light bttn'>8</button>
            <button value={'9'} onClick={()=>getData('9')} className='btn text-light bttn'>9</button>
            <button value={'*'} onClick={()=>getData('*')} className='btn text-success bttn'>X</button>
          </div>

          <div className='d-flex justify-content-around mt-3'>
            <button value={'4'} onClick={()=>getData('4')} className='btn text-light bttn'>4</button>
            <button value={'5'} onClick={()=>getData('5')} className='btn text-light bttn'>5</button>
            <button value={'6'} onClick={()=>getData('6')} className='btn text-light bttn'>6</button>
            <button value={'-'} onClick={()=>getData('-')} className='btn text-success bttn'>-</button>
          </div>

          <div className='d-flex justify-content-around mt-3'>
            <button value={'1'} onClick={()=>getData('1')} className='btn text-light bttn '>1</button>
            <button value={'2'} onClick={()=>getData('2')} className='btn text-light bttn'>2</button>
            <button value={'3'} onClick={()=>getData('3')} className='btn text-light bttn'>3</button>
            <button value={'+'} onClick={()=>getData('+')} className='btn text-success bttn'>+</button>
          </div>

          <div className='d-flex justify-content-around mt-3'>
            <button value={'0'} onClick={()=>getData('0')} className='btn text-light bttn '>0</button>
            <button value={'00'} onClick={()=>getData('00')} className='btn text-light bttn'>00</button>
            <button value={'.'} onClick={()=>getData('.')} className='btn text-light bttn'>.</button>
            <button  onClick={calculate} className='btn text-success bttn'>=</button>
          </div>
        </div>

        

      </div>
    </>
  )
}

export default App
