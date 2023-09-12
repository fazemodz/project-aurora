import React from 'react'
import getCurrentUser from '@/app/actions/getCurrentUser';
import UserProfileCard from '@/app/components/ProfilePage/userProfileCard';
export const Profile = () => {
    const currentUser = getCurrentUser();
    return (
        <>
        {/* @ts-ignore */}
        <UserProfileCard currentUser={currentUser}/>
        </>
    )
}
export default Profile