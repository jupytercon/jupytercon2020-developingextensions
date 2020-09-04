# Jupyter notebooks

The content of JupyterCon tutorials should be completely reflected in written materials provided as Jupyter notebooks. 
Worked out examples should be fully narrated, and no code cells should be left unexplained. 

Use a **naming convention** where each notebook file starts with a number, reflecting the order of the lessons in the tutorial.

List all notebooks in this README.

Add any Python package dependencies to the requirements.txt in the parent directory.

Add a dockerfile if there are additional package dependencies (e.g. Jupyter extensions).

**Recommend** that all notebooks be shared under a dual license: [BSD-3](https://opensource.org/licenses/BSD-3-Clause) or [MIT](https://opensource.org/licenses/MIT) license for code, and [CC-BY](https://creativecommons.org/licenses/by/2.0/) license for text and media.

**Recommend** GitHub actions are added to test that dependencies install and notebooks can execute successful.
