import zipcelx from 'zipcelx';
import {
  saveAs,
} from 'file-saver';

const CsvStringify = require('csv-stringify');
const path = require('path');

export function exportToXLSX(filename, data) {
  const res = data.map((row) => {
    const r = [];
    for (const key in row) {
      if (row.hasOwnProperty(key)) {
        r.push({
          value: row[key],
          type: typeof row[key] === 'number' ? 'number' : 'string',
        });
      }
    }
    return r;
  });
  console.log(res)
  const config = {
    filename,
    sheet: {
      data: res,
    },
  };
  zipcelx(config);
}


function download(filename, data, mineType) {
  const blob = new Blob([data], {
    type: mineType,
  });

  saveAs(blob, filename);
}

export function exportToCSV(filename, data) {
  const extName = path.extname(filename);
  if (extName !== 'csv') filename += '.csv';
  const res = data;
  CsvStringify(res, (err, output) => {
    if (err) throw err;
    download(filename, output, 'text/csv');
  });
}
