from jupyter_server.base.handlers import JupyterHandler
import tornado

class TutorialHandler(JupyterHandler):
    @tornado.web.authenticated
    def get(self):
        self.write('HELLO WORLD')

    @tornado.web.authenticated
    def post(self):
        ret = {}
        envVars = self.get_json_body()
        for var in envVars:
          ret[var] = os.environ.get(var, '')

        self.write(json.dumps(ret))