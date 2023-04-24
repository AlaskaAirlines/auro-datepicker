export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 75,
      branches: 73,
      functions: 68,
      lines: 75
    }
  }
};
