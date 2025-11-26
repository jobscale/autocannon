import http from 'http';
import { jest } from '@jest/globals';
import autocannon from '../index.js';

jest.setTimeout(3000);

const logger = console;
const url = '127.0.0.1:3000';

describe('test autocannon', () => {
  let server;
  beforeAll(async () => {
    await new Promise(resolve => {
      server = http.createServer((req, res) => {
        res.end('ok');
      }).listen(3000, resolve);
    });
  });

  afterAll(async () => {
    await new Promise(resolve => {
      server.close(resolve);
    });
  });

  describe('test logger', () => {
    it('toBe prompt', async () => {
      await new Promise((resolve, reject) => {
        const cannon = autocannon({
          title: 'async',
          url,
          connections: 10,
          pipelining: 5,
          duration: 2,
        });
        cannon.on('done', result => {
          logger.info(result.latency.totalCount);
          logger.info(result.requests.sent);
          expect(result.latency).toHaveProperty('totalCount');
          expect(result.requests).toHaveProperty('sent');
          resolve();
        });
        cannon.on('error', reject);
      });
    });

    describe('test web site autocannon', () => {
      it('toBe prompt', async () => {
        await new Promise((resolve, reject) => {
          const cannon = autocannon({
            title: 'async',
            url,
            connections: 5,
            pipelining: 3,
            duration: 2,
          });
          cannon.on('done', result => {
            logger.info(result.latency.totalCount);
            logger.info(result.requests.sent);
            expect(result.latency).toHaveProperty('totalCount');
            expect(result.requests).toHaveProperty('sent');
            resolve();
          });
          cannon.on('error', reject);
        });
      });
    });
  });
});
