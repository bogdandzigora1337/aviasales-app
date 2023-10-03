import cl from "./content-loader.module.scss";
import { Progress } from "antd";
import { useSelector } from "react-redux";

export const ContentLoader = () => {
  const colorsLoader = { "0%": "#f3f7fa", "100%": "#2196f3" };
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
          trailColor={"transparent"}
        />
      ) : null}
    </div>
  );
};
