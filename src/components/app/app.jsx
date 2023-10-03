import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserId } from "../../redux/actions";

import cl from "./app.module.scss";

import Header from "../header/header";
import Content from "../content/content";
import { ContentLoader } from "../content-loader/content-loader";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserId());
  }, [dispatch]);

  return (
    <div className={cl["app"]}>
      <ContentLoader />
      <Header />
      <Content />
    </div>
  );
}
