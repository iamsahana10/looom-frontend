import { NAV_MENU_ITEMS } from "@/constants";
import NavMenu from "./nav-menu";


const NAV_ITEM_BASE =
    "px-3.5 py-3 rounded-lg transition-all duration-150 cursor-pointer group";

const NAV_ITEM_HOVER = "hover:bg-gray-200";

const ICON_BASE =
    "transition-colors duration-100";


const NAV_ICON_INACTIVE = "text-gray-400 group-hover:text-black";
const NAV_ICON_ACTIVE = "text-gray-800 group-hover:text-black";


const BottomNav = ({onCreateClick}) => {
    return (
        <nav className="md:hidden fixed z-50 bottom-0 w-full flex gap-2 items-cente justify-between py-2.5 px-2 bg-white backdrop-blur-xl border-t border-black/10">
           <NavMenu onCreateClick={onCreateClick}/>
        </nav>
    )
}

export default BottomNav