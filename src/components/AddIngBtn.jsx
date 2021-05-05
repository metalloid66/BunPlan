import React from "react";
import { GrAdd } from "react-icons/gr";

export default function AddIngBtn(props) {
  return <GrAdd onClick={props.addIng} />;
}
