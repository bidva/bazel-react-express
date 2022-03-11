import winston from 'winston';
import vars from './vars';

const logger = winston.createLogger({
  level: vars.log_level,
  format: winston.format.json(),
  transports: [
    // - Write all logs error (and below) to `error.log`.
    new winston.transports.File({ filename: '.logs/error.log', level: 'error' }),
    // - Write to all logs with level 'info' and below to `combined.log`
    new winston.transports.File({ filename: '.logs/combined.log', level: 'info' }),
    // - Write all logs to Console
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

export default logger;
