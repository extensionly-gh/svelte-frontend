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

	const emailVerification = {
		isVerified: true,
		type: VerificationType.VALIDATE_EMAIL,
		liftCooldownAt: DateTime.now().plus({ minutes: 5 }).toISO()
	};

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
					...emailVerification
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
					...emailVerification
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
					...emailVerification
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
					...emailVerification
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
				createMany: {
					data: [
						{
							id: 'm0ck3d-p4ssw0rd-r3s3t-t0k3n',
							type: VerificationType.RESET_PASSWORD,
							liftCooldownAt: DateTime.now().plus({ minutes: 5 }).toISO()
						},
						{
							...emailVerification
						}
					]
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
			role: Role.USER,
			Verification: {
				create: {
					...emailVerification
				}
			}
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
					...emailVerification
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
			title: 'Projeto de Alfabetização',
			description:
				'Este projeto tem como objetivo ensinar a leitura e a escrita para adultos que nunca tiveram a oportunidade de frequentar a escola. Os universitários irão organizar turmas de alfabetização em bairros carentes, fornecer materiais didáticos e ministrar as aulas.			',
			shortDescription: 'Projeto de alfabetização para adultos em bairros carentes.',
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
			title: 'Plantio de Árvores',
			description:
				'Neste projeto, os universitários irão plantar árvores em áreas urbanas que sofreram com a degradação ambiental. Além de ajudar a melhorar a qualidade do ar e a estética da cidade, o plantio de árvores também ajuda a diminuir o impacto das ilhas de calor.',
			shortDescription: 'Plantio de árvores em áreas urbanas degradadas.',
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
			title: 'Oficinas de Capacitação',
			description:
				'Neste projeto, os universitários irão oferecer oficinas de capacitação para jovens e adultos que buscam se profissionalizar. As oficinas abordarão temas como elaboração de currículo, entrevista de emprego, técnicas de vendas e empreendedorismo.',
			shortDescription: 'Oficinas de capacitação profissional para jovens e adultos.',
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
			title: 'Ações de Saúde',
			description:
				'Este projeto consiste em promover ações de saúde em comunidades carentes. Os universitários irão organizar campanhas de vacinação, palestras sobre doenças e cuidados com a saúde, além de fazer o encaminhamento para consultas médicas e exames.',
			shortDescription: 'Ações de saúde em comunidades carentes.',
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
			title: 'Projeto de Alfabetização para Crianças',
			description:
				'Este projeto tem como objetivo ensinar a leitura e a escrita para crianças em situação de vulnerabilidade. Os universitários irão organizar turmas de alfabetização em escolas públicas, fornecer materiais didáticos e ministrar as aulas.',
			shortDescription: 'Projeto de alfabetização para crianças em escolas públicas.',
			endDate: DateTime.now().plus({ days: 7 }).toISO(),
			startDate: DateTime.now().plus({ days: 1 }).toISO(),
			enrollmentStart: DateTime.now().minus({ days: 5 }).toISO(),
			enrollmentEnd: DateTime.now().minus({ days: 3 }).toISO(),
			faculty: defaultFaculty,
			targetAudience: TargetAudience.STUDENT,
			visibility: 'PUBLIC',
			modality: 'REMOTE',
			location: 'Online',
			proponentId: adminUserId,
			projectId: projectSocialId
		}
	});
	await prisma.activity.create({
		data: {
			title: 'Campanha de Doação de Sangue',
			description:
				'Este projeto tem como objetivo incentivar a doação de sangue por meio de campanhas em locais de grande circulação. Os universitários irão promover a importância da doação de sangue, esclarecer dúvidas e acompanhar as doações.',
			shortDescription: 'Campanha de doação de sangue em locais de grande circulação.',
			endDate: DateTime.now().plus({ days: 14 }).toISO(),
			startDate: DateTime.now().plus({ days: 7 }).toISO(),
			enrollmentStart: DateTime.now().minus({ days: 10 }).toISO(),
			enrollmentEnd: DateTime.now().minus({ days: 7 }).toISO(),
			faculty: defaultFaculty,
			targetAudience: TargetAudience.EXTERNAL,
			visibility: 'PUBLIC',
			modality: 'PRESENTIAL',
			location: 'Praça da Sé, São Paulo, SP',
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
	for (let i = 0; i < 20; i++) {
		await prisma.activity.create({
			data: {
				title: 'Oficina de Empreendedorismo ' + i,
				description:
					'Este projeto tem como objetivo capacitar jovens empreendedores para gerir seus próprios negócios. Os universitários irão oferecer oficinas sobre gestão financeira, marketing, vendas e planejamento estratégico.',
				shortDescription: 'Oficina de empreendedorismo para jovens empreendedores.',
				endDate: DateTime.now().plus({ days: 21 }).toISO(),
				startDate: DateTime.now().plus({ days: 14 }).toISO(),
				enrollmentStart: DateTime.now().minus({ days: 7 }).toISO(),
				enrollmentEnd: DateTime.now().minus({ days: 5 }).toISO(),
				faculty: defaultFaculty,
				targetAudience: TargetAudience.EXTERNAL,
				visibility: 'PUBLIC',
				modality: 'REMOTE',
				location: 'Online',
				proponentId: adminUserId,
				projectId: projectSocialId
			}
		});
	}
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
