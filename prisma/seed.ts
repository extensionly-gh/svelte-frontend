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
			email: 'extensionly-change-pw@mailinator.com',
			name: 'Change Pw',
			password: await hashPassword('StrongPassword1.'),
			phone: '+5551999999995',
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
			email: 'extensionly-signin@mailinator.com',
			name: 'Signin Test',
			password: await hashPassword('StrongPassword1.'),
			phone: '+5551999999994',
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
			email: 'extensionly-reset-pw@mailinator.com',
			name: 'Reset Pw',
			password: await hashPassword('StrongPassword1.'),
			phone: '+5551999999993',
			role: Role.USER,
			Verification: {
				create: {
					id: 'm0ck3d-p4ssw0rd-r3s3t-t0k3n',
					type: VerificationType.RESET_PASSWORD,
					liftCooldownAt: DateTime.now().plus({ minutes: 5 }).toISO()
				}
			}
		}
	});
	await prisma.user.create({
		data: {
			email: 'extensionly-reset-pw-expired@mailinator.com',
			name: 'Reset Pw Expired Token',
			password: await hashPassword('StrongPassword1.'),
			phone: '+5551999999990',
			role: Role.USER,
			Verification: {
				create: {
					id: 'm0ck3d-p4ssw0rd-r3s3t-t0k3n-3xp1r3d',
					type: VerificationType.RESET_PASSWORD,
					createdAt: DateTime.now().minus({ minutes: 15 }).toISO(),
					liftCooldownAt: DateTime.now().plus({ minutes: 5 }).toISO()
				}
			}
		}
	});
	await prisma.user.create({
		data: {
			email: 'extensionly-delete-account@mailinator.com',
			name: 'Delete account',
			password: await hashPassword('StrongPassword1.'),
			phone: '+5551999999992',
			role: Role.USER
		}
	});
	await prisma.user.create({
		data: {
			email: 'extensionly-validate-email@mailinator.com',
			name: 'Validate Email',
			password: await hashPassword('StrongPassword1.'),
			phone: '+5551999999991',
			role: Role.USER,
			Verification: {
				create: {
					id: 'm0ck3d-3m41l-v4lid4t10n-t0k3n',
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
			shortDescription: 'Ajude a recolher o lixo.',
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
			shortDescription: 'Ajude a queimar pneus',
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
			shortDescription: 'Corra para ajudar ONGs.',
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
			shortDescription: 'Aprenda sobre TDD.',
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
