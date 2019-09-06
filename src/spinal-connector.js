import Spinalcore from 'spinal-core-connectorjs_type';
import config from './config'


const conn = Spinalcore
  .connect(`http://${config.userId}:${config.password}@${window.location.host}/`);


export default function getGraph() {
  return new Promise((resolve, reject) => {
    Spinalcore.load(conn, '/__users__/admin/Colas', resolve, reject);
  });
}
