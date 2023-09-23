import React from 'react'
import getcurrentuser from '@/app/actions/getcurrentuser';
export default function UserSettings() {
  const currentUser = getcurrentuser();
  return (
    <div className='flex w-full'>
      <ul className="menu bg-base-200 w-56  h-2/4 rounded-box">
        <li><a>Main Settings</a></li>
        <li><a>Customisation (Soon)</a></li>
       
      </ul>
    </div>
  )
}
