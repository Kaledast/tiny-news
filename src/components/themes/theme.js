import theme from 'styled-theming';
import img_normal from '../../images/img5.jpg';
import img_sepia from '../../images/img8.jpg';
import loadingHorse from '../../images/LoadingHorseNormal.svg';
import loadingHorseSepia from '../../images/SepiaHorseGreen.svg';

export default {
  backgroundColor: '#2f1953',
  backgroundImage: `url('${img_normal}')`
};

export const paperGradient = theme('mode', {
  normal: 'linear-gradient(0deg, #d8d8d8, #e1dad3, white)',
  sepia: 'linear-gradient(0deg, #f9f7f1, #e1dad3, white)'
});

export const paperColor = theme('mode', {
  normal: '#d8d8d8',
  sepia: ' #f9f7f1'
});

export const loadingTitleColor = theme('mode', {
  normal: 'white',
  sepia: '#bff2c3'
});

export const backgroundColor = theme('mode', {
  normal: '#2f1953',
  sepia: '#222'
});

export const loadingIcon = theme('mode', {
  normal: `url('${loadingHorse}')`,
  sepia: `url('${loadingHorseSepia}')`
});

export const backgroundImage = theme('mode', {
  normal: `url('${img_normal}')`,
  sepia: `url('${img_sepia}')`
});

export const imageFilter = theme('mode', {
  normal: `sepia(80%) grayscale(1) contrast(1) opacity(0.8)`,
  sepia: `sepia(80%) contrast(1) opacity(0.8)`
});

export const ToggleBackground = theme('mode', {
  normal: `#2f1953`,
  sepia: `#bff2c3`
});

export const ToggleColor = theme('mode', {
  normal: `#FFF29A`,
  sepia: `#486C5F`
});
