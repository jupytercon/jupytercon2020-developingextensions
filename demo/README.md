# Customizing JupyterLab using extensions

[![Binder](http://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/ajbozarth/SciPy2020/master?urlpath=lab)

Adapted from (https://github.com/ajbozarth/SciPy2020)

## Creating a lab extension

Click on the Launch Binder link above to load JupyterLab.
Once your binder instance of JupyterLab has started, follow the steps below to learn how you can create and install a lab extension all from within JupyterLab.

1. From the launcher tab, open a Terminal and run the following command to create a lab extension from a cookiecutter.

    ```
    cookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts
    ```

    Fill out the prompts (for our walkthrough, the values do not matter) and then open the newly created directory in the file browser on the left.
    (Note: you may need to click the refresh icon for the new directory to display.)

1. In our newly created extension directory, we will want to make some simple code changes. By default, the new extension will only log to the browser console and we want it to do a little more than that.

    1. Edit `package.json` (to edit rather than view json files, right-click the file and select Open With > Editor) then add the following to the `dependencies` section:

        ```
        "@jupyterlab/apputils": "^2.0.0",
        "@jupyterlab/docregistry": "^2.0.0",
        "@jupyterlab/notebook": "^2.0.0",
        "@lumino/disposable":  "^1.3.5"
        ```

        You will need these for the imports in your `.ts` files.

    1. Edit `src/index.ts` and add the following import:

        ```
        import {ButtonExtension} from "./button";
        ```

        then add the following to the `activate` function:

        ```
        let buttonExtension = new ButtonExtension();
        app.docRegistry.addWidgetExtension('Notebook', buttonExtension);
        ```

        This will import and create an example button extension, then add it to the registry so it will be available when editing notebooks.

    1. Copy the `button.ts` file provided with this demo into the `src` directory. The file is located in the `examples` directory at the root of the file browser. To copy a file, just right-click on it and select Copy. To paste, either right-click the target directory, or if in the directory, right-click any whitespace in the file browser, and select Paste.

        Feel free to read through `button.ts`, each line of code has a short comment explaining its purpose.

1. Now we want to build our new extension. In the Terminal `cd` to your extension directory, then run the following to build and install your extension. The install steps are detailed further in the README for your extension.

    ```
    jlpm
    jlpm build
    jupyter labextension install .
    ```

1. Once the build finishes refresh your browser so JuyterLab can catch the rebuilt files. Now create a new Notebook from the Launcher and you'll see your button in the toolbar, try clicking it.

## Resources

* JupyterLab typescript extension cookiecutter repo: https://github.com/jupyterlab/extension-cookiecutter-ts
