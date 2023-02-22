import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';
import { z } from 'zod';

export const getActivities = publicProcedure
	.input(
		z
			.object({
				take: z.number().optional().default(10),
				skip: z.number().optional().default(0)
			})
			.optional()
	)
	.query(async ({ input }) => {
		const activities = await prisma.activity.findMany({
			take: input?.take || 10,
			skip: input?.skip || 0,
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
