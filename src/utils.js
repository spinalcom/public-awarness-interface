import {
  FileSystem,
  File,
  Ptr,
} from 'spinal-core-connectorjs_type';

const mapModelDictionary = new Map();

export default function loadModelPtr(model) {
  if (model instanceof File) {
    // eslint-disable-next-line no-underscore-dangle
    return loadModelPtr(model._ptr);
  }
  if (!(model instanceof Ptr)) {
    throw new Error('loadModelPtr must take Ptr as parameter');
  }
  if (!model.data.value && model.data.model) {
    return Promise.resolve(model.data.model);
  } if (!model.data.value) {
    throw new Error('Trying to load a Ptr to 0');
  }

  if (mapModelDictionary.has(model.data.value)) {
    return mapModelDictionary.get(model.data.value);
  }
  // eslint-disable-next-line no-underscore-dangle
  if (typeof FileSystem._objects[model.data.value] !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    const promise = Promise.resolve(FileSystem._objects[model.data.value]);
    mapModelDictionary.set(model.data.value, promise);
    return promise;
  }
  const promise = new Promise((resolve, reject) => {
    model.load((m) => {
      if (!m) {
        mapModelDictionary.delete(model.data.value);
        reject(new Error('Error in load Ptr'));
      } else {
        resolve(m);
      }
    });
  });
  mapModelDictionary.set(model.data.value, promise);
  return promise;
}
