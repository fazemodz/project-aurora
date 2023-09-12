import React from 'react'
import { SafeUser } from "@/app/types";
interface UseronboardingProps {
    currentUser?: SafeUser | null;
}
const Useronboarding: React.FC<UseronboardingProps> = ({
    currentUser,
}) => {
    return (
        <div>Useronboarding</div>
    )
}
export default Useronboarding;