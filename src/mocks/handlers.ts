import { rest } from 'msw';
import { acronymList } from '@data';

const list = acronymList.sort().map((acronym) => acronym.toLowerCase());

const handlers = [
  rest.get('/acronyms', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(list));
  }),
];

export default handlers;
