const { exec } = require('child_process')
const util = require('util')
const execPromise = util.promisify(exec)
const path = require('node:path')
const cwd = process.cwd() // Current Working Directory

const PACKED_DIR = '.packed'
const packedDir = path.resolve(cwd, PACKED_DIR)


const publish = async () => {
    await execPromise(`
        cd ${packedDir};
        npm publish;
  `)
}

publish()