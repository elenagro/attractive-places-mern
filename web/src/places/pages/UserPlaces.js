import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_ARRAY = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most fameous sky scrapers in the world.",
    imageURL: "https://media.timeout.com/images/101705309/image.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most fameous sky scrapers in the world.",
    imageURL: "https://media.timeout.com/images/101705309/image.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_ARRAY.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
