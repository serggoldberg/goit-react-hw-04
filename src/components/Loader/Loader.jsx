import { Hearts } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <Hearts
        height="80"
        width="80"
        color="#ffc0cb"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p>Please, wait a little, loading in process</p>
    </div>
  );
};

export default Loader;
