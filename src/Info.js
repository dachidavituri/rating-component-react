import star from "./images/icon-star.svg";
const Info = (props) => {
  return (
    <div>
      <div style={styles.circle}>
        <img src={star} alt="star" />
      </div>
      <h1 style={styles.heading} className="heading">
        {props.heading}
      </h1>
      <p style={styles.description} className="desc">
        {props.description}
      </p>
    </div>
  );
};
export default Info;
const styles = {
  circle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#262e38",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#FFF",
    fontWeight: 700,
    marginTop: "16px",
  },
  description: {
    color: "#969FAD",
    fontWeight: 400,
    lineHeihgt: "22px",
    marginTop: "10px",
  },
};
