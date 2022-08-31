import sunnyImg from "../image/sunny.jpg";

const Sunny = () => {
  return (
    <div>
      <h2>Sunny Image</h2>
      <img
        style={{
          borderRadius: "15px",
          height: "250px",
          width: "300px",
          padding: "25px",
          margin: "20px",
        }}
        src={sunnyImg}
        alt=''
      />
    </div>
  );
};

export default Sunny;
