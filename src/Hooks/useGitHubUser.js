import process from 'node:process';

const useGitHubUser = (setError, setUser, setLoading) => {
    const token = process.env.API_TOKEN;
    return (name) => {
        let dataArr = [null, null];
        if (!name) {
            setError("GitHub username is required!");
            setUser(false);
            setLoading(false);
            return;
        }

        fetch(`https://api.github.com/users/${name}`, {
            headers: {
                Authorization: `token ${token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                console.log(response);
                throw new Error(response.status);
            }
            return response;
        })
        .then(response => response.json())
        .then(data => {
            dataArr[0] = data;
            return fetch(data.repos_url, {
                headers: {
                    Authorization: `token ${token}`
                }
            });
        })
        .then(response => {
            if (!response.ok) {
                console.log(response);
                throw new Error(response.status);
            }
            return response;
        })
        .then(response => response.json())
        .then(data => {
            dataArr[1] = data;
            setLoading(false);
            setUser(dataArr);
            setError(false);})
        .catch(error => {
            console.error("Error fetching user data:", error);
            setLoading(false);
            setError((error.message === "404")? "User not found!": "An error occurred!");
            setUser(false);
        });
    };
};

export default useGitHubUser;
