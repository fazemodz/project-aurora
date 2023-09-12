import React from 'react'
import getCurrentUser from '@/app/actions/getCurrentUser';
import UserProfileCard from '@/app/components/ProfilePage/userProfileCard';
export default async function Profile(){
    const currentUser = await getCurrentUser();
    return (
        <>
        {/* @ts-ignore */}
        <UserProfileCard currentUser={currentUser}/>
        
        </>
    )
}
