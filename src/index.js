require('./config/env');
const { db } = require('./config/database');
const { serverHttp } = require('./config/http');

const initServer = async () => {
  try {
    await db.authenticate()
    await db.sync({force: false})
    serverHttp.listen(process.env.PORT, () => {
      console.log(
        `Server working on port ${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

initServer();
