module.exports = {
  name: 'master-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/master-lib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
