import { Search } from "../Search";
import { UserContainer } from "../User/UserContainer";
import { useEffect, useState } from "react";

export const Body = () => {
  const API_BASE = "  https://api.github.com/users";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);

  const apiRequest = (username) => {
    const URL = `${API_BASE}/${username}`;
    const headers = new Headers({
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${API_KEY}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    });

    fetch(URL, headers)
      .then((response) => response.json())
      .then((data) => {
        let date;
        try {
          date = new Date(data.created_at);
          date = date.toLocaleDateString("en-GB");
        }
        catch {
          date = null
        }
        
        data.status === "404" ? setError(true) : setError(false);
        setUser(({...data, created_at: date}));
      })
      .catch(setUser([]));
  };

  const handleClick = (target) => {
    apiRequest(target);
  };

  return (
    <div className="flex flex-col gap-6 w-full md:h-[481px]">
      <section>
        <Search callbackFn={handleClick} error={error}/>
      </section>

      <section className="h-full">
        <UserContainer user={user} />
      </section>
    </div>
  );
};
