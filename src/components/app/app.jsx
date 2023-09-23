import cl from "./app.module.scss";

import Header from "../header/header";
import Content from "../content/content";

export default function App() {
  return (
    <div className={cl["app"]}>
      <Header></Header>
      <Content></Content>
    </div>
  );
}
