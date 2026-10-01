import { formatTimestamp } from '@jobscale/timestamp';
import { createLogger } from '@jobscale/create-logger';
import { autocannon } from './index.js';

const logger = createLogger({ level: 'info', timestamp: true });
const url = '127.0.0.1:80';

const it = async () => {
  autocannon({
    title: 'sync',
    url,
    connections: 10, // default
    pipelining: 1, // default
    duration: 10, // default
  }, logger.info);
};

const it2 = async () => {
  const result = await autocannon({
    title: 'async',
    url,
    connections: 10, // default
    pipelining: 1, // default
    duration: 10, // default
  });
  logger.info({ timestamp: formatTimestamp(), ...result });
};

it();
it2();
