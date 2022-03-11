// import .env variables
require('dotenv-safe').config({
  path: process.env.DOTENV_PATH ? process.env.DOTENV_PATH : '.env',
  example: '.env.example',
  allowEmptyValues: true,
  debug: false,
});

// eslint-disable-next-line no-unused-vars
function isTruthly(val) {
  return ['1', 'true', 't'].includes(String(val).toLowerCase());
}

function safeParseInt(val) {
  const intVal = parseInt(val, 10);
  if (Number.isNaN(intVal)) {
    throw new Error(`Invalid integer value: ${val}`);
  }
  return intVal;
}

export default {
  env: process.env.NODE_ENV,
  port: {
    api: safeParseInt(process.env.PORT_API),
  },
  request_logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  log_level: process.env.LOG_LEVEL || 'info',
};
