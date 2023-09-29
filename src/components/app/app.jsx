import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import cl from "./app.module.scss";

import Header from "../header/header";
import Content from "../content/content";
import { getUserId } from "../../redux/actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserId());
  }, [dispatch]);

  return (
    <div className={cl["app"]}>
      <Header></Header>
      <Content></Content>
    </div>
  );
}
