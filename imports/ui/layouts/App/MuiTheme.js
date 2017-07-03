import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  red500,
  blue500, blue700,
  pinkA200,
  green500,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';


export default MuiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blue500,
    primary2Color: red500,
    primary3Color: grey400,
    accent1Color: grey100,
    accent2Color: grey300,
    accent3Color: grey500,
    successColor: green500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blue500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  appBar: {
    height: 65,
  },
  avatar: {
    color: grey500,
    backgroundColor: white,
  },
  drawer: {
    width: spacing.desktopKeylineIncrement * 4,
  },
});
