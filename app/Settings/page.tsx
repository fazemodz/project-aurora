import React from 'react'
import getCurrentUser from '@/app/actions/getCurrentUser';
export default function UserSettings() {
  const currentUser = getCurrentUser();
  return (
    <div className='flex w-full'>
      <ul className="menu bg-base-200 w-56  h-screen rounded-box">
        <li><a>Main Settings</a></li>
        <li><a>Customisation (Soon)</a></li>
       
      </ul>
    </div>
  )
}
