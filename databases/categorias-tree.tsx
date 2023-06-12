import { Categoria } from "@/models/Categoria";



export let rubrosData = [
    {
        code: 'vivienda',
        name: 'Vivienda',
        children: [
            'departamentos',
            'casas',
        ]
    },
    {
        code: 'sales',
        name: 'Compra y Venta',
        children: [
            'rodados'
        ]
    },
    {
        code: 'jobs',
        name: 'Bolsa de trabajo',
        children: ['finance'],
    }
];



export let categoriasData = [
    {
        code: 'departamentos',
        name: 'Departamentos',
        children: [],
    },
    {
        code: 'casas',
        name: 'Casas',
        children: [
            'casas-de-campo',
            'casas-familiares'
        ]
    },
    {
        code: 'rodados',
        name: 'Vehículos',
        children: [
            'automoviles',
            'trucks'
        ],
    },
    {
        code: 'finance',
        name: 'Contabilidad y Finanzas',
        children: [
            'contador', 
            'administrativo', 
            'tesorero'
        ]
    }
]


export let subcategoriasData = [
    {
        code: "automoviles",
        name: "Automóviles",         
    },
    {
        code: "trucks",
        name: "Camionetas",        
    },
    {
        code: 'casas-de-campo',
        name: 'Casas de campo',
    },
    {
        code: 'casas-familiares',
        name: 'Casas familiares'
    },
    {
        code: 'contador',
        name: 'Contador',
    },
    {
        code: 'administrativo',
        name: 'Administrativo',

    },
    {
        code: 'tesorero',
        name: 'Tesorero',
    }
]






