import { style } from "typestyle";

const styles = {
  icon: style({
    display: "grid",
    placeItems: "center",
    fontSize: "1rem",
    color: "#000",
    padding: "0.75rem",
  }),
  container: style({
    borderRadius: "50%",
    border: "1px solid #aaa",
    width: "fit-content",
    overflow: "hidden",
  })
};

export default styles;
