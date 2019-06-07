import React from "react";
import styled from "styled-components";
import { setToLocal } from "../services";

const SelectOption = styled.select`
  color: white;
  background: black;
  width: 50px;
  border: 1px solid white;
`;

export default function FavoriteTopic({ topic, history }) {
  const topics = [
    "entertainment",
    "general",
    "business",
    "health",
    "science",
    "sports",
    "technology"
  ];

  function handleDefaultTopic(event) {
    setToLocal("topic", event.target.value);
    history.replace("/");
  }

  return (
    <form>
      <label>
        Change default Topic:
        <SelectOption
          value={topic}
          onChange={event => {
            console.log(event);
            handleDefaultTopic(event);
          }}
        >
          {topics.map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </SelectOption>
      </label>
    </form>
  );
}
