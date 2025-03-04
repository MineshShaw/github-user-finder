const useGitHubUser = (setError, setUser, setLoading) => {
    const token = "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";

    return (name) => {
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
            setLoading(false);
            setUser(data);
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
