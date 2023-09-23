import { Checkbox } from "antd";

import cl from "./content-filter.module.scss";

export default function ContentFilter() {
  return (
    <div className={cl["content-filter"]}>
      <h1 className={cl["content-filter__title"]}>количество пересадок</h1>
      <div className={cl["content-filter__list-checkbox"]}>
        <Checkbox className={cl["content-filter__checkbox"]}>Все</Checkbox>
        <Checkbox className={cl["content-filter__checkbox"]}>
          Без пересадок
        </Checkbox>
        <Checkbox className={cl["content-filter__checkbox"]}>
          1 пересадка
        </Checkbox>
        <Checkbox className={cl["content-filter__checkbox"]}>
          2 пересадки
        </Checkbox>
        <Checkbox className={cl["content-filter__checkbox"]}>
          3 пересадки
        </Checkbox>
      </div>
    </div>
  );
}
