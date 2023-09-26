'use client'
import React from 'react'
import getCurrentUser from '../actions/getCurrentUser';
import {Listbox, ListboxItem, ListboxSection, cn} from "@nextui-org/react";
import ListboxWrapper from './ListboxWrapper';
export default function UserSettings() {
  const currentUser = getCurrentUser();
  return (
    <div className='pl-[20px] pt-[20px]'>
    <ListboxWrapper>
    <Listbox variant="flat" aria-label="Listbox menu with sections">
      <ListboxSection title="Actions" showDivider>  
        <ListboxItem
          key="new"
          description="Create a new file"
        
        >
          New file
        </ListboxItem>
        <ListboxItem
          key="copy"
          description="Copy the file link"
         
        >
          Copy link
        </ListboxItem>
        <ListboxItem
          key="edit"
          description="Allows you to edit the file"
          
        >
          Edit file
        </ListboxItem>
      </ListboxSection> 
      <ListboxSection title="Danger zone">  
        <ListboxItem
          key="delete"
          className="text-danger"
          color="danger"
          description="Permanently delete the file"
          
        >
          Delete file
        </ListboxItem>
      </ListboxSection> 
    </Listbox>
  </ListboxWrapper>
  </div>
  )
}
