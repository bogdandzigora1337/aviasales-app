import cl from "./content-button.module.scss";

import { Button } from "antd";

export default function ContentButton() {
  return (
    <Button type="primary" block className={cl["content__button"]}>
      Показать еще 5 билетов!
    </Button>
  );
}
