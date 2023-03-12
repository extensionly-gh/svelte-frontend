import { PrismaClient, Role, StateAcronym, TargetAudience, VerificationType } from '@prisma/client';
import { DateTime } from 'luxon';
import { hashPassword } from '../src/lib/server/utils';

const prisma = new PrismaClient();

async function main() {
	const adminUserId = 'TEST-adminUserId';
	const normalUserId = 'TEST-normalUserId';
	const projectSocialId = 'TEST-projectSocialId';
	const projectOnlineId = 'TEST-projectOnlineId';
	let currentPhoneNumber = '+5551999999999';
	const password = await hashPassword('#1Abcdef');
	const programId = 'TEST-programId';

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

	const facultyUnipampa = await prisma.faculty.create({
		data: {
			state: StateAcronym.RS,
			name: 'Universidade Federal do Pampa',
			acronym: 'UNIPAMPA'
		}
	});

	const facultyUcs = await prisma.faculty.create({
		data: {
			state: StateAcronym.RS,
			name: 'Universidade Caxias do Sul',
			acronym: 'UCS'
		}
	});

	await prisma.faculty.createMany({
		data: [
			{
				state: StateAcronym.DF,
				name: 'Universidade de Brasília',
				acronym: 'UnB'
			},
			{
				state: StateAcronym.DF,
				name: 'Centro Universitário do Distrito Federal',
				acronym: 'UDF'
			},
			{
				state: StateAcronym.GO,
				name: 'Universidade Estadual de Goiás',
				acronym: 'UEG'
			},
			{
				state: StateAcronym.GO,
				name: 'Pontifícia Universidade Católica de Goiás',
				acronym: 'PUC Goiás'
			},
			{
				state: StateAcronym.GO,
				name: 'Universidade Federal de Goiás',
				acronym: 'UFG'
			},
			{
				state: StateAcronym.GO,
				name: 'Instituto Federal de Educação, Ciência e Tecnologia de Goiás',
				acronym: 'IFGO'
			},
			{
				state: StateAcronym.MS,
				name: 'Fundação Universidade Federal de Mato Grosso do Sul',
				acronym: 'UFMS'
			},
			{
				state: StateAcronym.MS,
				name: 'Universidade Federal da Grande Dourados',
				acronym: 'UFGD'
			},
			{
				state: StateAcronym.MT,
				name: 'Universidade Federal de Mato Grosso',
				acronym: 'UFMT'
			},
			{
				state: StateAcronym.MT,
				name: 'Universidade do Estado de Mato Grosso',
				acronym: 'UNEMAT'
			},
			{
				state: StateAcronym.AL,
				name: 'Universidade Federal de Alagoas',
				acronym: 'UFAL'
			},
			{
				state: StateAcronym.AL,
				name: 'Universidade Estadual de Alagoas',
				acronym: 'UNEAL'
			},
			{
				state: StateAcronym.BA,
				name: 'Universidade Federal da Bahia',
				acronym: 'UFBA'
			},
			{
				state: StateAcronym.BA,
				name: 'Universidade do Estado da Bahia',
				acronym: 'UNEB'
			},
			{
				state: StateAcronym.BA,
				name: 'Instituto Federal de Educação, Ciência e Tecnologia da Bahia',
				acronym: 'IFBA'
			},
			{
				state: StateAcronym.BA,
				name: 'Universidade Federal do Oeste da Bahia',
				acronym: 'UFOB'
			},
			{
				state: StateAcronym.BA,
				name: 'Faculdade Independente do Nordeste',
				acronym: 'FAINOR'
			},
			{
				state: StateAcronym.CE,
				name: 'Universidade Estadual do Ceará',
				acronym: 'UEC'
			},
			{
				state: StateAcronym.CE,
				name: 'Universidade Federal do Ceará',
				acronym: 'UFC'
			},
			{
				state: StateAcronym.CE,
				name: 'Instituto Federal de Educação Ciência e Tecnologia do Ceará',
				acronym: 'IFCE'
			},
			{
				state: StateAcronym.CE,
				name: 'Universidade Federal do Cariri',
				acronym: 'UFCA'
			},
			{
				state: StateAcronym.MA,
				name: 'Universidade Federal do Maranhão',
				acronym: 'UFMA'
			},
			{
				state: StateAcronym.MA,
				name: 'Instituto Federal de Educação, Ciência e Tecnologia do Maranhão',
				acronym: 'IFMA'
			},
			{
				state: StateAcronym.PB,
				name: 'Universidade Federal da Paraíba',
				acronym: 'UFPB'
			},
			{
				state: StateAcronym.PB,
				name: 'Universidade Federal de Campina Grande',
				acronym: 'UFCG'
			},
			{
				state: StateAcronym.PB,
				name: 'Instituto Federal de Educação Ciência e Tecnologia da Paraíba',
				acronym: 'IFPB'
			},
			{
				state: StateAcronym.PE,
				name: 'Universidade Federal de Pernambuco',
				acronym: 'UFPE'
			},
			{
				state: StateAcronym.PE,
				name: 'Universidade Federal Rural de Pernambuco',
				acronym: 'UFRPE'
			},
			{
				state: StateAcronym.PE,
				name: 'Universidade Católica de Pernambuco',
				acronym: 'UNICAP'
			},
			{
				state: StateAcronym.RN,
				name: 'Universidade Federal do Rio Grande do Norte',
				acronym: 'UFRN'
			},
			{
				state: StateAcronym.RN,
				name: 'Universidade Federal Rural do Semi-Árido',
				acronym: 'UFERSA'
			},
			{
				state: StateAcronym.SE,
				name: 'Fundação Universidade Federal de Sergipe',
				acronym: 'UFS'
			},
			{
				state: StateAcronym.PI,
				name: 'Universidade Federal do Piauí',
				acronym: 'UFPI'
			},
			{
				state: StateAcronym.AM,
				name: 'Universidade Federal do Amazonas',
				acronym: 'UFAM'
			},
			{
				state: StateAcronym.PA,
				name: 'Universidade Federal do Pará',
				acronym: 'UFPA'
			},
			{
				state: StateAcronym.RR,
				name: 'Universidade Federal de Roraima',
				acronym: 'UFRR'
			},
			{
				state: StateAcronym.AC,
				name: 'Universidade Federal do Acre',
				acronym: 'UFAC'
			},
			{
				state: StateAcronym.PA,
				name: 'Universidade da Amazônia',
				acronym: 'UNAMA'
			},
			{
				state: StateAcronym.TO,
				name: 'Universidade Federal do Tocantins',
				acronym: 'UFT'
			},
			{
				state: StateAcronym.PA,
				name: 'Universidade Federal Rural da Amazônia',
				acronym: 'UFRA'
			},
			{
				state: StateAcronym.AP,
				name: 'Universidade Federal do Amapá',
				acronym: 'UNIFAP'
			},
			{
				state: StateAcronym.ES,
				name: 'Universidade Federal do Espírito Santo',
				acronym: 'UFES'
			},
			{
				state: StateAcronym.MG,
				name: 'Universidade Federal de Itajubá',
				acronym: 'UNIFEI'
			},
			{
				state: StateAcronym.MG,
				name: 'Universidade Federal de Lavras',
				acronym: 'UFLA'
			},
			{
				state: StateAcronym.MG,
				name: 'Universidade Federal do Triângulo Mineiro',
				acronym: 'UFTM'
			},
			{
				state: StateAcronym.MG,
				name: 'Universidade Federal dos Vales do Jequitinhonha e Mucuri',
				acronym: 'UFVJM'
			},
			{
				state: StateAcronym.MG,
				name: 'Pontifícia Universidade Católica de Minas Gerais',
				acronym: 'PUC Minas'
			},
			{
				state: StateAcronym.MG,
				name: 'Universidade Federal de Juiz de Fora',
				acronym: 'UFJF'
			},
			{
				state: StateAcronym.MG,
				name: 'Universidade Federal de Minas Gerais',
				acronym: 'UFMG'
			},
			{
				state: StateAcronym.MG,
				name: 'Universidade Federal de Ouro Preto',
				acronym: 'UFOP'
			},
			{
				state: StateAcronym.MG,
				name: 'Universidade Federal de Viçosa',
				acronym: 'UFV'
			},
			{
				state: StateAcronym.MG,
				name: 'Instituto Nacional de Telecomunicações',
				acronym: 'INATEL'
			},
			{
				state: StateAcronym.MG,
				name: 'Universidade Federal de São João del-Rei',
				acronym: 'UFSJ'
			},
			{
				state: StateAcronym.MG,
				name: 'Universidade Federal de Uberlândia',
				acronym: 'UFU'
			},
			{
				state: StateAcronym.MG,
				name: 'Centro Federal de Educação Tecnológica de Minas Gerais',
				acronym: 'CEFET-MG'
			},
			{
				state: StateAcronym.MG,
				name: 'Centro Universitário Metodista Izabela Hendrix',
				acronym: 'IHENDRIX'
			},
			{
				state: StateAcronym.MG,
				name: 'Instituto Federal de Educação. Ciência e Tecnologia do Triângulo Mineiro',
				acronym: 'IFTM'
			},
			{
				state: StateAcronym.RJ,
				name: 'Centro Federal de Educação Tecnológica Celso Suckow da Fonseca',
				acronym: 'CEFET/RJ'
			},
			{
				state: StateAcronym.RJ,
				name: 'Pontifícia Universidade Católica do Rio de Janeiro',
				acronym: 'PUC Rio'
			},
			{
				state: StateAcronym.RJ,
				name: 'Universidade Católica de Petrópolis',
				acronym: 'UCP'
			},
			{
				state: StateAcronym.RJ,
				name: 'Universidade Federal Fluminense',
				acronym: 'UFF'
			},
			{
				state: StateAcronym.RJ,
				name: 'Universidade Federal do Rio de Janeiro',
				acronym: 'UFRJ'
			},
			{
				state: StateAcronym.RJ,
				name: 'Universidade Federal Rural do Rio de Janeiro',
				acronym: 'UFRRJ'
			},
			{
				state: StateAcronym.RJ,
				name: 'Universidade do Rio de Janeiro',
				acronym: 'UNIRIO'
			},
			{
				state: StateAcronym.RJ,
				name: 'Universidade do Estado do Rio de Janeiro',
				acronym: 'UERJ'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade Federal de São Paulo',
				acronym: 'UNIFESP'
			},
			{
				state: StateAcronym.SP,
				name: 'Faculdade de Engenharia de São Paulo',
				acronym: 'FESP'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade Metodista de São Paulo',
				acronym: 'UMESP'
			},
			{
				state: StateAcronym.SP,
				name: 'Pontifícia Universidade Católica de São Paulo',
				acronym: 'PUC-SP'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade Católica de Campinas',
				acronym: 'PUC-CAMPINAS'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade Federal de São Carlos',
				acronym: 'UFSCar'
			},
			{
				state: StateAcronym.SP,
				name: 'Centro Universitário São Camilo',
				acronym: 'SÃO CAMILO'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade Estadual Paulista Júlio de Mesquita Filho',
				acronym: 'UNESP'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade Estadual de Campinas',
				acronym: 'UNICAMP'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade Metodista de Piracicaba',
				acronym: 'UNIMEP'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade de São Paulo',
				acronym: 'USP'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade São Francisco',
				acronym: 'USF'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade de Ribeirão Preto',
				acronym: 'UNAERP'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade do Sagrado Coração',
				acronym: 'USC'
			},
			{
				state: StateAcronym.SP,
				name: 'Centro Universitário de Lins',
				acronym: 'UNILINS'
			},
			{
				state: StateAcronym.SP,
				name: 'Universidade Santa Cecília',
				acronym: 'UNISANTA'
			},
			{
				state: StateAcronym.SP,
				name: 'Centro Universitário Barão de Mauá',
				acronym: 'CBM'
			},
			{
				state: StateAcronym.PR,
				name: 'Universidade Tecnológica Federal do Paraná',
				acronym: 'UTFPR'
			},
			{
				state: StateAcronym.PR,
				name: 'Universidade Estadual de Londrina',
				acronym: 'UEL'
			},
			{
				state: StateAcronym.PR,
				name: 'Universidade Estadual de Maringá',
				acronym: 'UEM'
			},
			{
				state: StateAcronym.PR,
				name: 'Universidade Estadual de Ponta Grossa',
				acronym: 'UEPG'
			},
			{
				state: StateAcronym.PR,
				name: 'Universidade Federal do Paraná',
				acronym: 'UFPR'
			},
			{
				state: StateAcronym.PR,
				name: 'Universidade Estadual do Oeste do Paraná',
				acronym: 'UNIOESTE'
			},
			{
				state: StateAcronym.PR,
				name: 'Universidade Estadual do Centro-Oeste',
				acronym: 'UNICENTRO'
			},
			{
				state: StateAcronym.RS,
				name: 'Universidade Federal de Ciências da Saúde de Porto Alegre',
				acronym: 'UFCSPA'
			},
			{
				state: StateAcronym.RS,
				name: 'Universidade Federal do Rio Grande',
				acronym: 'FURG'
			},
			{
				state: StateAcronym.RS,
				name: 'Pontifícia Universidade Católica do Rio Grande do Sul',
				acronym: 'PUCRS'
			},
			{
				state: StateAcronym.RS,
				name: 'Universidade Católica de Pelotas',
				acronym: 'UCPEL'
			},
			{
				state: StateAcronym.RS,
				name: 'Universidade Federal de Pelotas',
				acronym: 'UFPel'
			},
			{
				state: StateAcronym.RS,
				name: 'Universidade Federal do Rio Grande do Sul',
				acronym: 'UFRGS'
			},
			{
				state: StateAcronym.RS,
				name: 'Universidade Federal de Santa Maria',
				acronym: 'UFSM'
			},
			{
				state: StateAcronym.RS,
				name: 'Universidade de Passo Fundo',
				acronym: 'UPF'
			},
			{
				state: StateAcronym.RS,
				name: 'Universidade Regional do Noroeste do Estado do Rio Grande do Sul',
				acronym: 'UNIJUÍ'
			},
			{
				state: StateAcronym.RS,
				name: 'Centro Universitário UNIVATES',
				acronym: 'UNIVATES'
			},
			{
				state: StateAcronym.RS,
				name: 'Faculdade Meridional',
				acronym: 'IMED'
			},
			{
				state: StateAcronym.SC,
				name: 'Universidade do Estado de Santa Catarina',
				acronym: 'UDESC'
			},
			{
				state: StateAcronym.SC,
				name: 'Universidade Federal de Santa Catarina',
				acronym: 'UFSC'
			},
			{
				state: StateAcronym.SC,
				name: 'Universidade do Oeste de Santa Catarina',
				acronym: 'UNOESC'
			},
			{
				state: StateAcronym.SC,
				name: 'Universidade do Vale do Itajaí',
				acronym: 'UNIVALI'
			},
			{
				state: StateAcronym.SC,
				name: 'Universidade Regional de Blumenau',
				acronym: 'FURB'
			},
			{
				state: StateAcronym.SC,
				name: 'Universidade do Extremo Sul Catarinense',
				acronym: 'UNESC'
			},
			{
				state: StateAcronym.SC,
				name: 'Universidade Federal da Fronteira Sul',
				acronym: 'UFFS'
			}
		]
	});

	await prisma.project.create({
		data: {
			id: projectSocialId,
			description: 'Projeto de ajuda social e ambiental na cidade de Alegrete',
			acceptStudentsProposals: false,
			facultyId: facultyUnipampa.id,
			title: 'Ajuda ambiental e social na cidade de Alegrete'
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
			facultyId: facultyUnipampa.id,
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
			facultyId: facultyUnipampa.id,
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
			facultyId: facultyUcs.id,
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
			facultyId: facultyUcs.id,
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
			facultyId: facultyUnipampa.id,
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
			facultyId: facultyUcs.id,
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
			facultyId: facultyUnipampa.id,
			title: 'Workshops online sobre Engenharia de Software',
			description: 'Workshops online sobre Engenharia de Software'
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
				facultyId: facultyUnipampa.id,
				targetAudience: TargetAudience.EXTERNAL,
				visibility: 'PUBLIC',
				modality: 'REMOTE',
				location: 'Online',
				proponentId: adminUserId,
				projectId: projectSocialId
			}
		});
	}
	await prisma.program.create({
		data: {
			id: programId,
			title: 'Programa de Extensão em Engenharia de Software',
			description: 'Programa de Extensão em Engenharia de Software',
			facultyId: facultyUnipampa.id
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
