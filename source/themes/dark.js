// TODO, with global variables

import colors from './colors';
import auth from './features/auth/dark';
import menus from './features/menus/dark';

export default {
  colors: colors.dark,
  auth,
  menus,

  pages: {
    listsPages: {
      header: {
        bgColor: colors.dark.mainDark,
        borderColor: colors.dark.mainDark,
        textColor: colors.dark.mainLight,
      },
    },
  },

  buttons: {
    disabled: {
      borderColor: colors.dark.darkGrey,
      bgColor: colors.lightGrey,
      textColor: colors.darkGrey,
    },
    cancelBtn: {
      bgColor: colors.dark.lightGrey,
      textColor: colors.dark.mainDark,
    },
    saveBtn: {
      bgColor: colors.dark.mainRed,
      textColor: colors.white,
    },
  },

  forms: {
    titleColor: colors.black,
    bgColor: colors.dark.darkGrey,
    inputs: {
      // the two below colors are general for all inputs
      borderColor: colors.dark.lightBlack,
      borderColorErr: colors.red,
      borderFocusedColor: colors.dark.blue,
      bgColor: colors.dark.lightGrey,
      textColor: colors.black,
      errorTextColor: colors.dark.red,
      labelColor: colors.white,
    },
    readOnlyColor: colors.dark.mainDark,
    checkboxes: {
      borderColor: colors.dark.lightBlack,
      borderColorChecked: colors.dark.lightBlack,
      bgColor: colors.dark.darkGrey,
      bgColorChecked: colors.dark.green,
      textColorChecked: colors.dark.lightBlack,
    },
    actionsFooter: {
      bgColor: colors.dark.mainDark,
      borderTopColor: colors.dark.darkGrey,
    },
    group: {
      title: {
        bgColor: colors.dark.mainRed,
        textColor: colors.white,
      },
    },
    labelsWrapper: {
      bgColor: colors.dark.mainDark,
    },
  },

  tables: {
    header: {
      bgColor: colors.dark.mainDark,
      textColor: colors.dark.mainLight,
    },
    rows: {
      bgColor: colors.dark.darkGrey,
      textColor: colors.dark.mainDark,
      borderColor: colors.dark.lightBlack,
    },
  },

  header: {
    bgColor: colors.dark.lightBlack,
    textColor: colors.black,
    dividerVertical: {
      bgColor: colors.dark.darkGrey,
    },

    icon: {
      color: colors.white,
      width: '15px',
    },
  },

  dropDown: {
    borderColor: colors.dark.mainLight,
    bgColor: colors.white,
    textColor: colors.white,

    head: {
      textColor: colors.white,

      hover: {
        textColor: colors.white,
      },
    },

    body: {
      bgColor: colors.dark.mainLight,
      borderColor: 'rgba(206, 40, 40, 0.5);',
    },

    item: {
      hover: {
        bgColor: colors.dark.mainLight,
        textColor: colors.dark.red,
      },
    },
  },

  scroll: {
    bgColor: colors.dark.lightBlack,
  },

  modal: {
    bgColor: colors.dark.darkGrey,
    textColor: colors.dark.red,
    boxShadow: 'rgba(206, 40, 40, 0.5)',
  },

  loader: {
    bgColor: colors.dark.mainRed,
  },

  dimmer: {
    bgColor: colors.dark.mainLight,
    tableBgColor: colors.dark.darkGrey,
    contentBgColor: colors.dark.lightBlack,
  },
};
