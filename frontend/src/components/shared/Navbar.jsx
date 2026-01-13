import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogOut, User2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">

        {/* Logo */}
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
            Career<span className="text-[#4F46E5]">Bridge</span>
          </h1>
        </div>

        <div className="flex items-center gap-4 sm:gap-12">

          {/* Nav Links */}
          <ul className="hidden sm:flex font-medium items-center gap-6 text-[#475569]">
            {
              user && user.role === "recruiter" ? (
                <>
                  <li className="hover:text-[#4F46E5] transition">
                    <Link to="/admin/companies">Companies</Link>
                  </li>
                  <li className="hover:text-[#4F46E5] transition">
                    <Link to="/admin/jobs">Jobs</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:text-[#4F46E5] transition">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:text-[#4F46E5] transition">
                    <Link to="/jobs">Jobs</Link>
                  </li>
                  <li className="hover:text-[#4F46E5] transition">
                    <Link to="/browse">Browse</Link>
                  </li>
                </>
              )
            }
          </ul>

          {/* Auth Section */}
          {
            !user ? (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-[#4F46E5] text-[#4F46E5] hover:bg-[#ECFEFF] text-sm px-3 sm:px-4"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm px-3 sm:px-4">
                    Signup
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer border border-gray-200 h-9 w-9 sm:h-10 sm:w-10">
                    <AvatarImage src={user?.profile?.profilePhoto} />
                  </Avatar>
                </PopoverTrigger>

                <PopoverContent className="w-72 sm:w-80 bg-white border border-gray-200">
                  <div>
                    <div className="flex gap-3 items-center">
                      <Avatar>
                        <AvatarImage src={user?.profile?.profilePhoto} />
                      </Avatar>

                      <div>
                        <h4 className="font-medium text-[#0F172A]">
                          {user?.fullname}
                        </h4>
                        <p className="text-sm text-[#475569]">
                          {user?.profile?.bio}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col my-3 text-[#475569]">
                      {
                        user && user.role === "student" && (
                          <div className="flex items-center gap-2">
                            <User2 className="text-[#10B981]" />
                            <Button variant="link" className="text-[#4F46E5]">
                              <Link to="/profile">View Profile</Link>
                            </Button>
                          </div>
                        )
                      }

                      <div className="flex items-center gap-2">
                        <LogOut className="text-red-500" />
                        <Button
                          onClick={logoutHandler}
                          variant="link"
                          className="text-red-500"
                        >
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
