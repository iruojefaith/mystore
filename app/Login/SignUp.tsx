import React, { useState } from 'react'
import Button from '../../components/Button'
import { UserAuth } from '../../context/AuthContext'

const Signup = () => {
  const { user, signup } = UserAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Signup</h1>
      <form onSubmit={handleSignup}>
        <div className="mb-3" >
          <label>Email address</label>
          <input type="email"
            placeholder="Enter email"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </div>

        <div className="mb-3" >
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </div>

        <Button  text=" Signup" />
      </form>
    </div>
  )
}

export default Signup