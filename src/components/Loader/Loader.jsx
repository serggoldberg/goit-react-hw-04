import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <Hearts />
      <p>Please, wait a little, loading in process</p>
    </div>
  );
};

export default Loader;
