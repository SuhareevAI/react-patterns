import { FC } from "react";
import "./style.scss";
import { UserProps } from "./types";
import { CardInfo } from "./parts/cardInfo";

export const MemberCard: FC<UserProps> = (props) => {
  const {name, ...restProps} = props;
  return (
    <div className="member-card">
      <p className="title">{name}</p>
      <CardInfo {...restProps}/>
    </div>
  );
};