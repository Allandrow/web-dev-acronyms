import { rest } from 'msw';
import { acronyms } from '@data';

const handlers = [
  rest.get('/acronym/:id', (req, res, ctx) => {
    const { id } = req.params;

    const acronym = acronyms.find((item) => item.acronym === id);

    if (!acronym) {
      return res(
        ctx.status(404),
        ctx.json({ message: `Acronym ${id} not found.` }),
      );
    }

    return res(ctx.status(200), ctx.json(acronym));
  }),
];

export default handlers;
