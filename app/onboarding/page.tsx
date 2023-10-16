import Useronboarding from "../components/onboarding/Useronboarding"
import getCurrentUser from '@/app/actions/getCurrentUser';
export default async function UseronboardingPage() {
    const currentUser = await getCurrentUser();
   return (
        <>
        <Useronboarding currentUser={currentUser}/>
        </>
   )
}
