import SearchBar from "../Components/SearchBar";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import UserCard from "../Components/UserCard";
import { useState } from "react";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState(null);

    return ( 
        <div className="home p-[10px] w-screen gap-[10px] flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white">GitHub User Search</h1>
            <SearchBar states={{setLoading, setError, setUser}}/>
            {loading? <Loader />: null}
            {error? <ErrorMessage message={error} />: null}
            {user? <UserCard user={user} /> : null}
        </div>
     );
}
 
export default Home;