// TODO, with global variables

import colors from './colors';
import auth from './features/auth/light';
import menus from './features/menus/light';

export default {
  colors: colors.light,
  auth,
  menus,

  pages: {
    listsPages: {
      header: {
        bgColor: colors.light.lightGrey,
        borderColor: colors.lightGrey,
        textColor: colors.light.black,
      },
    },
  },

  buttons: {
    disabled: {
      borderColor: colors.light.darkGrey,
      bgColor: colors.lightGrey,
      textColor: colors.darkGrey,
    },
    cancelBtn: {
      bgColor: colors.light.black,
      textColor: colors.white,
    },
    saveBtn: {
      bgColor: colors.light.mainRed,
      textColor: colors.white,
    },
  },

  forms: {
    titleColor: colors.black,
    bgColor: colors.light.mainLight,
    inputs: {
      borderColor: colors.lightGrey,
      borderColorErr: colors.light.lightRed,
      borderErrorColor: colors.light.lightRed,
      borderFocusedColor: colors.light.blue,
      bgColor: colors.white,
      textColor: colors.black,
      errorTextColor: colors.light.lightRed,
      labelColor: colors.black,
    },
    checkboxes: {
      borderColor: colors.lightGrey,
      borderColorChecked: colors.light.green,
      bgColor: colors.white,
      bgColorChecked: colors.white,
      textColorChecked: colors.light.green,
    },
    actionsFooter: {
      bgColor: colors.light.lightGrey,
      borderTopColor: colors.lightGrey,
    },
    group: {
      title: {
        bgColor: colors.light.mainRed,
        textColor: colors.white,
      },
    },
    labelsWrapper: {
      bgColor: colors.light.lightGrey,
    },
  },

  header: {
    bgColor: colors.white,
    textColor: colors.black,
    dividerVertical: {
      bgColor: colors.light.darkGrey,
    },

    icon: {
      color: colors.black,
      width: '15px',
    },
  },

  tables: {
    header: {
      bgColor: colors.light.lightGrey,
      textColor: colors.light.black,
    },
    rows: {
      bgColor: colors.white,
      textColor: colors.light.black,
      borderColor: colors.lightGrey,
    },
  },

  dropDown: {
    borderColor: colors.light.lightGrey,
    bgColor: colors.white,
    textColor: colors.black,

    head: {
      hover: {
        textColor: colors.light.darkRed,
      },
    },

    body: {
      bgColor: colors.light.lightGrey,
      borderColor: 'rgba(206, 40, 40, 0.5);',
    },

    item: {
      hover: {
        bgColor: colors.light.lightGrey,
        textColor: colors.light.darkRed,
      },
    },
  },

  scroll: {
    bgColor: colors.light.darkGrey,
  },

  modal: {
    bgColor: colors.light.lightGrey,
    textColor: colors.light.darkRed,
    boxShadow: 'rgba(206, 40, 40, 0.5)',
  },

  loader: {
    bgColor: colors.darkGrey,
  },

  dimmer: {
    bgColor: colors.light.mainLight,
    tableBgColor: colors.light.darkGrey,
    contentBgColor: colors.light.mainDark,
  },
};
