Package.describe({
  name: 'gabrielpoca:accounts-headquarters',
  version: '0.0.1',
  summary: 'A login service for the Headquarters.',
  git: 'https://github.com/groupbuddies/accounts-headquarters',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.use('underscore', ['server']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('gabrielpoca:headquarters@=0.0.3', ['client', 'server']);

  api.use('http', ['client', 'server']);

  api.addFiles('headquarters.js');
});
