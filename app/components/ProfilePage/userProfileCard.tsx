import { SafeUser } from "@/app/types";
interface UserProfileCardProps {
    currentUser?: SafeUser | null;
}
const UserProfileCard: React.FC<UserProfileCardProps> = ({
    currentUser,
}) => {
    return (
        <div className="hero min-h-12 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={currentUser?.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}
export default UserProfileCard;