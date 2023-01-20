import { prisma } from '$lib/server/singletons';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  return {
    verifications: (await router.createCaller(await createContext(event)).user.verifications())
  }
}

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