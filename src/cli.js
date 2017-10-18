#!/usr/bin/env node

const { AssertionError } = require('assert')
const { mpg, l100km } = require('./convert')

function run (command, ...args) {
  try {
    const output = command.apply(null, args)
    console.log(output)
  } catch (err) {
    if (err instanceof AssertionError) {
      console.error(err.message)
    } else {
      console.error(err)
    }
    process.exitCode = 1
  }
}

module.exports = require('yargs')
  .usage('Usage: $0 <command> [value]')
  .command({
    command: 'mpg [value]',
    aliases: ['m'],
    desc: 'Convert fuel consumption from mpg to l/100km',
    handler: argv => run(mpg, argv.value)
  })
  .command({
    command: 'l100km [value]',
    aliases: ['l'],
    desc: 'Convert fuel consumption from l/100km to mpg',
    handler: argv => run(l100km, argv.value)
  })
  .demandCommand()
  .help('h')
  .alias('h', 'help')
  .epilog('Copyright 2017 Attila Beregszaszi. Licensed under the MIT license')
  .argv
