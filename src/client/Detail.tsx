import React from "react";
import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

const Detail: React.SFC<IDetailProps> = props => {
  const [name, setName] = useState(props.match.params.name);

  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <section>
      <h1>{name}</h1>
      <div className="form-group">
        <label htmlFor="name">Update Name</label>
        <input
          type="text"
          className="form-control"
          defaultValue={name}
          onChange={getName}
        />
      </div>
    </section>
  );
};

interface IDetailProps extends RouteComponentProps<{ name: string }> {}

export default Detail;
