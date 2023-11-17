import thank from "./images/illustration-thank-you.svg";
const Result = (props) => {
  return (
    <div className="result-container">
      <img src={thank} alt="thank-icon" />
      <div className="point-result">
        <p style={styles.rsPoint}>You selected {props.point} out of 5</p>
      </div>
      <h1 style={styles.title}>{props.title}</h1>
      <p style={styles.desc}>{props.description}</p>
    </div>
  );
};
export default Result;

const styles = {
  title: {
    color: "#FFF",
    fontWeight: 700,
    fontSize: "24px",
    textAlign: "center",
    marginTop: "24px",
  },
  desc: {
    color: "#969FAD",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
    textAlign: "center",
    marginTop: "10px",
  },
  rsPoint: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px ",
  },
};
