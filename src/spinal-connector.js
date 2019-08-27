import Spinalcore from 'spinal-core-connectorjs_type';


const userId = 168;
const password = '4CHveMnT38iW';
const ip = 'localhost';
const port = '7777';

const conn = Spinalcore
  .connect(`http://${userId}:${password}@${ip}:${port}/`);


export default function getGraph() {
  return new Promise((resolve, reject) => {
    Spinalcore.load(conn, '/__users__/admin/Colas', resolve, reject);
  });
}
