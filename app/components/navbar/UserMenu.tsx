'use client'
import React from 'react'
import { SafeUser } from '@/app/types';
import { useCallback, useState } from "react";
import {DiGithubBadge} from 'react-icons/di'
import { signIn} from "next-auth/react";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({
  currentUser,
}) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {currentUser ? (
            <img src={currentUser.image} />
          ) : (
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          )}
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        {currentUser ? (
          <>
            <li>
              <a href="/Profile" className="justify-between">
                Profile
                {/* <span className="badge">New</span> */}
              </a>
            </li>
            <li><a href="/Settings">Settings</a></li>
            <li><a >Logout</a></li></>) : (
          <>
            <li>
              {/* register modal */}
              {/* Open the modal using ID.showModal() method */}
              <a onClick={() => window.Register_Modal.showModal()}>Register</a>
              <dialog id="Register_Modal" className="modal flex h-screen justify-center items-center">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  <h3 className="font-bold text-lg">Welcome!</h3>
                  <div className="tooltip" data-tip="Login with GitHub">
                    <button className="btn btn-square btn-outline" onClick={() => signIn('github')}>
                      <DiGithubBadge size={24} />
                    </button>
                  </div>
                </form>
              </dialog>
            </li>
            <li><a>Login</a></li></>)}


      </ul>
    </div>
  )
}
export default UserMenu;