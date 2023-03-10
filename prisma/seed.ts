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
	let currentPhoneNumber = '+5551999999999';
	const password = await hashPassword('#1Abcdef');

	const getPhoneNumber = () => {
		currentPhoneNumber = currentPhoneNumber.replace(/\d+$/, (n) => (parseInt(n) - 1).toString());
		return currentPhoneNumber;
	};

	const emailVerification = {
		isVerified: true,
		type: VerificationType.VALIDATE_EMAIL,
		liftCooldownAt: DateTime.now().plus({ minutes: 5 }).toISO()
	};

	await prisma.user.create({
		data: {
			id: adminUserId,
			email: 'ext-user-admin@mailinator.com',
			name: 'Admin',
			password,
			phone: getPhoneNumber(),
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
			email: 'ext-user-dev@mailinator.com',
			name: 'Normal User',
			password,
			phone: getPhoneNumber(),
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
			email: 'ext-change-pw@mailinator.com',
			name: 'Change Pw',
			password,
			phone: getPhoneNumber(),
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
			email: 'ext-signin@mailinator.com',
			name: 'Signin Test',
			password,
			phone: getPhoneNumber(),
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
			email: 'ext-reset-pw@mailinator.com',
			name: 'Reset Pw',
			password,
			phone: getPhoneNumber(),
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
			email: 'ext-reset-pw-expired@mailinator.com',
			name: 'Reset Pw Expired Token',
			password,
			phone: getPhoneNumber(),
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
			email: 'ext-delete-account@mailinator.com',
			name: 'Delete account',
			password,
			phone: getPhoneNumber(),
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
			email: 'ext-validate-email@mailinator.com',
			name: 'Validate Email',
			password,
			phone: getPhoneNumber(),
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
			email: 'ext-verified-dev@mailinator.com',
			name: 'Verified User',
			password,
			phone: getPhoneNumber(),
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
	await prisma.user.create({
		data: {
			email: 'ext-resend-expired-email-token@mailinator.com',
			name: 'Expired email token',
			password,
			phone: getPhoneNumber(),
			role: Role.USER,
			Verification: {
				create: {
					id: 'm0ck3d-3m41l-v4lid4t10n-t0k3n-3xp1r3d',
					type: VerificationType.VALIDATE_EMAIL,
					liftCooldownAt: DateTime.now().toISO(),
					createdAt: DateTime.now().minus({ minutes: 15 }).toISO()
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
			title: 'Projeto de Alfabetiza????o',
			description:
				'Este projeto tem como objetivo ensinar a leitura e a escrita para adultos que nunca tiveram a oportunidade de frequentar a escola. Os universit??rios ir??o organizar turmas de alfabetiza????o em bairros carentes, fornecer materiais did??ticos e ministrar as aulas.			',
			shortDescription: 'Projeto de alfabetiza????o para adultos em bairros carentes.',
			endDate: DateTime.now().plus({ days: 5 }).toISO(),
			startDate: DateTime.now().plus({ days: 2 }).toISO(),
			enrollmentStart: DateTime.now().minus({ days: 1 }).toISO(),
			enrollmentEnd: DateTime.now().plus({ days: 1 }).toISO(),
			faculty: defaultFaculty,
			targetAudience: TargetAudience.STUDENT,
			visibility: 'PUBLIC',
			modality: 'PRESENTIAL',
			location: 'Pra??a dos patinhos, Alegrete, RS',
			proponentId: adminUserId,
			projectId: projectSocialId
		}
	});
	await prisma.activity.create({
		data: {
			title: 'Plantio de ??rvores',
			description:
				'Neste projeto, os universit??rios ir??o plantar ??rvores em ??reas urbanas que sofreram com a degrada????o ambiental. Al??m de ajudar a melhorar a qualidade do ar e a est??tica da cidade, o plantio de ??rvores tamb??m ajuda a diminuir o impacto das ilhas de calor.',
			shortDescription: 'Plantio de ??rvores em ??reas urbanas degradadas.',
			endDate: DateTime.now().plus({ days: 5 }).toISO(),
			startDate: DateTime.now().plus({ days: 2 }).toISO(),
			enrollmentStart: DateTime.now().minus({ days: 1 }).toISO(),
			enrollmentEnd: DateTime.now().plus({ days: 1 }).toISO(),
			faculty: defaultFaculty,
			targetAudience: TargetAudience.STUDENT,
			visibility: 'PUBLIC',
			modality: 'PRESENTIAL',
			location: 'Pra??a dos patinhos, Alegrete, RS',
			proponentId: adminUserId,
			projectId: projectSocialId
		}
	});
	await prisma.activity.create({
		data: {
			title: 'Oficinas de Capacita????o',
			description:
				'Neste projeto, os universit??rios ir??o oferecer oficinas de capacita????o para jovens e adultos que buscam se profissionalizar. As oficinas abordar??o temas como elabora????o de curr??culo, entrevista de emprego, t??cnicas de vendas e empreendedorismo.',
			shortDescription: 'Oficinas de capacita????o profissional para jovens e adultos.',
			endDate: DateTime.now().plus({ days: 5 }).toISO(),
			startDate: DateTime.now().plus({ days: 2 }).toISO(),
			enrollmentStart: DateTime.now().minus({ days: 1 }).toISO(),
			enrollmentEnd: DateTime.now().plus({ days: 1 }).toISO(),
			faculty: defaultFaculty,
			targetAudience: TargetAudience.STUDENT,
			visibility: 'PUBLIC',
			modality: 'PRESENTIAL',
			location: 'Pra??a dos patinhos, Alegrete, RS',
			proponentId: adminUserId,
			projectId: projectSocialId
		}
	});
	await prisma.activity.create({
		data: {
			title: 'A????es de Sa??de',
			description:
				'Este projeto consiste em promover a????es de sa??de em comunidades carentes. Os universit??rios ir??o organizar campanhas de vacina????o, palestras sobre doen??as e cuidados com a sa??de, al??m de fazer o encaminhamento para consultas m??dicas e exames.',
			shortDescription: 'A????es de sa??de em comunidades carentes.',
			endDate: DateTime.now().plus({ days: 1 }).toISO(),
			startDate: DateTime.now().toISO(),
			enrollmentStart: DateTime.now().minus({ days: 3 }).toISO(),
			enrollmentEnd: DateTime.now().minus({ days: 1 }).toISO(),
			faculty: defaultFaculty,
			targetAudience: TargetAudience.STUDENT,
			visibility: 'PUBLIC',
			modality: 'PRESENTIAL',
			location: 'Pra??a dos patinhos, Alegrete, RS',
			proponentId: adminUserId,
			projectId: projectSocialId
		}
	});
	await prisma.activity.create({
		data: {
			title: 'Projeto de Alfabetiza????o para Crian??as',
			description:
				'Este projeto tem como objetivo ensinar a leitura e a escrita para crian??as em situa????o de vulnerabilidade. Os universit??rios ir??o organizar turmas de alfabetiza????o em escolas p??blicas, fornecer materiais did??ticos e ministrar as aulas.',
			shortDescription: 'Projeto de alfabetiza????o para crian??as em escolas p??blicas.',
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
			title: 'Campanha de Doa????o de Sangue',
			description:
				'Este projeto tem como objetivo incentivar a doa????o de sangue por meio de campanhas em locais de grande circula????o. Os universit??rios ir??o promover a import??ncia da doa????o de sangue, esclarecer d??vidas e acompanhar as doa????es.',
			shortDescription: 'Campanha de doa????o de sangue em locais de grande circula????o.',
			endDate: DateTime.now().plus({ days: 14 }).toISO(),
			startDate: DateTime.now().plus({ days: 7 }).toISO(),
			enrollmentStart: DateTime.now().minus({ days: 10 }).toISO(),
			enrollmentEnd: DateTime.now().minus({ days: 7 }).toISO(),
			faculty: defaultFaculty,
			targetAudience: TargetAudience.EXTERNAL,
			visibility: 'PUBLIC',
			modality: 'PRESENTIAL',
			location: 'Pra??a da S??, S??o Paulo, SP',
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
					'Este projeto tem como objetivo capacitar jovens empreendedores para gerir seus pr??prios neg??cios. Os universit??rios ir??o oferecer oficinas sobre gest??o financeira, marketing, vendas e planejamento estrat??gico.',
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
