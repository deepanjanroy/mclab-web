/* ActionTypes */

/* TODO: implement keyMirrorRecursive */

import keyMirror from 'keymirror'
// We need keyMirrorRecursive

export default {
  FILE_EXPLORER: {
    'DATA_LOADED': 'FILE_EXPLORER.DATA_LOADED',
    'SELECT_FILE': 'FILE_EXPLORER.SELECT_FILE',
    'OPEN_SELECTION_MODE': 'FILE_EXPLORER.OPEN_SELECTION_MODE',
    'CLOSE_SELECTION_MODE': 'FILE_EXPLORER.CLOSE_SELECTION_MODE',
    'CONFIRM_SELECTION': 'FILE_EXPLORER.CONFIRM_SELECTION',
  },
  FILE_CONTENT: {
    'DATA_LOADED': 'FILE_CONTENT.DATA_LOADED',
  },
  TERMINAL: {
    'ADD_NEW_LINE': 'TERMINAL.ADD_NEW_LINE',
  },
  SIDE_PANEL: {
    'CLOSE_PANEL': 'SIDE_PANEL.CLOSE_PANEL',
  },
  FORTRAN_COMPILE_PANEL: {
    OPEN_PANEL: 'FORTRAN_COMPILE_PANEL.OPEN_PANEL',
    ADD_ARGUMENT: 'FORTRAN_COMPILE_PANEL.ADD_ARGUMENT',
    DELETE_ARGUMENT: 'FORTRAN_COMPILE_PANEL.DELETE_ARGUMENT',
    EDIT_ARGUMENT: 'FORTRAN_COMPILE_PANEL.EDIT_ARGUMENT',
    CONFIRM_MAIN_FILE: 'FORTRAN_COMPILE_PANEL.CONFIRM_MAIN_FILE',
    OPEN_MAIN_FILE_SELECTION_MODE: 'FORTRAN_COMPILE_PANEL.OPEN_MAIN_FILE_SELECTION_MODE',
    CLOSE_MAIN_FILE_SELECTION_MODE: 'FORTRAN_COMPILE_PANEL.CLOSE_MAIN_FILE_SELECTION_MODE',
  },
  EDITOR: {
    SET_MARKERS: 'EDITOR.SET_MARKERS',
    MARKER_VISIBILITY: {
      TURN_ON: 'EDITOR.MARKER_VISIBILITY.TURN_ON',
      TURN_OFF: 'EDITOR.MARKER_VISIBILITY.TURN_OFF',
    }
  },
  KIND_ANALYSIS: {
    'DATA_LOADED': 'KIND_ANALYSIS.DATA_LOADED',
  },
  KIND_ANALYSIS_PANEL: {
    'OPEN_PANEL': 'KIND_ANALYSIS_PANEL.OPEN_PANEL',
  }

}
