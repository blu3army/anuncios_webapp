import { Categoria } from "@/models/Categoria";


let rubrosData = [
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
    }
];



let categoriasData = [
    {
        code: 'departamentos',
        name: 'Departamentos',
        children: [],
    },
    {
        code: 'casas',
        name: 'Casas',
        children: []
    },
    {
        code: 'rodados',
        name: 'Vehículos',
        children: [],
    }
]










let subcategorias : Categoria[] = [
    new Categoria({
        code: "automoviles",
        name: "Automóviles", 
    }),
    new Categoria({
        code: "trucks",
        name: "Camionetas",
    })
]

let categorias:Categoria[] = [
    new Categoria({
        code: "departamentos",
        name: "Departamentos", 
    }), 
    new Categoria({
        code: "rodados",
        name: "Vehículos",
    })
]

let rubros:Categoria[] = [
    new Categoria({
        code: "alquileres",
        name: "Alquileres",
    }),
    new Categoria({
        code: "marketplace",
        name: "Compras y Ventas",
        
    }),
    new Categoria({
        code: "trabajo",
        name: "Bolsa de trabajo",
    }),
    new Categoria({
        code: "eventos",
        name: "Eventos",
    }),
]






// subcategorias[1].addChildren(tercercategorias[0]);
// subcategorias[1].addChildren(tercercategorias[1]);

// categorias[0].addChildren(subcategorias[0]);
// categorias[1].addChildren(subcategorias[1]);


export {categorias};