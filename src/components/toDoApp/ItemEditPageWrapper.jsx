import React from "react";
import { useParams } from "react-router-dom";
import ItemEditPage from "./ItemEditPage";

export default function ItemEditPageWrapper() {
  const { id } = useParams();

  return (<ItemEditPage id={id}></ItemEditPage>)
}