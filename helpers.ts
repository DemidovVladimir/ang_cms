import * as path from 'path';

const ROOT = path.resolve(__dirname);

export const pathResolver = (args: any) => {
  args = [...arguments];
  return path.join.apply(path, [...ROOT, ...args]);
};
