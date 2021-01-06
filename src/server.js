require('dotenv').config();

import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV, CMS_API_URL } = process.env;
const dev = NODE_ENV === 'development';

polka()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      session: () => ({
        CMS_API_URL,
      }),
    })
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });
