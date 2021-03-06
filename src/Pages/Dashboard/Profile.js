import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const email = user.email;
    fetch(`https://nameless-reef-38172.herokuapp.com/profile/${email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-center text-2xl text-white" colSpan={2}>
                User Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{user.displayName}</td>
            </tr>

            <tr className="active">
              <td>Email</td>
              <td>{user.email}</td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>{profile.phone ? profile.phone : "Not Updated"}</td>
            </tr>
            <tr className="active">
              <td>Education</td>
              <td>{profile.education ? profile.education : "Not Updated"}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{profile.location ? profile.location : "Not Updated"}</td>
            </tr>
            <tr className="active">
              <td>Facebook</td>

              <td>
                {profile.fb ? (
                  <a className="link text-blue-500" href={profile.fb}>
                    {profile.fb}
                  </a>
                ) : (
                  "Not Updated"
                )}
              </td>
            </tr>
            <tr>
              <td>Linkedin</td>
              <td>
                {profile.fb ? (
                  <a className="link text-blue-500" href={profile.linkedin}>
                    {profile.linkedin}
                  </a>
                ) : (
                  "Not Updated"
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-2">
          <Link className="text-center btn btn-primary" to="/dashboard/update">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
