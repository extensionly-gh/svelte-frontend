import { userRouter } from './routers/user';
import { t } from './t';

export const router = t.router({
  user: userRouter,
});

export type Router = typeof router;
