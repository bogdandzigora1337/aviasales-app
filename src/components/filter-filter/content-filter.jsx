import { Checkbox } from "antd";

import "../filter-filter/content-filter.css";

export default function ContentFilter() {
  return (
    <div className="content-filter">
      <h1 className="filter-title">количество пересадок</h1>
      <div className="filter-list-checkbox">
        <Checkbox>Все</Checkbox>
        <Checkbox>Без пересадок</Checkbox>
        <Checkbox>1 пересадка</Checkbox>
        <Checkbox>2 пересадки</Checkbox>
        <Checkbox>3 пересадки</Checkbox>
      </div>
    </div>
  );
}
