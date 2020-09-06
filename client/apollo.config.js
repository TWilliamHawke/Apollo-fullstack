module.exports = {
  client: {
    name: 'ApolloBlogClient',
    service: {
      name: 'ApolloBlog',
      localSchemaFile: "./schema.json"
    },
    includes: ['**/*.ts'],
    excludes: ['node_modules/**'],

  }
};