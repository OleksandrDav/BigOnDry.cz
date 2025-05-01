import React from "react";
import styles from "./ThermoModification.module.css";
import ThermoModifyArticle from "../../../components/ThemoModifyArticle/ThermoModifyArticle";

interface ThermoModificationProps {}

const ThermoModification: React.FC<ThermoModificationProps> = ({}) => {
  

  return (
    <div>
      <ThermoModifyArticle />
    </div>
  );
};

export default ThermoModification;
