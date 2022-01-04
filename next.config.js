const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "alberto",
        mongodb_password: "2XcuDjwsiTlq0e9W",
        mongodb_cluster: "cluster0",
        mongodb_database: "blog-a-z-dev",
      },
    };
  } else {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "alberto",
        mongodb_password: "2XcuDjwsiTlq0e9W",
        mongodb_cluster: "cluster0",
        mongodb_database: "blog-a-z",
      },
    };
  }
};
