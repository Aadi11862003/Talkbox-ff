import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import uploadFile from '../helpers/uploadFile';
import axios from 'axios'
import toast from 'react-hot-toast';
import { PiUserCircle } from "react-icons/pi";

const CheckEmailPage = () => {
  const [data, setData] = useState({
    email: "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`

    try {
      const response = await axios.post(URL, data)

      toast.success(response.data.message)

      if (response.data.success) {
        setData({
          email: "",
        })
        navigate('/password', {
          state: response?.data?.data
        })
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600'>
      <div className='bg-white w-full max-w-lg rounded-xl overflow-hidden p-6 mx-auto'>

        <div className='w-fit mx-auto mb-4'>
          <PiUserCircle
            size={100}
          />
        </div>

        <h3 className='text-xl font-semibold text-center mb-4'>Welcome to TalkBox!</h3>

        <form className='grid gap-4 mt-3' onSubmit={handleSubmit}>

          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-lg font-medium'>Email :</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              className='bg-slate-100 px-4 py-2 rounded-lg focus:outline-primary'
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <button
            className='bg-gradient-to-br from-blue-500 to-purple-600 text-lg px-6 py-2 hover:bg-secondary rounded-lg mt-4 font-bold text-white tracking-wide'
          >
            Let's Go
          </button>

        </form>

        <p className='my-4 text-center'>New User? <Link to={"/register"} className='hover:text-primary font-semibold'>Register</Link></p>
      </div>
    </div>
  )
}

export default CheckEmailPage


