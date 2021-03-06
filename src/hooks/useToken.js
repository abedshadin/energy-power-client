import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;

    const currentUser = { email: email };
    if (email) {
      fetch(`https://nameless-reef-38172.herokuapp.com/user/${email}`, {
        method: "PUT",
        body: JSON.stringify(currentUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {});
    }
  }, [user]);
  return [token];
};

export default useToken;
