const dotEnv = require("dotenv");
dotEnv.config();


if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
  console.log(configFile,"in prod");
} else {
  dotEnv.config();
  console.log("in dev");
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  NODE_ENV: process.env.NODE_ENV,
};
