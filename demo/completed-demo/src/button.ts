/*
 * Copyright 2018-2020 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ToolbarButton } from "@jupyterlab/apputils";
import { URLExt } from '@jupyterlab/coreutils';
import { DocumentRegistry } from "@jupyterlab/docregistry";
import { INotebookModel, NotebookPanel } from "@jupyterlab/notebook";
import { ServerConnection } from '@jupyterlab/services';
import { IDisposable } from "@lumino/disposable";

import { NotebookParser } from "./parsing";

export class ButtonExtension implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel> {

  onClick(panel: NotebookPanel): void {
      let notebookStr = panel.content.model.toString();

      let envVars = NotebookParser.getEnvVars(notebookStr);

      let alertStr = 'Found the following env vars:\n' + envVars.join('\n');

      alert(alertStr);
  }

  async makeServerRequest(): Promise<void> {
    let settings = ServerConnection.makeSettings({});
    let serverResponse = await ServerConnection.makeRequest(
      URLExt.join(settings.baseUrl, '/mybutton/hello'), { method: 'GET' }, settings);
    alert (await serverResponse.text());
  }

  createNew(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): IDisposable {
    // Create the toolbar button
    let mybutton = new ToolbarButton({
        label: 'Find Env Vars',
        onClick: () => this.makeServerRequest()
    });

    // Add the toolbar button to the notebook toolbar
    panel.toolbar.insertItem(10, 'mybutton', mybutton);

    // The ToolbarButton class implements `IDisposable`, so the
    // button *is* the extension for the purposes of this method.
    return mybutton;
  }
}
