import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {ButtonExtension} from "./button";

/**
 * Initialization data for the mybutton extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'mybutton',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension mybutton is activated!');

    let buttonExtension = new ButtonExtension();
    app.docRegistry.addWidgetExtension('Notebook', buttonExtension);
  }
};

export default extension;
