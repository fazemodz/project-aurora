'use client'
import React, { useState } from 'react'
const Login: React.FC = () => {
  const [password, setpassword] = useState<string>('')
  const [email, setemail] = useState<string>('')
  const [disableLogin, setdisableLogin] = useState<boolean>(true)
  const HandleonSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(email, password)
  }
  const ImportantChecks = () => {
    console.assert(email.length > 0, 'Email is empty')
    console.assert(password.length > 0, 'Password is empty')
    if (email.length > 0 && password.length > 0) {
      setdisableLogin(false)
    } else {
      setdisableLogin(true)
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200" >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="p-6">We see that you arent logged in please log in to see what forums you're following and posts</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" onChange={(e) => setemail(e.target.value)} placeholder="Email" onBlur={ImportantChecks} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" onChange={(e) => setpassword(e.target.value)} placeholder="Password" onBlur={ImportantChecks} className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" className="checkbox" />
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" disabled={disableLogin} onClick={HandleonSubmit}>Login</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Login