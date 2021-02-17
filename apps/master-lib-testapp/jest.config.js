module.exports = {
  name: 'master-lib-testapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/master-lib-testapp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
