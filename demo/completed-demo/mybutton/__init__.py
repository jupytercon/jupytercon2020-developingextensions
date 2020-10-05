from .handlers import TutorialHandler

def _jupyter_server_extension_paths():
    return [{
        'module': 'mybutton'
    }]

def load_jupyter_server_extension(server_app):
    handlers = [('/mybutton/hello', TutorialHandler)]
    server_app.web_app.add_handlers('.*$', handlers)