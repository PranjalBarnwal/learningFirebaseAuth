import React,{useRef} from 'react'

const Signup = () => {
    const emailRef=useRef();
    const passRef=useRef();
  return (
    <div>
      <form style={{display:"flex",flexDirection:"column"}}>
<input  type="email" placeholder='email' ref={emailRef}/>
<input type="password" placeholder="password" ref={passRef} />
<button>Signup</button>
      </form>
    </div>
  )
}

export default Signup
