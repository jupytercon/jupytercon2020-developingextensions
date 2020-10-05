from jupyter_server.base.handlers import JupyterHandler
import tornado

class TutorialHandler(JupyterHandler):
    @tornado.web.authenticated
    def get(self):
        self.write('<h1>HELLO WORLD</h1>')