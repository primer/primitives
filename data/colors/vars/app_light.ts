import {alpha, get} from '../../../src/utils-v1'

// Variables to be moved to github/github

export default {
  canvasDefaultTransparent: alpha(get('canvas.default'), 0),
  pageHeaderBg: get('canvas.subtle'),
  marketingIcon: {
    primary: get('scale.blue.4'),
    secondary: get('scale.blue.3')
  },
  diffBlob: {
    addition: {
      numText: get('fg.default'),
      fg: get('fg.default'),
      numBg: '#ccffd8',
      lineBg: '#e6ffec',
      wordBg: '#abf2bc'
    },
    deletion: {
      numText: get('fg.default'),
      fg: get('fg.default'),
      numBg: '#ffd7d5',
      lineBg: get('danger.subtle'),
      wordBg: get('danger.muted')
    },
    hunk: {
      numBg: get('accent.muted')
    },
    expander: {
      icon: get('fg.muted')
    },
    selectedLineHighlightMixBlendMode: 'multiply'
  },
  diffstat: {
    deletionBorder: get('border.subtle'),
    additionBorder: get('border.subtle')
  },
  searchKeyword: {
    hl: get('scale.yellow.0')
  },
  prettylights: {
    syntax: {
      comment: get('scale.gray.5'),
      constant: get('scale.blue.6'),
      entity: get('scale.purple.6'),
      storageModifierImport: get('scale.gray.9'),
      entityTag: get('scale.green.6'),
      keyword: get('scale.red.5'),
      string: get('scale.blue.8'),
      variable: get('scale.orange.6'),
      brackethighlighterUnmatched: get('scale.red.7'),
      invalidIllegalText: get('scale.gray.0'),
      invalidIllegalBg: get('scale.red.7'),
      carriageReturnText: get('scale.gray.0'),
      carriageReturnBg: get('scale.red.5'),
      stringRegexp: get('scale.green.6'),
      markupList: get('scale.yellow.9'),
      markupHeading: get('scale.blue.6'),
      markupItalic: get('scale.gray.9'),
      markupBold: get('scale.gray.9'),
      markupDeletedText: get('scale.red.7'),
      markupDeletedBg: get('scale.red.0'),
      markupInsertedText: get('scale.green.6'),
      markupInsertedBg: get('scale.green.0'),
      markupChangedText: get('scale.orange.6'),
      markupChangedBg: get('scale.orange.1'),
      markupIgnoredText: get('scale.gray.1'),
      markupIgnoredBg: get('scale.blue.6'),
      metaDiffRange: get('scale.purple.5'),
      brackethighlighterAngle: get('scale.gray.6'),
      sublimelinterGutterMark: get('scale.gray.4'),
      constantOtherReferenceLink: get('scale.blue.8')
    }
  },
  codemirror: {
    text: get('fg.default'),
    bg: get('canvas.default'),
    guttersBg: get('canvas.default'),
    guttermarkerText: get('canvas.default'),
    guttermarkerSubtleText: get('fg.subtle'),
    linenumberText: get('fg.muted'),
    cursor: get('fg.default'),
    selectionBg: get('accent.muted'),
    activelineBg: get('neutral.subtle'),
    matchingbracketText: get('fg.default'),
    linesBg: get('canvas.default'),
    syntax: {
      comment: get('scale.gray.9'),
      constant: get('scale.blue.6'),
      entity: get('scale.purple.5'),
      keyword: get('scale.red.5'),
      storage: get('scale.red.5'),
      string: get('scale.blue.8'),
      support: get('scale.blue.6'),
      variable: get('scale.orange.6')
    }
  },
  checks: {
    bg: get('scale.gray.9'),
    runBorderWidth: '0px',
    containerBorderWidth: '0px',
    textPrimary: get('scale.gray.0'),
    textSecondary: get('scale.gray.4'),
    textLink: get('scale.blue.3'),
    btnIcon: get('scale.gray.3'),
    btnHoverIcon: get('scale.gray.0'),
    btnHoverBg: 'rgba(255,255,255,0.125)',
    inputText: get('scale.gray.1'),
    inputPlaceholderText: get('scale.gray.4'),
    inputFocusText: get('scale.gray.4'),
    inputBg: get('scale.gray.8'),
    inputShadow: 'none',
    donutError: get('scale.red.4'),
    donutPending: get('scale.yellow.4'),
    donutSuccess: get('success.emphasis'),
    donutNeutral: get('scale.gray.3'),
    dropdownText: get('scale.gray.3'),
    dropdownBg: get('scale.gray.8'),
    dropdownBorder: get('scale.gray.7'),
    dropdownShadow: alpha(get('scale.black'), 0.3),
    dropdownHoverText: get('scale.gray.0'),
    dropdownHoverBg: get('scale.gray.7'),
    dropdownBtnHoverText: get('scale.gray.0'),
    dropdownBtnHoverBg: get('scale.gray.8'),
    scrollbarThumbBg: get('scale.gray.6'),
    headerLabelText: get('scale.gray.2'),
    headerLabelOpenText: get('scale.gray.0'),
    headerBorder: get('scale.gray.8'),
    headerIcon: get('scale.gray.4'),
    lineText: get('scale.gray.2'),
    lineNumText: alpha(get('scale.gray.4'), 0.75),
    lineTimestampText: get('scale.gray.4'),
    lineHoverBg: get('scale.gray.8'),
    lineSelectedBg: alpha(get('scale.blue.4'), 0.15),
    lineSelectedNumText: get('scale.blue.3'),
    lineDtFmText: get('scale.gray.9'),
    lineDtFmBg: get('scale.yellow.5'),
    gateBg: alpha(get('scale.yellow.6'), 0.15),
    gateText: get('scale.gray.2'),
    gateWaitingText: get('scale.yellow.3'),
    stepHeaderOpenBg: get('scale.gray.8'),
    stepErrorText: get('scale.red.3'),
    stepWarningText: get('scale.yellow.3'),
    loglineText: get('scale.gray.4'),
    loglineNumText: alpha(get('scale.gray.4'), 0.75),
    loglineDebugText: get('scale.purple.3'),
    loglineErrorText: get('scale.gray.2'),
    loglineErrorNumText: get('scale.red.3'),
    loglineErrorBg: alpha(get('scale.red.6'), 0.15),
    loglineWarningText: get('scale.gray.2'),
    loglineWarningNumText: get('scale.yellow.3'),
    loglineWarningBg: alpha(get('scale.yellow.6'), 0.15),
    loglineCommandText: get('scale.blue.3'),
    loglineSectionText: get('scale.green.3'),
    ansi: {
      black: get('scale.gray.9'),
      blackBright: get('scale.gray.8'),
      white: get('scale.gray.2'),
      whiteBright: get('scale.gray.2'),
      gray: get('scale.gray.4'),
      red: get('scale.red.3'),
      redBright: get('scale.red.2'),
      green: get('scale.green.3'),
      greenBright: get('scale.green.2'),
      yellow: get('scale.yellow.3'),
      yellowBright: get('scale.yellow.2'),
      blue: get('scale.blue.3'),
      blueBright: get('scale.blue.2'),
      magenta: get('scale.purple.3'),
      magentaBright: get('scale.purple.2'),
      cyan: '#76e3ea',
      cyanBright: '#b3f0ff'
    }
  },
  project: {
    headerBg: get('scale.gray.9'),
    sidebarBg: get('scale.white'),
    gradientIn: get('scale.white'),
    gradientOut: alpha(get('scale.white'), 0)
  }
}
