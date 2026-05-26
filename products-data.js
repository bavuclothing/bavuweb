// BAVU ATHLETICS - BASE DE DATOS CENTRALIZADA DE PRODUCTOS
// Modifica este archivo una sola vez para añadir, quitar o cambiar productos en toda la web.

const BAVU_INVENTORY = [
    {
        id: "origin-emerald",
        title: "The Origin Tee<br>Emerald Edition",
        price: "14.90 €",
        description: "Diseñada estratégicamente para construir la V-Taper perfecta. Color verde esmeralda profundo con el logo central de la marca.",
        mainImage: "img/muscle-tee-black.jpg",
        thumbnails: ["img/muscle-tee-black.jpg"],
        colors: [
            { hex: "#1a4231", name: "Forest Green", id: "origin-emerald" },
            { hex: "#121212", name: "Obsidian Black", id: "origin-blackout" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir The Origin Tee Emerald Edition.",
        forMen: true,
        forWomen: false
    },
    {
        id: "origin-blackout",
        title: "The Origin Tee<br>Blackout",
        price: "14.90 €",
        description: "Nuestra camiseta fundacional. Construye la V-Taper perfecta ajustándose en pecho y brazos.",
        mainImage: "img/camiseta-negra.jpg",
        thumbnails: ["img/camiseta-negra.jpg"],
        colors: [
            { hex: "#121212", name: "Obsidian Black", id: "origin-blackout" },
            { hex: "#1a4231", name: "Forest Green", id: "origin-emerald" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir The Origin Tee Blackout.",
        forMen: true,
        forWomen: false
    },
    {
        id: "thermal-obsidian",
        title: "Thermal Core<br>Pullover Obsidian",
        price: "13.90 €",
        description: "Sudadera ligera de rendimiento con cremallera de 1/4. Ideal para calentamientos exigentes y mantener el pump.",
        mainImage: "img/larga-negra.jpg",
        thumbnails: ["img/larga-negra.jpg"],
        colors: [
            { hex: "#121212", name: "Obsidian Black", id: "thermal-obsidian" },
            { hex: "#8c8f94", name: "Ash Grey", id: "thermal-ash" }
        ],
        waMessage: "Hola equipo BAVU! Me interesa el Thermal Core Pullover Obsidian.",
        forMen: true,
        forWomen: false
    },
    {
        id: "thermal-ash",
        title: "Thermal Core<br>Pullover Ash",
        price: "13.90 €",
        description: "Sudadera ligera de rendimiento con cremallera de 1/4. Transpirable, con agujeros para pulgares y ajuste atlético.",
        mainImage: "img/larga-gris.jpg",
        thumbnails: ["img/larga-gris.jpg", "img/larga-gris-2.jpg"],
        colors: [
            { hex: "#8c8f94", name: "Ash Grey", id: "thermal-ash" },
            { hex: "#121212", name: "Obsidian Black", id: "thermal-obsidian" }
        ],
        waMessage: "Hola equipo BAVU! Me interesa el Thermal Core Pullover Ash.",
        forMen: true,
        forWomen: false
    },
    {
        id: "short-black",
        title: "The Foundation Short<br>Jet Black",
        price: "11.90 €",
        description: "Pantalón de entrenamiento híbrido. Tejido ligero y fluido para máxima movilidad en días pesados de pierna.",
        mainImage: "img/pantalones-negros.jpg",
        thumbnails: ["img/pantalones-negros.jpg"],
        colors: [
            { hex: "#000000", name: "Jet Black", id: "short-black" },
            { hex: "#4b4e53", name: "Iron Grey", id: "short-grey" }
        ],
        waMessage: "Buenas! Quería consultar el stock de The Foundation Short Jet Black.",
        forMen: true,
        forWomen: false
    },
    {
        id: "short-grey",
        title: "The Foundation Short<br>Iron Grey",
        price: "11.90 €",
        description: "Pantalón de entrenamiento técnico y versátil. Longitud estética ideal para lucir pierna sin sacrificar comodidad.",
        mainImage: "img/pantalones-grises.jpg",
        thumbnails: ["img/pantalones-grises.jpg"],
        colors: [
            { hex: "#4b4e53", name: "Iron Grey", id: "short-grey" },
            { hex: "#000000", name: "Jet Black", id: "short-black" }
        ],
        waMessage: "Hola equipo BAVU! Me interesa The Foundation Short Iron Grey.",
        forMen: true,
        forWomen: false
    },
    {
        id: "tank-blackout",
        title: "Origin Ribbed Tank<br>Blackout",
        price: "7.90 €",
        description: "Camiseta de tirantes con tejido acanalado premium. Elasticidad y ajuste óptimo para marcar la espalda y hombros.",
        mainImage: "img/tirantes.jpg",
        thumbnails: ["img/tirantes.jpg"],
        colors: [{ hex: "#121212", name: "Obsidian Black", id: "tank-blackout" }],
        waMessage: "Buenas! Quería consultar disponibilidad de la Origin Ribbed Tank Blackout.",
        forMen: true,
        forWomen: false
    },
    {
        id: "pump-cover-blackout",
        title: "Origin Pump Cover<br>Blackout",
        price: "19.90 €",
        description: "Sudadera oversize heavyweight. La capa inicial perfecta y gruesa para romper a sudar rápido y ocultar tu físico hasta el momento clave.",
        mainImage: "img/sudadera.jpg",
        thumbnails: ["img/sudadera.jpg"],
        colors: [{ hex: "#121212", name: "Obsidian Black", id: "pump-cover-blackout" }],
        waMessage: "Hola! Quisiera saber si tenéis stock del Origin Pump Cover Blackout.",
        forMen: true,
        forWomen: false
    },
    {
        id: "compression-obsidian",
        title: "BAVU Second Skin<br>Obsidian",
        price: "9.90 €",
        description: "Camiseta técnica de compresión. Actúa como tu armadura personal, con costuras ranglán que realzan visualmente los hombros.",
        mainImage: "img/compresion.jpg",
        thumbnails: ["img/compresion.jpg"],
        colors: [{ hex: "#121212", name: "Obsidian Black", id: "compression-obsidian" }],
        waMessage: "Buenas! Quiero pedir la camiseta BAVU Second Skin Obsidian.",
        forMen: true,
        forWomen: false
    },
    {
        id: "socks-white",
        title: "Origin Crew Sock<br>Pure White (3)",
        price: "8.90 €",
        description: "Pack de 3 pares. Calcetines estéticos a media pantorrilla con zonas de compresión y tejido de alta densidad para máxima durabilidad.",
        mainImage: "img/calcetines.jpg",
        thumbnails: ["img/calcetines.jpg"],
        colors: [{ hex: "#ffffff", name: "Pure White", id: "socks-white" }],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir el pack de calcetines Origin Crew Sock.",
        forMen: true,
        forWomen: true // Unisex / va en ambas páginas
    },
    // PRODUCTOS DE EJEMPLO PARA LA SECCIÓN DE MUJER
    {
        id: "legging-onyx",
        title: "Seamless Legging<br>Onyx Black",
        price: "22.90 €",
        description: "Mallas de compresión sin costuras con efecto moldeador de alta sujeción. Cintura alta que no se desliza durante las sentadillas pesadas.",
        mainImage: "img/shortsleeve-black.jpg",
        thumbnails: ["img/shortsleeve-black.jpg"],
        colors: [{ hex: "#121212", name: "Onyx Black", id: "legging-onyx" }],
        waMessage: "Hola BAVU! Me interesan los Seamless Leggings Onyx de mujer.",
        forMen: false,
        forWomen: true
    },
    {
        id: "bra-onyx",
        title: "Adapt Sports Bra<br>Onyx Black",
        price: "16.90 €",
        description: "Sujetador deportivo de impacto medio-alto con tirantes cruzados ajustables. Espalda descubierta estética para lucir el dorsal.",
        mainImage: "img/shortsleeve-wine.jpg",
        thumbnails: ["img/shortsleeve-wine.jpg"],
        colors: [{ hex: "#121212", name: "Onyx Black", id: "bra-onyx" }],
        waMessage: "Buenas! Quería consultar stock del Adapt Sports Bra de mujer.",
        forMen: false,
        forWomen: true
    },
    {
        id: "crop-ash",
        title: "Origin Crop Top<br>Ash Grey",
        price: "14.90 €",
        description: "Crop top de ajuste ceñido fabricado en tejido acanalado ultra elástico. Transpirable, suave y de secado rápido.",
        mainImage: "img/shortsleeve-lightpurple.jpg",
        thumbnails: ["img/shortsleeve-lightpurple.jpg"],
        colors: [{ hex: "#8c8f94", name: "Ash Grey", id: "crop-ash" }],
        waMessage: "Hola equipo BAVU! Quiero pedir el Origin Crop Top Ash de mujer.",
        forMen: false,
        forWomen: true
    },
    {
        id: "crop-ash",
        title: "Origin Crop Top<br>Ash Grey",
        price: "14.90 €",
        description: "Crop top de ajuste ceñido fabricado en tejido acanalado ultra elástico. Transpirable, suave y de secado rápido.",
        mainImage: "img/shorts-black.jpg",
        thumbnails: ["img/shorts-black.jpg"],
        colors: [{ hex: "#8c8f94", name: "Ash Grey", id: "crop-ash" }],
        waMessage: "Hola equipo BAVU! Quiero pedir el Origin Crop Top Ash de mujer.",
        forMen: false,
        forWomen: true
    },
    {
        id: "crop-ash",
        title: "Origin Crop Top<br>Ash Grey",
        price: "14.90 €",
        description: "Crop top de ajuste ceñido fabricado en tejido acanalado ultra elástico. Transpirable, suave y de secado rápido.",
        mainImage: "img/shorts-wine.jpg",
        thumbnails: ["img/shorts-wine.jpg"],
        colors: [{ hex: "#8c8f94", name: "Ash Grey", id: "crop-ash" }],
        waMessage: "Hola equipo BAVU! Quiero pedir el Origin Crop Top Ash de mujer.",
        forMen: false,
        forWomen: true
    },
    {
        id: "crop-ash",
        title: "Origin Crop Top<br>Ash Grey",
        price: "14.90 €",
        description: "Crop top de ajuste ceñido fabricado en tejido acanalado ultra elástico. Transpirable, suave y de secado rápido.",
        mainImage: "img/shorts-lightblue.jpg",
        thumbnails: ["img/shorts-lightblue.jpg"],
        colors: [{ hex: "#8c8f94", name: "Ash Grey", id: "crop-ash" }],
        waMessage: "Hola equipo BAVU! Quiero pedir el Origin Crop Top Ash de mujer.",
        forMen: false,
        forWomen: true
    },
    {
        id: "crop-ash",
        title: "Origin Crop Top<br>Ash Grey",
        price: "14.90 €",
        description: "Crop top de ajuste ceñido fabricado en tejido acanalado ultra elástico. Transpirable, suave y de secado rápido.",
        mainImage: "img/leggings-black.jpg",
        thumbnails: ["img/leggings-black.jpg"],
        colors: [{ hex: "#8c8f94", name: "Ash Grey", id: "crop-ash" }],
        waMessage: "Hola equipo BAVU! Quiero pedir el Origin Crop Top Ash de mujer.",
        forMen: false,
        forWomen: true
    },
    {
        id: "crop-ash",
        title: "Origin Crop Top<br>Ash Grey",
        price: "14.90 €",
        description: "Crop top de ajuste ceñido fabricado en tejido acanalado ultra elástico. Transpirable, suave y de secado rápido.",
        mainImage: "img/leggings-wine.jpg",
        thumbnails: ["img/leggings-wine.jpg"],
        colors: [{ hex: "#8c8f94", name: "Ash Grey", id: "crop-ash" }],
        waMessage: "Hola equipo BAVU! Quiero pedir el Origin Crop Top Ash de mujer.",
        forMen: false,
        forWomen: true
    },
    {
        id: "crop-ash",
        title: "Origin Crop Top<br>Ash Grey",
        price: "14.90 €",
        description: "Crop top de ajuste ceñido fabricado en tejido acanalado ultra elástico. Transpirable, suave y de secado rápido.",
        mainImage: "img/leggings-lightpurple.jpg",
        thumbnails: ["img/leggings-lightpurple.jpg"],
        colors: [{ hex: "#8c8f94", name: "Ash Grey", id: "crop-ash" }],
        waMessage: "Hola equipo BAVU! Quiero pedir el Origin Crop Top Ash de mujer.",
        forMen: false,
        forWomen: true
    }
];
