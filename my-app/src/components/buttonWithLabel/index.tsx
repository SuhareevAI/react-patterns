import { Button } from "../button";
import "./style.scss";
import {FC} from "react";
import {ButtonWithLabelProps} from "./types";

export const ButtonWithLabel : FC<ButtonWithLabelProps> = (props) => {
	const {label, ...restProps} = props;
	return (
		<div className="button-with-label">
			<p>{label}</p>
			<Button {...restProps}/>
		</div>
	);
};