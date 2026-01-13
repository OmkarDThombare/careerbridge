import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '../../utils/constant.js'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  })

  const { loading, user } = useSelector(store => store.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      })

      if (res.data.success) {
        dispatch(setUser(res.data.user))
        navigate("/")
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    } finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [])

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center max-w-7xl mx-auto px-4">
        <form
          onSubmit={submitHandler}
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border border-gray-200 rounded-md p-6 my-10 bg-white"
        >
          <h1 className="font-bold text-xl mb-5 text-center sm:text-left">
            Login
          </h1>

          {/* Email */}
          <div className="my-3">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="omkar@gmail.com"
            />
          </div>

          {/* Password */}
          <div className="my-3">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="••••••••"
            />
          </div>

          {/* Role */}
          <RadioGroup className="flex flex-col sm:flex-row items-start sm:items-center gap-4 my-5">
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role == 'student'}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label>Student</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role == 'recruiter'}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label>Recruiter</Label>
            </div>
          </RadioGroup>

          {/* Button */}
          {
            loading
              ? (
                <Button className="w-full my-4">
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Please wait
                </Button>
              )
              : (
                <Button type="submit" className="w-full my-4">
                  Login
                </Button>
              )
          }

          {/* Footer */}
          <p className="text-sm text-center mt-3">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
