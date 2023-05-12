import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Elena Vasevska",
      image:
        "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
