import "../content-tabs/content-tabs.css";

import { Radio } from "antd";

export default function ContentTabs() {
  return (
    <div className="content-tabs">
      <Radio.Group>
        <Radio.Button className="ant-radio-button" value={1}>
          самый дешевый
        </Radio.Button>
        <Radio.Button className="ant-radio-button" value={2}>
          самый быстрый
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}
