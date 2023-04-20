const chalk = require('chalk');
const { execSync } = require('child_process');
const { readFileSync } = require('fs');

// .git/COMMIT_EDITMSG
const commitMsgFilepath = process.argv[2]
main(commitMsgFilepath);

/**
 * Check if code changed at master, tag not checked.
 * @param {string | undefined} commitMsgFilepath
 */
async function main(commitMsgFilepath) {
  const msg = commitMsgFilepath && readFileSync(commitMsgFilepath, 'utf-8').toString();

  if (isMaster() && hasCodeChanged(msg)) {
    console.error(chalk.red('[prepush failed]: 当前是 master 分支'));
    console.error(chalk.red('[prepush failed]: 本地存在未提交的文件：'));

    const out = execSync('git status -s').toString();
    console.log(chalk.green(out));

    console.error(chalk.red('[prepush failed]: master 禁止直接推送代码，请 `git checkout -b feat/your-name-xyz` 然后发起 MR'));

    process.exitCode = 1;
  }
}

function buffer2string(buffer) {
  if (Buffer.isBuffer(buffer)) {
    return buffer.toString();
  }

  return buffer;
}

/**
 *
 * @returns {boolean}
 */
function isMaster() {
  const branch = execSync('git rev-parse --abbrev-ref HEAD');
  return buffer2string(branch).startsWith('master');
}

/**
 * @param {string} commitMessage
 * @returns {boolean}
 */
function hasCodeChanged(commitMessage) {
  const isCommitByPublishFlow = commitMessage && /\d+\.\d+\.\d+/.test(commitMessage.trim());

  if (isCommitByPublishFlow) {
    return false;
  }

  const result = execSync('git status --short');

  if (buffer2string(result).replace(/[\r\n]/g, '').length > 0) {
    return true;
  }

  return false;
}
