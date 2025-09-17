import path from 'node:path';

const pathToWorkDir = path.join(process.cwd());
const dbPath = path.join(pathToWorkDir, 'src/db', 'db.json');

export const PATH_DB = dbPath;
