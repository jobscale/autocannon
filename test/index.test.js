const autocannon = require('..');

const { debug } = console;
const url = '127.0.0.1:80';

const it = async () => {
  autocannon({
    title: 'sync',
    url,
    connections: 10, // default
    pipelining: 1, // default
    duration: 10, // default
  }, debug);
  const result = await autocannon({
    title: 'async',
    url,
    connections: 10, // default
    pipelining: 1, // default
    duration: 10, // default
  });
  debug(result);
};

it();
