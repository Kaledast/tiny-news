import theme from "styled-theming";
import img_normal from "../../news/images/img3.jpg";
import img_sepia from "../../news/images/img5.jpg";

export default {
  backgroundColor: "#2f1953",
  backgroundImage: `url('${img_normal}')`
};

export const backgroundColor = theme("mode", {
  normal: "#2f1953",
  sepia: "#222"
});
export const backgroundImage = theme("mode", {
  normal: `url('${img_normal}')`,
  sepia: `url('${img_sepia}')`
});

export const imageFilter = theme("mode", {
  normal: `sepia(80%) grayscale(1) contrast(1) opacity(0.8)`,
  sepia: `sepia(80%) contrast(1) opacity(0.8)`
});
