import cl from "./content-tabs.module.scss";
import "./content-tabs__antd.scss";

import { Radio } from "antd";

export default function ContentTabs() {
  return (
    <div className={cl["content__tabs"]}>
      <Radio.Group className={`${cl["content__tabs__radio-group"]}`}>
        <Radio.Button
          className={cl["content__tabs__button"]}
          value={"cheapest"}
        >
          самый дешевый
        </Radio.Button>
        <Radio.Button className={cl["content__tabs__button"]} value={"fastest"}>
          самый быстрый
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}
