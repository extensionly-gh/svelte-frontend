import { PrismaClient, Role, TargetAudience, VerificationType } from '@prisma/client';
import { randomUUID } from 'crypto';
import { DateTime } from 'luxon';
import { hashPassword } from '../src/lib/server/utils';

const prisma = new PrismaClient();

async function main() {
	const adminUserId = randomUUID();
	const normalUserId = randomUUID();
	const defaultFaculty = 'Unipampa';
	const projectSocialId = randomUUID();
	const projectOnlineId = randomUUID();

	await prisma.user.create({
		data: {
			id: adminUserId,
			email: 'admin-dev@extensionly.app',
			name: 'Admin',
			password: await hashPassword('StrongPassword1.'),
			phone: '+5551999999999',
			role: Role.ADMIN,
			Verification: {
				create: {
					type: VerificationType.VALIDATE_EMAIL,
					liftCooldownAt: DateTime.now().plus({ minutes: 5 }).toISO()
				}
			}
		}
	});
	await prisma.user.create({
		data: {
			id: normalUserId,
			email: 'extensionly-user-dev@mailinator.com',
			name: 'Normal User',
			password: await hashPassword('StrongPassword1.'),
			phone: '+5551999999998',
			role: Role.USER,
			Verification: {
				create: {
					type: VerificationType.VALIDATE_EMAIL,
					liftCooldownAt: DateTime.now().plus({ minutes: 5 }).toISO()
				}
			}
		}
	});
	await prisma.user.create({
		data: {
			email: 'verified-dev@extensionly.app',
			name: 'Verified User',
			password: await hashPassword('StrongPassword1.'),
			phone: '+5551999999997',
			role: Role.USER,
			Verification: {
				create: {
					type: VerificationType.VALIDATE_EMAIL,
					liftCooldownAt: DateTime.now().toISO(),
					isVerified: true
				}
			}
		}
	});
	await prisma.project.create({
		data: {
			id: projectSocialId,
			acceptStudentsProposals: false,
			faculty: defaultFaculty,
			name: 'Ajuda ambiental e social na cidade de Alegrete'
		}
	});
	await prisma.activity.create({
		data: {
			title: 'Recolhimento de lixo',
			description: 'Ajude a comunidade local a coletar o lixo espalhado pela cidade.',
			endDate: DateTime.now().plus({ days: 5 }).toISO(),
			startDate: DateTime.now().plus({ days: 2 }).toISO(),
			enrollmentStart: DateTime.now().minus({ days: 1 }).toISO(),
			enrollmentEnd: DateTime.now().plus({ days: 1 }).toISO(),
			faculty: defaultFaculty,
			targetAudience: TargetAudience.STUDENT,
			visibility: 'PUBLIC',
			modality: 'PRESENTIAL',
			location: 'Praça dos patinhos, Alegrete, RS',
			proponentId: adminUserId,
			projectId: projectSocialId
		}
	});
	await prisma.activity.create({
		data: {
			title: 'Queima de pneus',
			description: 'Ajude a comunidade local a queimar pneus para acabar com a ameaça da dengue.',
			endDate: DateTime.now().plus({ days: 1 }).toISO(),
			startDate: DateTime.now().toISO(),
			enrollmentStart: DateTime.now().minus({ days: 3 }).toISO(),
			enrollmentEnd: DateTime.now().minus({ days: 1 }).toISO(),
			faculty: defaultFaculty,
			targetAudience: TargetAudience.STUDENT,
			visibility: 'PUBLIC',
			modality: 'PRESENTIAL',
			location: 'Praça dos patinhos, Alegrete, RS',
			proponentId: adminUserId,
			projectId: projectSocialId
		}
	});
	await prisma.activity.create({
		data: {
			title: 'Corrida beneficente',
			description: 'Corrida pela cidade de Alegrete para acumular fundos para ONGs.',
			endDate: DateTime.now().minus({ days: 1 }).toISO(),
			startDate: DateTime.now().minus({ days: 2 }).toISO(),
			enrollmentStart: DateTime.now().minus({ days: 5 }).toISO(),
			enrollmentEnd: DateTime.now().minus({ days: 3 }).toISO(),
			faculty: defaultFaculty,
			targetAudience: TargetAudience.STUDENT,
			visibility: 'PUBLIC',
			modality: 'PRESENTIAL',
			location: 'Praça dos patinhos, Alegrete, RS',
			proponentId: adminUserId,
			projectId: projectSocialId
		}
	});
	await prisma.project.create({
		data: {
			id: projectOnlineId,
			acceptStudentsProposals: true,
			faculty: defaultFaculty,
			name: 'Workshops online sobre Engenharia de Software'
		}
	});
	await prisma.activity.create({
		data: {
			title: 'Palestra sobre TDD',
			description: 'Aprenda sobre Test Driven Development na prática.',
			endDate: DateTime.now().plus({ days: 8 }).toISO(),
			startDate: DateTime.now().plus({ days: 3 }).toISO(),
			enrollmentStart: DateTime.now().minus({ days: 2 }).toISO(),
			enrollmentEnd: DateTime.now().plus({ days: 2 }).toISO(),
			faculty: defaultFaculty,
			targetAudience: TargetAudience.STUDENT,
			visibility: 'PUBLIC',
			modality: 'REMOTE',
			proponentId: normalUserId,
			projectId: projectOnlineId
		}
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
