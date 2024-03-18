import { prisma } from "../database/postgresql-prisma";
const data = [
    {
        nameArea: "Abastecimiento y Logística",
    },
    {
        nameArea: "Administración, Contabilidad y Finanzas",
    },
    {
        nameArea: "Aduana y Comercio Exterior",
    },
    {
        nameArea: "Atención al Cliente, Call Center y Telemarketing",
    },
    {
        nameArea: "Comercial, Ventas y Negocios",
    },
    {
        nameArea: "Comunicaciones, Relaciones Públicas y Telemarketing",
    },
    {
        nameArea: "Departamento técnico",
    },
    {
        nameArea: "Diseño y Artes Gráficas",
    },
    {
        nameArea: "Educación, Docencia e Investigación",
    },
    {
        nameArea: "Gastronomía y Turismo",
    },
    {
        nameArea: "Enfermería",
    },
    {
        nameArea: "Gerencia y Dirección General",
    },
    {
        nameArea: "Ingeniería Civil y Construcción",
    },
    {
        nameArea: "Ingenierias",
    },
    {
        nameArea: "Legales",
    },
    {
        nameArea: "Marketing y Publicidad",
    },
    {
        nameArea: "Medicina, Salud y Ciencias",
    },
    {
        nameArea: "Recursos Humanos",
    },
    {
        nameArea: "Tecnología, Sistemas y Telecomunicaciones",
    },
    {
        nameArea: "Oficios y Otros",
    }

]
async function seed() {

    await prisma.area.deleteMany({});

    data.forEach(async (item) => {
        await prisma.area.create({
            data: item
        })
    });

    console.log("Seed Area done!");
}



(() => {
    seed();
})();


// [
//     {
//         "id": "0b2f0800-7111-4b8b-817c-7134027439f2",
//         "jobTitle": "Chef para restaurante 5 estrellas",
//         "jobDescription": "Necesitamos chef para restaurante capacitado",
//         "jobModality": "presencial",
//         "createdAt": "2024-03-18T00:13:20.328Z",
//         "updatedAt": "2024-03-18T00:13:20.328Z",
//         "areaId": "96fb439d-b212-41f3-b76d-c8aff088f4dc",
//         "companyId": "5ae7c300-f11f-4453-b72a-e134828679e2",
//         "jobTags": [],
//         "jobMinSalary": null,
//         "jobMaxSalary": null,
//         "jobWorkLoad": null,
//         "jobLevel": null,
//         "jobLocation": null,
//         "jobVacancies": 1
//     },
//     {
//         "id": "cc020d5d-185c-40a0-8649-1c4e46f29527",
//         "jobTitle": "Abogado Corporativo",
//         "jobDescription": "Excelente oportunidad para un abogado con experiencia en el sector corporativo",
//         "jobModality": "presencial",
//         "createdAt": "2024-03-18T00:14:12.064Z",
//         "updatedAt": "2024-03-18T00:14:12.064Z",
//         "areaId": "67b80db4-3508-40d5-a540-62b5a51fc0a4",
//         "companyId": "5ae7c300-f11f-4453-b72a-e134828679e2",
//         "jobTags": [],
//         "jobMinSalary": null,
//         "jobMaxSalary": null,
//         "jobWorkLoad": null,
//         "jobLevel": null,
//         "jobLocation": null,
//         "jobVacancies": 1
//     },
//     {
//         "id": "a3a0fe12-a35d-4b04-957f-9d8d4995a80f",
//         "jobTitle": "Especialista en Marketing Digital",
//         "jobDescription": "Se busca un profesional en marketing digital para estrategias innovadoras",
//         "jobModality": "presencial",
//         "createdAt": "2024-03-18T03:44:59.988Z",
//         "updatedAt": "2024-03-18T03:44:59.988Z",
//         "areaId": "416f8671-cb85-4f84-b14b-318e4f22eb8e",
//         "companyId": "5ae7c300-f11f-4453-b72a-e134828679e2",
//         "jobTags": [],
//         "jobMinSalary": null,
//         "jobMaxSalary": null,
//         "jobWorkLoad": null,
//         "jobLevel": null,
//         "jobLocation": null,
//         "jobVacancies": 1
//     },
//     {
//         "id": "dbe5e779-3a8c-4e71-ad89-9cccc2eef8a0",
//         "jobTitle": "Médico Cardiólogo",
//         "jobDescription": "Oportunidad para un cardiólogo calificado en una prestigiosa clínica",
//         "jobModality": "presencial",
//         "createdAt": "2024-03-18T03:45:57.330Z",
//         "updatedAt": "2024-03-18T03:45:57.330Z",
//         "areaId": "665ab51d-1123-4d1d-a062-29eacf0df217",
//         "companyId": "5ae7c300-f11f-4453-b72a-e134828679e2",
//         "jobTags": [],
//         "jobMinSalary": null,
//         "jobMaxSalary": null,
//         "jobWorkLoad": null,
//         "jobLevel": null,
//         "jobLocation": null,
//         "jobVacancies": 1
//     },
//     {
//         "id": "0a05a04c-27cc-48cf-81ef-e223ead92792",
//         "jobTitle": "Ingeniero de Software Senior",
//         "jobDescription": "Se busca un ingeniero de software con experiencia para liderar proyectos de desarrollo",
//         "jobModality": "presencial",
//         "createdAt": "2024-03-18T03:46:31.058Z",
//         "updatedAt": "2024-03-18T03:46:31.058Z",
//         "areaId": "6067123d-5dcf-4ee3-8e4a-e86f49c7af7f",
//         "companyId": "5ae7c300-f11f-4453-b72a-e134828679e2",
//         "jobTags": [],
//         "jobMinSalary": null,
//         "jobMaxSalary": null,
//         "jobWorkLoad": null,
//         "jobLevel": null,
//         "jobLocation": null,
//         "jobVacancies": 1
//     },
//     {
//         "id": "9fa621a7-0d2b-4aaa-bec1-efeb712b3aff",
//         "jobTitle": "Diseñador Gráfico Senior",
//         "jobDescription": "Se busca un diseñador gráfico con experiencia para liderar proyectos creativos",
//         "jobModality": "presencial",
//         "createdAt": "2024-03-18T03:49:11.293Z",
//         "updatedAt": "2024-03-18T03:49:11.293Z",
//         "areaId": "d37a9845-8355-4af0-93fd-847d4416e97a",
//         "companyId": "5ae7c300-f11f-4453-b72a-e134828679e2",
//         "jobTags": [],
//         "jobMinSalary": null,
//         "jobMaxSalary": null,
//         "jobWorkLoad": null,
//         "jobLevel": null,
//         "jobLocation": null,
//         "jobVacancies": 1
//     },
//     {
//         "id": "68cd1cd4-c86f-4272-bbac-3952c3b7c915",
//         "jobTitle": "Ingeniero Civil para Proyectos de Infraestructura",
//         "jobDescription": "Oportunidad para un ingeniero civil con experiencia en grandes proyectos de infraestructura",
//         "jobModality": "presencial",
//         "createdAt": "2024-03-18T03:53:16.139Z",
//         "updatedAt": "2024-03-18T03:53:16.139Z",
//         "areaId": "fdc0e5ea-e79f-4105-8ed2-37ab1e9c5db3",
//         "companyId": "099aad1d-8ffa-4003-83c2-b92b73fd666f",
//         "jobTags": [],
//         "jobMinSalary": null,
//         "jobMaxSalary": null,
//         "jobWorkLoad": null,
//         "jobLevel": null,
//         "jobLocation": null,
//         "jobVacancies": 1
//     },
//     {
//         "id": "0f06ebe9-b334-4903-a708-7173ed025e26",
//         "jobTitle": "Médico Pediatra",
//         "jobDescription": "Se busca un médico pediatra para consultorio privado",
//         "jobModality": "presencial",
//         "createdAt": "2024-03-18T03:54:02.758Z",
//         "updatedAt": "2024-03-18T03:54:02.758Z",
//         "areaId": "665ab51d-1123-4d1d-a062-29eacf0df217",
//         "companyId": "099aad1d-8ffa-4003-83c2-b92b73fd666f",
//         "jobTags": [],
//         "jobMinSalary": null,
//         "jobMaxSalary": null,
//         "jobWorkLoad": null,
//         "jobLevel": null,
//         "jobLocation": null,
//         "jobVacancies": 1
//     },
//     {
//         "id": "7070776c-8443-4d4f-9a19-68769833eb72",
//         "jobTitle": "Analista Financiero",
//         "jobDescription": "Excelente oportunidad para un analista financiero con habilidades analíticas sólidas",
//         "jobModality": "presencial",
//         "createdAt": "2024-03-18T03:54:52.468Z",
//         "updatedAt": "2024-03-18T03:54:52.468Z",
//         "areaId": "870c439a-312c-4882-b167-87b13ce10816",
//         "companyId": "099aad1d-8ffa-4003-83c2-b92b73fd666f",
//         "jobTags": [],
//         "jobMinSalary": null,
//         "jobMaxSalary": null,
//         "jobWorkLoad": null,
//         "jobLevel": null,
//         "jobLocation": null,
//         "jobVacancies": 1
//     },
//     {
//         "id": "51004a01-a19b-4c0b-a8c4-64c24ce80ee4",
//         "jobTitle": "Especialista en Recursos Humanos",
//         "jobDescription": "Oportunidad para un profesional en recursos humanos para gestionar el talento en la empresa",
//         "jobModality": "presencial",
//         "createdAt": "2024-03-18T03:55:22.857Z",
//         "updatedAt": "2024-03-18T03:55:22.857Z",
//         "areaId": "6e10473e-54ad-4a9a-9b41-52f9fe12638b",
//         "companyId": "099aad1d-8ffa-4003-83c2-b92b73fd666f",
//         "jobTags": [],
//         "jobMinSalary": null,
//         "jobMaxSalary": null,
//         "jobWorkLoad": null,
//         "jobLevel": null,
//         "jobLocation": null,
//         "jobVacancies": 1
//     },
//     {
//         "id": "ca59a777-5961-4802-b96d-7440e41a140c",
//         "jobTitle": "Desarrollador de Aplicaciones Móviles",
//         "jobDescription": "Se busca un desarrollador con experiencia en el desarrollo de aplicaciones móviles para Android y iOS",
//         "jobModality": "presencial",
//         "createdAt": "2024-03-18T03:56:00.344Z",
//         "updatedAt": "2024-03-18T03:56:00.344Z",
//         "areaId": "6067123d-5dcf-4ee3-8e4a-e86f49c7af7f",
//         "companyId": "099aad1d-8ffa-4003-83c2-b92b73fd666f",
//         "jobTags": [],
//         "jobMinSalary": null,
//         "jobMaxSalary": null,
//         "jobWorkLoad": null,
//         "jobLevel": null,
//         "jobLocation": null,
//         "jobVacancies": 1
//     }
// ]