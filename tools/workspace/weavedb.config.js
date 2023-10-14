module.exports = {
  db: {
    plugins: {},
    app: "http://localhost:3000",
    name: "Demo Dapp",
  },
  accounts: { evm: {}, ar: {} },
  defaultNetwork: "localhost",
  networks: {
    localhost: { url: "localhost:9090", admin: "main" },
  },
}
