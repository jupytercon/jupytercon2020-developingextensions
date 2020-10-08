from jupyter_server.base.handlers import JupyterHandler
import tornado

class TutorialHandler(JupyterHandler):
    @tornado.web.authenticated
    def get(self):
        self.write('HELLO WORLD')