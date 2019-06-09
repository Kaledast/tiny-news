import React from "react";
import Button from "../components/compButtons.js";
import { Link } from "react-router-dom";

export default function Buttons({ topic, onSelect }) {
  return (
    <Link to={`/news/${topic.id}`} onClick={() => onSelect(topic.id)}>
      <Button buttonIcon={topic.img} />
    </Link>
  );
}
