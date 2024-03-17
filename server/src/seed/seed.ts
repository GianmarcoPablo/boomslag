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