import { SafeUser } from "@/app/types";
import UserMenu from "./UserMenu";
interface NavbarProps {
  currentUser?: SafeUser | null;
}
const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
    return(
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href='/'className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
           <UserMenu currentUser={currentUser}/>
        </div>
      </div> 
    )
}
export default Navbar;