import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Contact, Mail, Pen } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false)
  const { user } = useSelector(store => store.auth)

  return (
    <div className="bg-[#ECFEFF]/30 min-h-screen">
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-6 p-6 sm:p-8">

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-center gap-4">

            <Avatar className="h-20 w-20 sm:h-24 sm:w-24 border border-gray-200">
              <AvatarImage src="" />
            </Avatar>

            <div>
              <h1 className="font-semibold text-lg sm:text-xl text-[#0F172A]">
                {user?.fullname}
              </h1>
              <p className="text-[#475569] text-sm sm:text-base">
                {user?.profile?.bio}
              </p>
            </div>
          </div>

          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="border-[#4F46E5] text-[#4F46E5] hover:bg-[#ECFEFF] w-fit self-start"
          >
            <Pen />
          </Button>
        </div>

        {/* Contact Info */}
        <div className="my-6">
          <div className="flex items-center gap-3 my-2 text-[#475569] text-sm sm:text-base">
            <Mail className="text-[#4F46E5]" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2 text-[#475569] text-sm sm:text-base">
            <Contact className="text-[#4F46E5]" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="my-4">
          <h1 className="font-medium text-[#0F172A] mb-2">Skills</h1>
          <div className="flex flex-wrap gap-2">
            {
              user?.profile?.skills.length !== 0
                ? user?.profile?.skills.map((item, index) => (
                    <Badge
                      key={index}
                      variant="ghost"
                      className="text-[#4F46E5] font-medium bg-[#ECFEFF] text-xs sm:text-sm"
                    >
                      {item}
                    </Badge>
                  ))
                : <span className="text-[#475569]">NA</span>
            }
          </div>
        </div>

        {/* Resume */}
        <div className="grid w-full max-w-sm gap-1.5 mt-4">
          <Label className="text-md font-bold text-[#0F172A]">Resume</Label>
          {
            isResume
              ? (
                <a
                  target="blank"
                  href={user?.profile?.resume}
                  className="text-[#4F46E5] hover:underline break-all"
                >
                  {user?.profile?.resumeOriginalName}
                </a>
              )
              : <span className="text-[#475569]">NA</span>
          }
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl px-2 sm:px-4">
        <h1 className="text-lg font-bold my-6 text-[#0F172A]">
          Applied Jobs
        </h1>
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default Profile
