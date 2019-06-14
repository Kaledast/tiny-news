import theme from "styled-theming";
import img_normal from "../../news/images/img5.jpg";
import img_sepia from "../../news/images/img8.jpg";
import loadingHorse from "../../news/images/LoadingHorseNormal.svg";
import loadingHorseSepia from "../../news/images/SepiaHorseGreen.svg";

import leftRadioYellowUnfilled from "../../news/images/20YellowUnfilled.svg";
import middleRadioYellowUnfilled from "../../news/images/50YellowUnfilled.svg";
import rightRadioYellowUnfilled from "../../news/images/100YellowUnfilled.svg";

import leftRadioYellowFilled from "../../news/images/20YellowFilled.svg";
import middleRadioYellowFilled from "../../news/images/50YellowFilled.svg";
import rightRadioYellowFilled from "../../news/images/100YellowFilled.svg";

import leftRadioFilled from "../../news/images/20filled.svg";
import middleRadioFilled from "../../news/images/50filled.svg";
import rightRadioFilled from "../../news/images/100filled.svg";

import leftRadioUnfilled from "../../news/images/20unfilled.svg";
import middleRadioUnfilled from "../../news/images/50unfilled.svg";
import rightRadioUnfilled from "../../news/images/100unfilled.svg";

export default {
  backgroundColor: "#2f1953",
  backgroundImage: `url('${img_normal}')`
};

export const paperGradient = theme("mode", {
  normal: "linear-gradient(0deg, #d8d8d8, #e1dad3, white)",
  sepia: "linear-gradient(0deg, #f9f7f1, #e1dad3, white)"
});

export const loadingTitleColor = theme("mode", {
  normal: "white",
  sepia: "#bff2c3"
});

export const backgroundColor = theme("mode", {
  normal: "#2f1953",
  sepia: "#222"
});

export const loadingIcon = theme("mode", {
  normal: `url('${loadingHorse}')`,
  sepia: `url('${loadingHorseSepia}')`
});

export const backgroundImage = theme("mode", {
  normal: `url('${img_normal}')`,
  sepia: `url('${img_sepia}')`
});

export const imageFilter = theme("mode", {
  normal: `sepia(80%) grayscale(1) contrast(1) opacity(0.8)`,
  sepia: `sepia(80%) contrast(1) opacity(0.8)`
});

/*
export const radioLeftUnfilled = theme("mode", {
  normal: `url(${leftRadioYellowUnfilled})`,
  sepia: `url(${leftRadioUnfilled})`
});

export const radioLeftFilled = theme("mode", {
  normal: `url(${leftRadioYellowFilled})`,
  sepia: `url(${leftRadioFilled})`
});

export const radioLeftUnFilled = theme("mode", {
  normal: `url(${leftRadioYellowUnfilled})`,
  sepia: `url(${leftRadioUnfilled})`
});

export const radioMiddleUnFilled = theme("mode", {
  normal: `url(${middleRadioYellowUnfilled})`,
  sepia: `url(${middleRadioUnfilled})`
});

export const radioMiddleFilled = theme("mode", {
  normal: `url(${middleRadioYellowFilled})`,
  sepia: `url(${middleRadioFilled})`
});

export const radioRightUnFilled = theme("mode", {
  normal: `url(${rightRadioYellowUnfilled})`,
  sepia: `url(${rightRadioUnfilled})`
});

export const radioRightFilled = theme("mode", {
  normal: `url(${rightRadioYellowFilled})`,
  sepia: `url(${rightRadioFilled})`
});
*/

export const themedRadioButtons = theme("mode", {
  normal: `[
    {
      id: "20",
      val: 20,
      img: url(${leftRadioYellowUnfilled}),
      imgfilled:url(${leftRadioFilled})
    },
    {
      id: "50",
      val: 50,
      img: url(${middleRadioYellowUnfilled}),
      imgfilled: url(${middleRadioYellowFilled})
    },
    {
      id: "100",
      val: 100,
      img: url(${rightRadioYellowUnfilled}),
      imgfilled: url(${rightRadioYellowFilled})
    }
  ];`,

  sepia: `[
    {
      id: "20",
      val: 20,
      img: url(${leftRadioUnfilled}),
      imgfilled:url(${leftRadioFilled})
    },
    {
      id: "50",
      val: 50,
      img: url(${middleRadioUnfilled}),
      imgfilled: url(${middleRadioFilled})
    },
    {
      id: "100",
      val: 100,
      img: url(${rightRadioUnfilled}),
      imgfilled: url(${rightRadioFilled})
    }
  ]`
});
