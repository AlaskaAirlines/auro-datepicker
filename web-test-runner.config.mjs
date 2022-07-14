export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 40,
      branches: 40,
      functions: 40,
      lines: 40
    }
  }
};
