#!/usr/bin/env node

'use strict';

const args = process.argv.slice(2);

if (args.length && args[0] === '-h' || args[0] === '--help') {
  console.log('\n  Usage: yos [options] [generator-name ...]\n');
  console.log('  Options:\n\n    -h, --help    show usage help\n');
  process.exit(1);
}

const env = require('yeoman-environment').createEnv();

env.lookup(() => {
  const generatorList = createGeneratorList(env, args);
  console.log(`Available Generators:\n${generatorList}`);
});

function createGeneratorList(env, apps) {
  const generators = Object.keys(env.getGeneratorsMeta()).reduce((namesByGenerator, generator) => {
    const parts = generator.split(':');
    const generatorName = parts.shift();

    // Filter to specified generators, when specified
    if (!apps.length || apps.indexOf(generatorName) > -1) {
      // If first time we found this generator, prepare to save all its sub-generators
      if (!namesByGenerator[generatorName]) {
        namesByGenerator[generatorName] = [];
      }
      // If sub-generator (!== app), save it
      if (parts[0] !== 'app') {
        namesByGenerator[generatorName].push(parts.join(':'));
      }
    }
    return namesByGenerator;
  }, {});

  if (!Object.keys(generators).length) {
    return '\n Couldn\'t find any generators. Have you installed any?\n\n Troubleshoot issues by running:\n $ yo doctor\n';
  }

  return Object.keys(generators).map(generator => {
    const subGenerators = generators[generator].map(subGenerator => {
      return `    ${subGenerator}`;
    }).join('\n');

    return `\n  ${generator}\n${subGenerators}`;
  }).join('\n').replace(/\n\n\n/g, '\n\n');
}
