import React from 'react';
import SidePanelKeys from './constants/SidePanelKeys';
import FortranCompilePanelContainer from './FortranCompilePanelContainer.react';
import KindAnalysisPanelContainer from './KindAnalysisPanelContainer.react';

const {PropTypes, Component} = React;

const keyToModuleMap = new Map([
  [SidePanelKeys.FORTRAN_COMPILE_PANEL, FortranCompilePanelContainer],
  [SidePanelKeys.FORTRAN_COMPILE_PANEL, KindAnalysisPanelContainer],
]);

class SidePanel extends Component {
  render() {
    if (!this.props.activePanel) {
      return null;
    }

    const PanelContainer = keyToModuleMap.get(this.props.activePanel);

    return <PanelContainer />;
  }
}

export default SidePanel;
