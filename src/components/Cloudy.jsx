import cloudy from "../image/cloud.jpg";

const Cloudy = () => {
  return (
    <div>
      <h2>Cloudy Image </h2>
      <img
        style={{
          borderRadius: "15px",
          height: "250px",
          width: "300px",
          padding: "25px",
          margin: "20px",
        }}
        src={cloudy}
        alt='cloudy-img'
      />
    </div>
  );
};

export default Cloudy;
