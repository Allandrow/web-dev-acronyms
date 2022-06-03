import { rest } from 'msw';

const handlers = [
  rest.get('/acronyms', (_, res, ctx) => {
    return res(ctx.status(200));
  }),
];

export default handlers;
