import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut, MenuIcon } from "lucide-react";
import { logoutUser } from "@/services/auth.service";

const UserMenu = ({ size = 24, className = "", align = "start" }) => {
  const handleLogout = () => {
    logoutUser();
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className={`outline-none cursor-pointer ${className}`}>
          <MenuIcon size={size} />
        </button>
      </PopoverTrigger>
      <PopoverContent align={align} className="w-48 p-2">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
        >
          <LogOut size={16} />
          Logout
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
