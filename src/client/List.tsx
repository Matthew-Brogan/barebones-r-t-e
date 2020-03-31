import React from "react";
import { Link } from "react-router-dom";

const List: React.SFC<IListProps> = props => {
  const names = ["Ben", "Mae", "Will", "Sim", "Tempi"];

  return (
    <ul className="list-group">
      {names.map(name => {
        return (
          <li key={`${name}?`} className="list-group-item">
            <Link to={`/${name}`}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

interface IListProps {}

export default List;
