import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';

export const getPathCurrent = (url, ...args) => {
  const _filename = fileURLToPath(url);
  return path.join(dirname(_filename), ...args);
};

export const triggerErrorFs = (error) => {
  error.message = 'FS operation failed';
  throw error;
};
