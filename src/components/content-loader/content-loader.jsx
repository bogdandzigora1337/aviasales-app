import cl from "./content-loader.module.scss";
import { Progress } from "antd";
import { useSelector } from "react-redux";

export const ContentLoader = () => {
  const colorsLoader = { "0%": "#108ee9", "100%": "#87d068" };
  const percentLoad = useSelector(
    (reducer) => reducer.ticketsReducer.percentLoad
  );

  return (
    <div className={cl["loader"]}>
      {percentLoad !== 100 ? (
        <Progress
          percent={percentLoad}
          strokeColor={colorsLoader}
          showInfo={false}
        />
      ) : null}
    </div>
  );
};
