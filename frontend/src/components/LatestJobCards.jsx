import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-4 sm:p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer hover:shadow-2xl transition"
    >
      <div>
        {/* Company */}
        <div>
          <h1 className="font-medium text-base sm:text-lg text-[#0F172A]">
            {job?.company?.name}
          </h1>
          <p className="text-sm text-[#475569]">India</p>
        </div>

        {/* Job Title & Description */}
        <div className="mt-2">
          <h1 className="font-bold text-base sm:text-lg my-1 text-[#0F172A]">
            {job?.title}
          </h1>
          <p className="text-sm text-[#475569] line-clamp-2">
            {job?.description}
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <Badge className="text-[#4F46E5] font-bold" variant="ghost">
            {job?.position}
          </Badge>
          <Badge className="text-[#10B981] font-bold" variant="ghost">
            {job?.jobType}
          </Badge>
          <Badge className="text-[#4338CA] font-bold" variant="ghost">
            {job?.salary}
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default LatestJobCards
