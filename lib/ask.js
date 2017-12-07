const inquirer = require('inquirer')
const logger = require('./logger')

/**
 * Ask questions, return results.
 *
 * @param {Object} prompts
 * @param {Object} data
 * @param {Function} done
 */

module.exports = function ask (files, metalsmith, done) {
  const pairs = []
  entityPrompt()
  function entityPrompt() {
    inquirer.prompt([
      {
        name: 'label',
        type: 'string',
        message: 'Please input your property label.(e.g 名字):',
      },
      {
        name: 'variable',
        type: 'string',
        message: 'Please input your property variable.(e.g name):',
      },
      {
        name: 'continue',
        type: 'confirm',
        message: 'Need next pair ?',
        default: true
      },
    ]).catch((err) => {
      logger.fatal(err)
      done(err)
    }).then(answers => {
      const { label, variable } = answers
      pairs.push({label, variable})
      if (!answers.continue) {
        metalsmith.metadata({pairs})
        done()
      } else {
        entityPrompt()
      }
    })
  }
}
