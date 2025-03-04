import SearchBar from "../Components/SearchBar";
import Loader from "../Components/Loader";

const Home = () => {
    return ( 
        <div className="home p-[10px]">
            <SearchBar />
            <Loader />
        </div>
     );
}
 
export default Home;