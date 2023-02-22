import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const getActivities = publicProcedure
	.input(
		z
			.object({
				take: z.number().optional(),
				cursor: z.number().optional(),
				search: z.string().optional()
			})
			.optional()
	)
	.query(async ({ input }) => {
		const cursor = input?.cursor !== undefined ? { paginationId: input?.cursor } : undefined;

		const where: Prisma.ActivityWhereInput = {
			OR: [
				{ title: { search: `${input?.search ?? ''}*` } },
				{ description: { search: `${input?.search ?? ''}*` } },
				{ shortDescription: { search: `${input?.search ?? ''}*` } },
				{ faculty: { search: `${input?.search ?? ''}*` } },
				{ prerequisites: { search: `${input?.search ?? ''}*` } },
				{ location: { search: `${input?.search ?? ''}*` } },
				{ User: { name: { search: `${input?.search ?? ''}*` } } }
			]
		};

		if (!input?.search) {
			delete where.OR;
		}

		const activities = await prisma.activity.findMany({
			take: input?.take || 12,
			skip: input?.cursor !== undefined ? 1 : 0,
			cursor,
			orderBy: {
				paginationId: 'asc'
			},
			where,
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
