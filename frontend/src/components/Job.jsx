import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200 flex flex-col">

      {/* Top row */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#475569]">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <Button
          className="rounded-full text-[#4F46E5] border-[#4F46E5] hover:bg-[#ECFEFF]"
          variant="outline"
          size="icon"
        >
          <Bookmark />
        </Button>
      </div>

      {/* Company info */}
      <div className="flex items-center gap-3 my-4">
        <Avatar>
          <AvatarImage src={job?.company?.logo} />
        </Avatar>

        <div>
          <h1 className="font-medium text-lg text-[#0F172A]">
            {job?.company?.name}
          </h1>
          <p className="text-sm text-[#475569]">India</p>
        </div>
      </div>

      {/* Job details */}
      <div>
        <h1 className="font-bold text-lg my-2 text-[#0F172A]">
          {job?.title}
        </h1>
        <p className="text-sm text-[#475569] line-clamp-3">
          {job?.description}
        </p>
      </div>

      {/* Tags */}
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

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mt-5">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          className="bg-[#4F46E5] hover:bg-[#4338CA] text-white w-full sm:w-auto"
        >
          Details
        </Button>

        <Button
          variant="outline"
          className="border-[#4F46E5] text-[#4F46E5] hover:bg-[#ECFEFF] w-full sm:w-auto"
        >
          Save For Later
        </Button>
      </div>

    </div>
  );
};

export default Job;
