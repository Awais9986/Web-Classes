import { useEffect, useState } from "react";

 function useGithubProfileData() {
    const [apiData, setApiData] = useState(null);

    

    useEffect(() => {
      fetch("https://api.github.com/users/saif72437").then((response) => {
        response.json().then((data) => {
          setApiData(data);
        });
      });
    }, []);a

    return apiData
  }

  export default useGithubProfileData