import foggyImg from "../image/foggy.jpg";

const Foggy = () => {
  return (
    <div>
      <h2>Foggy Image</h2>
      <img
        style={{
          borderRadius: "15px",
          height: "250px",
          width: "300px",
          padding: "25px",
          margin: "20px",
        }}
        src={foggyImg}
        alt='foggyImage'
        sizes=''
        srcset=''
      />
    </div>
  );
};

export default Foggy;
