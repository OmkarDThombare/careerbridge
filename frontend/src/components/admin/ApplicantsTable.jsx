import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import axios from 'axios'

const shortlistingStatus = ["Accepted", "Rejected"]

const ApplicantsTable = () => {
  const { applicants } = useSelector(store => store.application)

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status }
      )
      if (res.data.success) {
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap">Full Name</TableHead>
            <TableHead className="whitespace-nowrap">Email</TableHead>
            <TableHead className="whitespace-nowrap">Contact</TableHead>
            <TableHead className="whitespace-nowrap">Resume</TableHead>
            <TableHead className="whitespace-nowrap">Date</TableHead>
            <TableHead className="text-right whitespace-nowrap">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            applicants?.applications?.map((item) => (
              <TableRow key={item._id}>
                <TableCell className="whitespace-nowrap">
                  {item?.applicant?.fullname}
                </TableCell>

                <TableCell className="whitespace-nowrap">
                  {item?.applicant?.email}
                </TableCell>

                <TableCell className="whitespace-nowrap">
                  {item?.applicant?.phoneNumber}
                </TableCell>

                <TableCell className="whitespace-nowrap">
                  {
                    item.applicant?.profile?.resume
                      ? (
                        <a
                          className="text-blue-600 cursor-pointer"
                          href={item?.applicant?.profile?.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item?.applicant?.profile?.resumeOriginalName}
                        </a>
                      )
                      : <span>NA</span>
                  }
                </TableCell>

                <TableCell className="whitespace-nowrap">
                  {item?.applicant.createdAt.split("T")[0]}
                </TableCell>

                <TableCell className="text-right whitespace-nowrap">
                  <Popover>
                    <PopoverTrigger className="cursor-pointer">
                      <MoreHorizontal className="w-5 h-5" />
                    </PopoverTrigger>

                    <PopoverContent className="w-32">
                      {
                        shortlistingStatus.map((status, index) => (
                          <div
                            key={index}
                            onClick={() => statusHandler(status, item?._id)}
                            className="flex items-center my-2 cursor-pointer"
                          >
                            <span>{status}</span>
                          </div>
                        ))
                      }
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default ApplicantsTable
