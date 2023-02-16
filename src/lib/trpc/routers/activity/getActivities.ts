import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';

export const getActivities = publicProcedure.query(async ({ ctx }) => {
	const activities = await prisma.activity.findMany({
		include: {
			User: {
				select: {
					name: true,
					image: true
				}
			},
			Project: {
				select: {
					name: true
				}
			}
		}
	});

	return activities;
});
