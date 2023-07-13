import React from 'react'
import getCurrentUser from '@/app/actions/getCurrentUser';
export default function UserSettings() {
  const currentUser = getCurrentUser();
  return (
    <div className='flex w-full'>
      <ul className="menu bg-base-200 w-56  h-screen rounded-box">
        <li><a>Item 1</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul>
              <li><a>level 2 item 1</a></li>
              <li><a>level 2 item 2</a></li>
              <li>
                <details >
                  <summary>Parent</summary>
                  <ul>
                    <li><a>level 3 item 1</a></li>
                    <li><a>level 3 item 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  )
}