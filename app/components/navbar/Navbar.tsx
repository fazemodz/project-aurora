'use client';
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import {
  Navbar, Input, Button, NavbarBrand, NavbarContent, NavbarItem,
  Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar
} from "@nextui-org/react";
const NotLoggedInUserActionBtn = () => {
  return (
    <>
      <NavbarItem className="hidden lg:flex">
        <Link href="/Login">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </>
  )
}
interface NavbarProps {
  currentUser?: SafeUser | null;
}
const LoggedInUserActionBtn= (
  currentUser: SafeUser | null, 
) => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={currentUser?.name}
          size="sm"
          src={currentUser?.image}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{currentUser?.email}</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        {/* @ts-ignore */}
        <DropdownItem key="logout" onClick={signOut} color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
const MainNavbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit"><a href="/">AURORA</a></p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Input
            isClearable
            type="Text"
            placeholder="Search for forums or users"
            defaultValue=""
            onChange={(e) => console.log(`input changed: ${e.target.value}`)}
            onClear={() => console.log("input cleared")}
            className="w-[450px]"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {/*#TODO: Fix this error idk how as not even co-pilot can help me */}
        {/* @ts-ignore*/}
        {currentUser ? LoggedInUserActionBtn(currentUser) : NotLoggedInUserActionBtn()}
      </NavbarContent>
    </Navbar>
  )
}
export default MainNavbar;