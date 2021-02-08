const app = require("./app");

const { PORT } = require("./configuration/configuration");

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

