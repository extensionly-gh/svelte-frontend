import { prisma } from '$lib/server/singletons';
import type { Actions } from './$types';

export const actions: Actions = {
  updateName: async (event) => {
    const userId = (await event.locals.getSession())?.user.id;
    if (userId) {
      const data = await event.request.formData();
      const name = data.get('name') as string;
      if (name) {
        await prisma.user.update({
          where: { id: userId },
          data: { name }
        });
      }
    }
  }
};