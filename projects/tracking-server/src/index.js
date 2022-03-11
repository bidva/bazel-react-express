/* eslint-disable import/no-mutable-exports */
/* eslint-disable global-require */
import vars from './config/vars';
import logger from './config/logger';

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

const app = require('./app').default;

// listen to requests
app.listen(vars.port.api, () => logger.info(`API server started on port ${vars.port.api} (${vars.env})`));

/**
* Exports express
* @public
*/
export default app;
