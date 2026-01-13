import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '../../utils/constant.js'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  })

  const { loading, user } = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] })
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("fullname", input.fullname)
    formData.append("email", input.email)
    formData.append("phoneNumber", input.phoneNumber)
    formData.append("password", input.password)
    formData.append("role", input.role)

    if (input.file) {
      formData.append("file", input.file)
    }

    try {
      dispatch(setLoading(true))
      const res = await axios.post(
        `${USER_API_END_POINT}/register`,
        formData,
        { withCredentials: true }
      )

      if (res.data.success) {
        toast.success(res.data.message)
        navigate("/login")
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong")
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
            Sign Up
          </h1>

          {/* Full Name */}
          <div className="my-3">
            <Label>Full Name</Label>
            <Input
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
            />
          </div>

          {/* Email */}
          <div className="my-3">
            <Label>Email</Label>
            <Input
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>

          {/* Phone */}
          <div className="my-3">
            <Label>Phone Number</Label>
            <Input
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
            />
          </div>

          {/* Password */}
          <div className="my-3">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
            />
          </div>

          {/* Role & File */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 my-5">

            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                />
                Student
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                />
                Recruiter
              </label>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <Label>Profile</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
              />
            </div>
          </div>

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
                  Signup
                </Button>
              )
          }

          {/* Footer */}
          <p className="text-sm text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
