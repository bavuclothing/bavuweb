const BAVU_INVENTORY = [
    {
        id: "taper_baselayer",
        title: "Taper Baselayer",
        color: "Charcoal",
        collection: "Drop 1",
        price: "20.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Una prenda de compresión técnica diseñada para ofrecer soporte muscular y optimizar la ventilación en los entrenamientos más exigentes. Su patrón estructurado combina estética underground y rendimiento funcional.

​Ajuste Taper Pro: Patrón ceñido de alta elasticidad que se adapta al contorno del torso, proporcionando una compresión uniforme que asiste a la postura y reduce la vibración muscular en levantamientos pesados.

​Paneles Hexagonales Activos: Zonas con textura micro-hexagonal integradas estratégicamente en el pecho y los hombros. Actúan como puntos de ventilación dinámica, acelerando la evaporación del sudor en las áreas de mayor acumulación de calor.

​Tejido Interlock Premium: Confeccionada con un hilado de gramaje medio que ofrece un tacto ultra suave en la piel, alta retención de la forma tras los lavados y opacidad total frente a la tensión.

​Costuras Flatlock Ergonómicas: Costuras planas reforzadas que siguen las líneas musculares para eliminar cualquier tipo de fricción o rozadura durante movimientos de recorrido completo.`,
        mainImage: "img/taper_baselayer/1.jpg",
        thumbnails: ["img/taper_baselayer/1.jpg"],
        colors: [
            { hex: "#545c61", name: "Charcoal", id: "taper_baselayer" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Taper Baselayer Charcoal.",
        forMen: true,
        forWomen: false,
        order: 100,
        relatedProducts: ["taper-tee-shadow", "taper-tee-ash", "taper-tank-blackout"]
    },
    {
        id: "taper-tee-shadow",
        title: "Taper Compression Tee",
        color: "Shadow Grey",
        collection: "Drop 1",
        price: "18.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Una camiseta de compresión de manga corta desarrollada para entrenamientos de alta intensidad. Su diseño de paneles anatómicos en contraste ofrece un ajuste de tipo segunda piel que optimiza el confort térmico y realza la línea estructural del torso.

Patrón V-Shape Estructurado: Corte técnico con paneles laterales y superiores en contraste que entallan visualmente la cintura y expanden la línea de los hombros, favoreciendo una silueta atlética sin restringir el rango de movimiento.

Tejido de Compresión Ligera: Confeccionada con un compuesto elástico transpirable que ejerce una presión óptima sobre el tren superior, mejorando la propiocepción muscular y manteniendo el core activo durante la sesión.

Mapeo de Ventilación Superior: La zona alta del pecho, trapecios y costados cuenta con un tramado microperforado de densidad variable que disipa el calor corporal rápidamente en los momentos de máximo esfuerzo.

Ajuste en Bíceps Antideslizante: Terminado de manga ceñido de compresión elástica que se fija al brazo sin oprimir, evitando que la prenda se desplace o se enrolle hacia arriba durante movimientos de tracción o flexión.

Costuras Flatlock Flexibles: Costuras planas reforzadas de perfil bajo que acompañan la elasticidad del tejido, eliminando por completo las rozaduras y la fricción sobre la piel.`,
        mainImage: "img/taper-tee-shadow/1.jpg",
        thumbnails: ["img/taper-tee-shadow/1.jpg"],
        colors: [
            { hex: "#212224", name: "Shadow Grey", id: "taper-tee-shadow" },
            { hex: "#BFC1C2", name: "Ash Grey", id: "taper-tee-ash" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Taper Compression Tee Shadow Grey.",
        forMen: true,
        forWomen: false,
        order: 200,
        relatedProducts: ["taper-tee-ash"]
    },
    {
        id: "taper-tee-ash",
        title: "Taper Compression Tee",
        color: "Ash Grey",
        collection: "Drop 1",
        price: "18.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Una camiseta de compresión de manga corta desarrollada para entrenamientos de alta intensidad. Su diseño de paneles anatómicos en contraste ofrece un ajuste de tipo segunda piel que optimiza el confort térmico y realza la línea estructural del torso.

Patrón V-Shape Estructurado: Corte técnico con paneles laterales y superiores en contraste que entallan visualmente la cintura y expanden la línea de los hombros, favoreciendo una silueta atlética sin restringir el rango de movimiento.

Tejido de Compresión Ligera: Confeccionada con un compuesto elástico transpirable que ejerce una presión óptima sobre el tren superior, mejorando la propiocepción muscular y manteniendo el core activo durante la sesión.

Mapeo de Ventilación Superior: La zona alta del pecho, trapecios y costados cuenta con un tramado microperforado de densidad variable que disipa el calor corporal rápidamente en los momentos de máximo esfuerzo.

Ajuste en Bíceps Antideslizante: Terminado de manga ceñido de compresión elástica que se fija al brazo sin oprimir, evitando que la prenda se desplace o se enrolle hacia arriba durante movimientos de tracción o flexión.

Costuras Flatlock Flexibles: Costuras planas reforzadas de perfil bajo que acompañan la elasticidad del tejido, eliminando por completo las rozaduras y la fricción sobre la piel.`,
        mainImage: "img/taper-tee-ash/1.jpg",
        thumbnails: ["img/taper-tee-ash/1.jpg"],
        colors: [
            { hex: "#BFC1C2", name: "Ash Grey", id: "taper-tee-ash" },
            { hex: "#212224", name: "Shadow Grey", id: "taper-tee-shadow" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Taper Compression Tee Ash Grey.",
        forMen: true,
        forWomen: false,
        order: 300,
        relatedProducts: ["taper-tee-shadow"]
    },
    {
        id: "taper-tank-blackout",
        title: "Ribbed Tank",
        color: "Blackout",
        collection: "Drop 1",
        price: "11.90 €",
        discount: 10, 
        outOfStockSizes: ["M","XL"],
        description: `Una camiseta de tirantes de corte atlético confeccionada en tejido acanalado de alta elasticidad. Su patrón está diseñado específicamente para liberar la articulación del hombro y acentuar la línea de la espalda en entrenamientos de tracción.

Tejido Acanalado de Alta Recuperación: Confeccionada con un punto acanalado (rib) premium de gramaje medio. Su estructura elástica vertical permite que la prenda se ciña al cuerpo sin apretar y, lo más importante, recupera su forma original tras el lavado sin estirarse ni quedar holgada.

Corte Dorsal Taper (Y-Back): El diseño de la espalda cuenta con un tirante central estrecho que deja libres las escápulas. Este patrón no solo elimina cualquier restricción al hacer remos o dominadas, sino que potencia visualmente la silueta en V del torso.

Pectoral y Sisa Ajustados: Sisas con una caída limpia que evita bolsas de tela laterales bajo los brazos y un cuello redondo con la profundidad justa para ofrecer comodidad en días pesados de press de banca.

Algodón Elástico Transpirable: Combinación de fibras que aporta un tacto suave y natural sobre la piel, absorbiendo la humedad de forma eficiente y manteniendo el cuerpo fresco durante toda la sesión.`,
        mainImage: "img/taper-tank-blackout/1.png",
        thumbnails: ["img/taper-tank-blackout/1.png","img/taper-tank-blackout/2.png"],
        colors: [
            { hex: "#121212", name: "Obsidian Black", id: "taper-tank-blackout" },
            { hex: "#61131B", name: "Burgundy Wine", id: "taper-tank-burgundy" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Ribbed Tank Blackout.",
        forMen: true,
        forWomen: false,
        order: 400,
        relatedProducts: ["taper-tank-burgundy"]
    },
    {
        id: "taper-tank-burgundy",
        title: "Ribbed Tank",
        color: "Oxblood",
        collection: "Drop 1",
        price: "11.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Una camiseta de tirantes de corte atlético confeccionada en tejido acanalado de alta elasticidad. Su patrón está diseñado específicamente para liberar la articulación del hombro y acentuar la línea de la espalda en entrenamientos de tracción.

Tejido Acanalado de Alta Recuperación: Confeccionada con un punto acanalado (rib) premium de gramaje medio. Su estructura elástica vertical permite que la prenda se ciña al cuerpo sin apretar y, lo más importante, recupera su forma original tras el lavado sin estirarse ni quedar holgada.

Corte Dorsal Taper (Y-Back): El diseño de la espalda cuenta con un tirante central estrecho que deja libres las escápulas. Este patrón no solo elimina cualquier restricción al hacer remos o dominadas, sino que potencia visualmente la silueta en V del torso.

Pectoral y Sisa Ajustados: Sisas con una caída limpia que evita bolsas de tela laterales bajo los brazos y un cuello redondo con la profundidad justa para ofrecer comodidad en días pesados de press de banca.

Algodón Elástico Transpirable: Combinación de fibras que aporta un tacto suave y natural sobre la piel, absorbiendo la humedad de forma eficiente y manteniendo el cuerpo fresco durante toda la sesión.`,
        mainImage: "img/taper-tank-burgundy/1.jpg",
        thumbnails: ["img/taper-tank-burgundy/1.jpg"],
        colors: [
            { hex: "#121212", name: "Obsidian Black", id: "taper-tank-blackout" },
            { hex: "#61131B", name: "Burgundy Wine", id: "taper-tank-burgundy" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Ribbed Tank Oxblood.",
        forMen: true,
        forWomen: false,
        order: 500,
        relatedProducts: ["taper-tank-blackout"]
    },
    {
        id: "taper-halfzip-forest",
        title: "Half-Zip",
        color: "Forest Green",
        collection: "Drop 1",
        price: "26.90 €",
        discount: 25, 
        outOfStockSizes: ["S"],
        description: `Una sudadera técnica de ajuste atlético que combina compresión ligera, aislamiento térmico y gestión eficiente de la humedad. Su patrón estructurado con media cremallera y capucha de perfil bajo la convierte en la prenda idónea para transiciones de temporada o fases de calentamiento intenso.

Cierre de Media Cremallera (Half-Zip): Incorpora una cremallera frontal invertida con tirador reforzado que permite regular la ventilación de forma instantánea a medida que sube la intensidad del entrenamiento.

Mapeo de Paneles Texturizados: Zonas en contraste Forest Green dispuestas estratégicamente en el pecho superior, hombros y antebrazos. Su entramado elástico texturizado favorece la elasticidad bidireccional y optimiza la transpiración en los puntos de mayor fricción.

Capucha Anatómica de Perfil Bajo: Diseño ergonómico de tres paneles que se ciñe a la cabeza sin restringir la visión periférica y permanece fija durante movimientos dinámicos o carreras.

Ajuste Taper de Confort Térmico: Confeccionada con un hilado técnico elástico de gramaje medio, ligeramente superior al de una camiseta base. Aporta retención de calor muscular sin añadir volumen ni limitar el rango de movimiento de los brazos.

Costuras Activas Reforzadas: Costuras planas distribuidas de manera anatómica para reducir la resistencia al viento y eliminar cualquier riesgo de rozadura bajo tensión.`,
        mainImage: "img/taper-halfzip-forest/1.jpg",
        thumbnails: ["img/taper-halfzip-forest/1.jpg"],
        colors: [
            { hex: "#1a4231", name: "Forest Green", id: "taper-halfzip-forest" },
            { hex: "#121212", name: "Obsidian Black", id: "taper-halfzip-blackout" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Half Zip Forest Green.",
        forMen: true,
        forWomen: false,
        order: 600,
        relatedProducts: ["taper_baselayer", "taper-tee-shadow", "taper-tee-ash"]
    },
    {
        id: "split-short-black",
        title: "Split Mesh Short",
        color: "Jet Black",
        collection: "Drop 1",
        price: "12.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Un pantalón corto de entrenamiento técnico desarrollado específicamente para maximizar el rango de movimiento. Su estructura de malla ligera y su icónica apertura lateral lo convierten en la prenda definitiva para sesiones pesadas de pierna.

Tejido Mesh de Alta Transpiración: Confeccionado con una malla microperforada de alta resistencia que permite un flujo de aire constante, manteniendo la prenda ligera, seca y libre de humedad incluso en entrenamientos intensos.

Apertura Lateral Curva (Split Hem): Dobladillo redondeado con una sutil apertura en el lateral del muslo. Este diseño elimina la fricción del tejido contra el cuádriceps durante la flexión completa en sentadillas profundas o prensa.

Cintura Elástica con Cordón Técnico: Banda elástica acanalada de ajuste firme que no se desplaza, complementada con un cordón plano exterior para personalizar la sujeción según tus necesidades.

Bolsillos Laterales Funcionales: Dos bolsillos de corte vertical integrados en las costuras para guardar tus pertenencias básicas antes o después de la sesión, manteniendo una silueta limpia.`,
        mainImage: "img/split-short-black/1.jpg",
        thumbnails: ["img/split-short-black/1.jpg"],
        colors: [
            { hex: "#000000", name: "Jet Black", id: "split-short-black" },
            { hex: "#4b4e53", name: "Iron Grey", id: "split-short-grey" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Split Mesh Short Jet Black.",
        forMen: true,
        forWomen: false,
        order: 700,
        relatedProducts: ["split-short-grey"]
    },
    {
        id: "split-short-grey",
        title: "Split Mesh Short",
        color: "Iron Grey",
        collection: "Drop 1",
        price: "12.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Un pantalón corto de entrenamiento técnico desarrollado específicamente para maximizar el rango de movimiento. Su estructura de malla ligera y su icónica apertura lateral lo convierten en la prenda definitiva para sesiones pesadas de pierna.

Tejido Mesh de Alta Transpiración: Confeccionado con una malla microperforada de alta resistencia que permite un flujo de aire constante, manteniendo la prenda ligera, seca y libre de humedad incluso en entrenamientos intensos.

Apertura Lateral Curva (Split Hem): Dobladillo redondeado con una sutil apertura en el lateral del muslo. Este diseño elimina la fricción del tejido contra el cuádriceps durante la flexión completa en sentadillas profundas o prensa.

Cintura Elástica con Cordón Técnico: Banda elástica acanalada de ajuste firme que no se desplaza, complementada con un cordón plano exterior para personalizar la sujeción según tus necesidades.

Bolsillos Laterales Funcionales: Dos bolsillos de corte vertical integrados en las costuras para guardar tus pertenencias básicas antes o después de la sesión, manteniendo una silueta limpia.`,
        mainImage: "img/split-short-grey/1.jpg",
        thumbnails: ["img/split-short-grey/1.jpg"],
        colors: [
            { hex: "#4b4e53", name: "Iron Grey", id: "split-short-grey" },
            { hex: "#000000", name: "Jet Black", id: "split-short-black" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Split Mesh Short Iron Grey.",
        forMen: true,
        forWomen: false,
        order: 800,
        relatedProducts: ["split-short-black"]
    },
    {
        id: "heavy-tee-blackout",
        title: "Heavyweight Oversized Tee",
        color: "Obsidian Black",
        collection: "Drop 1",
        price: "15.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Una camiseta de corte marcadamente oversize y silueta cuadrada (boxy fit), confeccionada en algodón pesado de máxima durabilidad. Diseñada para ofrecer comodidad total, volumen estético y una caída limpia que mantiene la forma en cualquier situación.

Algodón Heavyweight Premium: Tejido de alto gramaje que aporta un tacto robusto, cuerpo a la prenda y una caída pesada excelente. Resiste el uso diario y los lavados intensivos sin perder su estructura.

Corte Boxy con Hombros Caídos: Patrón holgado de estética urbana con costuras caídas en los hombros y mangas amplias que llegan cerca del codo, garantizando total libertad de movimiento en días de torso.

Cuello Redondo Grueso y Cerrado: Remate de cuello acanalado (rib) de grosor ancho y ajuste ceñido. Este detalle técnico evita que el cuello se deforme o se "asombre" con el paso del tiempo, manteniendo un aspecto pulcro y estructurado.

Opacidad y Densidad Total: Su trenzado denso asegura que la prenda sea completamente opaca en todos sus colores (incluido el Pure White), bloqueando transparencias bajo tensión o sudoración.`,
        mainImage: "img/heavy-tee-blackout/1.jpg",
        thumbnails: ["img/heavy-tee-blackout/1.jpg"],
        colors: [
            { hex: "#121212", name: "Obsidian Black", id: "heavy-tee-blackout" },
            { hex: "#4B533F", name: "Olive Green", id: "heavy-tee-olive" },
            { hex: "#ffffff", name: "Pure White", id: "heavy-tee-white" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Heavyweight Oversized Tee Obsidian Black.",
        forMen: true,
        forWomen: false,
        order: 900,
        relatedProducts: ["heavy-tee-olive", "heavy-tee-white"]
    },
    {
        id: "heavy-tee-olive",
        title: "Heavyweight Oversized Tee",
        color: "Olive Green",
        collection: "Drop 1",
        price: "15.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Una camiseta de corte marcadamente oversize y silueta cuadrada (boxy fit), confeccionada en algodón pesado de máxima durabilidad. Diseñada para ofrecer comodidad total, volumen estético y una caída limpia que mantiene la forma en cualquier situación.

Algodón Heavyweight Premium: Tejido de alto gramaje que aporta un tacto robusto, cuerpo a la prenda y una caída pesada excelente. Resiste el uso diario y los lavados intensivos sin perder su estructura.

Corte Boxy con Hombros Caídos: Patrón holgado de estética urbana con costuras caídas en los hombros y mangas amplias que llegan cerca del codo, garantizando total libertad de movimiento en días de torso.

Cuello Redondo Grueso y Cerrado: Remate de cuello acanalado (rib) de grosor ancho y ajuste ceñido. Este detalle técnico evita que el cuello se deforme o se "asombre" con el paso del tiempo, manteniendo un aspecto pulcro y estructurado.

Opacidad y Densidad Total: Su trenzado denso asegura que la prenda sea completamente opaca en todos sus colores (incluido el Pure White), bloqueando transparencias bajo tensión o sudoración.`,
        mainImage: "img/heavy-tee-olive/1.jpg",
        thumbnails: ["img/heavy-tee-olive/1.jpg"],
        colors: [
            { hex: "#4B533F", name: "Olive Green", id: "heavy-tee-olive" },
            { hex: "#121212", name: "Obsidian Black", id: "heavy-tee-blackout" },
            { hex: "#ffffff", name: "Pure White", id: "heavy-tee-white" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Heavyweight Oversized Tee Olive Green.",
        forMen: true,
        forWomen: false,
        order: 1000,
        relatedProducts: ["heavy-tee-blackout", "heavy-tee-white"]
    },
    {
        id: "heavy-tee-white",
        title: "Heavyweight Oversized Tee",
        color: "Pure White",
        collection: "Drop 1",
        price: "15.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Una camiseta de corte marcadamente oversize y silueta cuadrada (boxy fit), confeccionada en algodón pesado de máxima durabilidad. Diseñada para ofrecer comodidad total, volumen estético y una caída limpia que mantiene la forma en cualquier situación.

Algodón Heavyweight Premium: Tejido de alto gramaje que aporta un tacto robusto, cuerpo a la prenda y una caída pesada excelente. Resiste el uso diario y los lavados intensivos sin perder su estructura.

Corte Boxy con Hombros Caídos: Patrón holgado de estética urbana con costuras caídas en los hombros y mangas amplias que llegan cerca del codo, garantizando total libertad de movimiento en días de torso.

Cuello Redondo Grueso y Cerrado: Remate de cuello acanalado (rib) de grosor ancho y ajuste ceñido. Este detalle técnico evita que el cuello se deforme o se "asombre" con el paso del tiempo, manteniendo un aspecto pulcro y estructurado.

Opacidad y Densidad Total: Su trenzado denso asegura que la prenda sea completamente opaca en todos sus colores (incluido el Pure White), bloqueando transparencias bajo tensión o sudoración.`,
        mainImage: "img/heavy-tee-white/1.jpg",
        thumbnails: ["img/heavy-tee-white/1.jpg"],
        colors: [
            { hex: "#ffffff", name: "Pure White", id: "heavy-tee-white" },
            { hex: "#121212", name: "Obsidian Black", id: "heavy-tee-blackout" },
            { hex: "#4B533F", name: "Olive Green", id: "heavy-tee-olive" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Heavyweight Oversized Tee Pure White.",
        forMen: true,
        forWomen: false,
        order: 1100,
        relatedProducts: ["heavy-tee-blackout", "heavy-tee-olive"]
    },
    {
        id: "heavy-hoodie-blackout",
        title: "Heavyweight Oversized Hoodie",
        color: "Obsidian Black",
        collection: "Drop 01",
        price: "29.90 €", 
        discount: 0, 
        outOfStockSizes: [],
        description: `Una sudadera con capucha de silueta marcadamente oversize y estructura cuadrada (boxy fit), confeccionada en felpa de algodón pesado de máximo gramaje. Desarrollada para ofrecer aislamiento térmico, un confort masivo y una caída rígida que mantiene el volumen estético de la prenda.

Felpa Heavyweight de Alto Gramaje: Tejido interior cepillado de alta densidad que retiene el calor corporal de forma óptima y dota a la sudadera de un cuerpo robusto. Resiste lavados continuos sin perder su grosor ni su suavidad interna.
Capucha Anatómica Sin Cordones: Construcción limpia de doble panel textil con cuello cruzado alto. Al prescindir de cordones exteriores se elimina cualquier elemento de distracción en movimientos de gimnasio, logrando una estética minimalista.
Corte Boxy con Hombros Caídos: Patrón holgado de estilo urbano con sisa baja y volumen ampliado en el torso y las mangas, ideal para usar como capa exterior sobre camisetas oversize.

Bolsillo Canguro y Ajustes Reforzados: Amplio bolsillo frontal integrado para mantener las manos calientes o guardar elementos básicos. Los puños y la cintura cuentan con un canalé elástico grueso que ajusta de forma firme sin ceder con el uso.`,
        mainImage: "img/heavy-hoodie-blackout/1.png",
        thumbnails: ["img/heavy-hoodie-blackout/1.png","img/heavy-hoodie-blackout/2.png","img/heavy-hoodie-blackout/3.png","img/heavy-hoodie-blackout/4.png","img/heavy-hoodie-blackout/5.png"],
        colors: [
            { hex: "#121212", name: "Obsidian Black", id: "heavy-hoodie-blackout" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Heavyweight Oversized Hoodie Obsidian Black.",
        forMen: true,
        forWomen: false,
        order: 1200,
        relatedProducts: ["taper_baselayer", "taper-tee-shadow", "taper-tee-ash"]
    },
    {
        id: "essential-socks-white",
        title: "Essential Crew Socks",
        color: "Pure White",
        collection: "Drop 1",
        price: "4.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Calcetines deportivos de caña alta diseñados específicamente para el entrenamiento de fuerza. Su estructura combina un tejido de compresión superior que evita deslizamientos con una base amortiguada que protege el pie en cada levantamiento.

Caña Acanalada Anti-Deslizamiento: Tejido elástico en canalé (ribbed) de ajuste firme que abraza la pantorrilla. Garantiza que el calcetín permanezca extendido en su posición superior durante toda la sesión, sin bajarse ni arrugarse.

Suela Acolchada de Felpa (Cushioned Sole): Base inferior reforzada con un tramado de rizo interno que absorbe los impactos, reduce la fricción con la zapatilla y previene la aparición de ampollas en entrenamientos intensos.

Soporte Elástico en el Arco: Banda elástica de compresión media que envuelve la zona del empeine. Aporta estabilidad al arco del pie y evita que el calcetín se mueva o se desplace dentro del calzado.

Panel Superior Transpirable: Zona del empeine confeccionada con un punto texturizado más ligero que facilita la evacuación del calor y del sudor, manteniendo el pie fresco y seco.`,
        mainImage: "img/essential-socks-white/1.jpg",
        thumbnails: ["img/essential-socks-white/1.jpg"],
        colors: [
            { hex: "#ffffff", name: "Pure White", id: "essential-socks-white" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Essential Crew Socks Pure White.",
        forMen: true,
        forWomen: true,
        order: 1300,
        relatedProducts: ["taper_baselayer", "taper-tee-shadow", "taper-tee-ash"]
    },
    {
        id: "seamless-crop-onyx",
        title: "Seamless Crop Tee",
        color: "Onyx Black",
        collection: "Drop 1",
        price: "14.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Una camiseta corta de rendimiento técnico fabricada con tecnología sin costuras. Su estructura elástica de alta compresión proporciona un ajuste firme de tipo segunda piel, optimizando la sujeción y el confort en rutinas de torso o entrenamientos de alta intensidad.

Construcción Seamless Inteligente: Confeccionada en un solo bloque cilíndrico de tejido sin costuras laterales. Elimina por completo cualquier tipo de fricción, rozadura o molestia sobre la piel durante movimientos repetitivos.

Sombreado Anatómico Underbust: Tramado de compresión diferenciada integrado directamente bajo la línea del contorno del pecho. Actúa aportando una sujeción ligera y un efecto estético estilizado de forma natural.

Corte Crop y Pretina Elástica: Longitud optimizada por encima de la cintura que combina perfectamente con mallas de tiro alto. Cuenta con una banda inferior reforzada de canalé sutil que fija la prenda en su sitio, evitando que se suba al elevar los brazos.

Manga Ranglán con Mapeo de Transpiración: Microperforaciones estéticas en la zona de los hombros y la espalda que aceleran la disipación del calor corporal, manteniendo el cuerpo fresco y la prenda libre de humedad acumulada.`,
        mainImage: "img/seamless-crop-onyx/1.jpg",
        thumbnails: ["img/seamless-crop-onyx/1.jpg"],
        colors: [
            { hex: "#121212", name: "Onyx Black", id: "seamless-crop-onyx" },
            { hex: "#7A2036", name: "Berry Wine", id: "seamless-crop-wine" },
            { hex: "#B5A2B8", name: "Pastel Lilac", id: "seamless-crop-lilac" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Seamless Crop Tee Onyx Black.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["seamless-crop-wine", "seamless-crop-lilac", "seamless-short-onyx", "seamless-legging-onyx"]
    },
    {
        id: "seamless-crop-wine",
        title: "Seamless Crop Tee",
        color: "Berry Wine",
        collection: "Drop 1",
        price: "14.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Una camiseta corta de rendimiento técnico fabricada con tecnología sin costuras. Su estructura elástica de alta compresión proporciona un ajuste firme de tipo segunda piel, optimizando la sujeción y el confort en rutinas de torso o entrenamientos de alta intensidad.

Construcción Seamless Inteligente: Confeccionada en un solo bloque cilíndrico de tejido sin costuras laterales. Elimina por completo cualquier tipo de fricción, rozadura o molestia sobre la piel durante movimientos repetitivos.

Sombreado Anatómico Underbust: Tramado de compresión diferenciada integrado directamente bajo la línea del contorno del pecho. Actúa aportando una sujeción ligera y un efecto estético estilizado de forma natural.

Corte Crop y Pretina Elástica: Longitud optimizada por encima de la cintura que combina perfectamente con mallas de tiro alto. Cuenta con una banda inferior reforzada de canalé sutil que fija la prenda en su sitio, evitando que se suba al elevar los brazos.

Manga Ranglán con Mapeo de Transpiración: Microperforaciones estéticas en la zona de los hombros y la espalda que aceleran la disipación del calor corporal, manteniendo el cuerpo fresco y la prenda libre de humedad acumulada.`,
        mainImage: "img/seamless-crop-wine/1.png",
        thumbnails: ["img/seamless-crop-wine/1.png","img/seamless-crop-wine/2.png","img/seamless-crop-wine/3.png","img/seamless-crop-wine/4.png"],
        colors: [
            { hex: "#7A2036", name: "Berry Wine", id: "seamless-crop-wine" },
            { hex: "#121212", name: "Onyx Black", id: "seamless-crop-onyx" },
            { hex: "#B5A2B8", name: "Pastel Lilac", id: "seamless-crop-lilac" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Seamless Crop Tee Berry Wine.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["seamless-crop-onyx", "seamless-crop-lilac", "seamless-short-wine", "seamless-legging-wine"]
    },
    {
        id: "seamless-crop-lilac",
        title: "Seamless Crop Tee",
        color: "Pastel Lilac",
        collection: "Drop 1",
        price: "14.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Una camiseta corta de rendimiento técnico fabricada con tecnología sin costuras. Su estructura elástica de alta compresión proporciona un ajuste firme de tipo segunda piel, optimizando la sujeción y el confort en rutinas de torso o entrenamientos de alta intensidad.

Construcción Seamless Inteligente: Confeccionada en un solo bloque cilíndrico de tejido sin costuras laterales. Elimina por completo cualquier tipo de fricción, rozadura o molestia sobre la piel durante movimientos repetitivos.

Sombreado Anatómico Underbust: Tramado de compresión diferenciada integrado directamente bajo la línea del contorno del pecho. Actúa aportando una sujeción ligera y un efecto estético estilizado de forma natural.

Corte Crop y Pretina Elástica: Longitud optimizada por encima de la cintura que combina perfectamente con mallas de tiro alto. Cuenta con una banda inferior reforzada de canalé sutil que fija la prenda en su sitio, evitando que se suba al elevar los brazos.

Manga Ranglán con Mapeo de Transpiración: Microperforaciones estéticas en la zona de los hombros y la espalda que aceleran la disipación del calor corporal, manteniendo el cuerpo fresco y la prenda libre de humedad acumulada.`,
        mainImage: "img/seamless-crop-lilac/1.jpg",
        thumbnails: ["img/seamless-crop-lilac/1.jpg"],
        colors: [
            { hex: "#B5A2B8", name: "Pastel Lilac", id: "seamless-crop-lilac" },
            { hex: "#121212", name: "Onyx Black", id: "seamless-crop-onyx" },
            { hex: "#7A2036", name: "Berry Wine", id: "seamless-crop-wine" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Seamless Crop Tee Pastel Lilac.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["seamless-crop-onyx", "seamless-crop-wine", "seamless-short-lilac", "seamless-legging-lilac"]
    },
    {
        id: "seamless-short-onyx",
        title: "Seamless Biker Short",
        color: "Onyx Black",
        collection: "Drop 1",
        price: "15.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Un pantalón corto de estilo ciclista desarrollado en tejido de compresión sin costuras. Su longitud intermedia y su pretina de alta sujeción garantizan que la prenda permanezca fija en su lugar durante entrenamientos dinámicos, ofreciendo total cobertura y confort térmico.

Cintura Alta Anti-Deslizamiento (High-Waist): Pretina elástica de doble capa y compresión media-alta que abraza la zona abdominal de manera firme. Ofrece un soporte seguro que no se enrolla ni se desplaza hacia abajo al hacer ejercicio.

Diseño de Contorno Glúteo Estilizado: Incorpora un tramado de sombreado anatómico bajo la zona posterior que define y realza la silueta de forma natural, adaptándose a las curvas del cuerpo sin recurrir a costuras incómodas.

Largo Biker Funcional: Corte por encima de la rodilla con un dobladillo acanalado suave que fija la prenda en el muslo. Su longitud está optimizada para eliminar la fricción entre las piernas en caminatas, carreras o rutinas pesadas de pierna.

Tejido Elástico Squat-Proof: Punto denso confeccionado en cuatro direcciones que asegura una opacidad completa. Bloquea las transparencias ante la máxima tensión durante sentadillas, pesos muertos o estiramientos intensos.`,
        mainImage: "img/seamless-short-onyx/1.jpg",
        thumbnails: ["img/seamless-short-onyx/1.jpg"],
        colors: [
            { hex: "#121212", name: "Onyx Black", id: "seamless-short-onyx" },
            { hex: "#7A2036", name: "Berry Wine", id: "seamless-short-wine" },
            { hex: "#B5A2B8", name: "Pastel Lilac", id: "seamless-short-lilac" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Seamless Biker Short Onyx Black.",
        forMen: false,
        forWomen: true,
        order: 1000,
        relatedProducts: ["seamless-short-wine", "seamless-short-lilac", "seamless-crop-onyx", "seamless-legging-onyx"]
    },
    {
        id: "seamless-short-wine",
        title: "Seamless Biker Short",
        color: "Berry Wine",
        collection: "Drop 1",
        price: "15.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Un pantalón corto de estilo ciclista desarrollado en tejido de compresión sin costuras. Su longitud intermedia y su pretina de alta sujeción garantizan que la prenda permanezca fija en su lugar durante entrenamientos dinámicos, ofreciendo total cobertura y confort térmico.

Cintura Alta Anti-Deslizamiento (High-Waist): Pretina elástica de doble capa y compresión media-alta que abraza la zona abdominal de manera firme. Ofrece un soporte seguro que no se enrolla ni se desplaza hacia abajo al hacer ejercicio.

Diseño de Contorno Glúteo Estilizado: Incorpora un tramado de sombreado anatómico bajo la zona posterior que define y realza la silueta de forma natural, adaptándose a las curvas del cuerpo sin recurrir a costuras incómodas.

Largo Biker Funcional: Corte por encima de la rodilla con un dobladillo acanalado suave que fija la prenda en el muslo. Su longitud está optimizada para eliminar la fricción entre las piernas en caminatas, carreras o rutinas pesadas de pierna.

Tejido Elástico Squat-Proof: Punto denso confeccionado en cuatro direcciones que asegura una opacidad completa. Bloquea las transparencias ante la máxima tensión durante sentadillas, pesos muertos o estiramientos intensos.`,
        mainImage: "img/seamless-short-wine/1.jpg",
        thumbnails: ["img/seamless-short-wine/1.jpg"],
        colors: [
            { hex: "#7A2036", name: "Berry Wine", id: "seamless-short-wine" },
            { hex: "#121212", name: "Onyx Black", id: "seamless-short-onyx" },
            { hex: "#B5A2B8", name: "Pastel Lilac", id: "seamless-short-lilac" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Seamless Biker Short Berry Wine.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["seamless-short-onyx", "seamless-short-lilac", "seamless-crop-wine", "seamless-legging-wine"]
    },
    {
        id: "seamless-short-lilac",
        title: "Seamless Biker Short",
        color: "Pastel Lilac",
        collection: "Drop 1",
        price: "15.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Un pantalón corto de estilo ciclista desarrollado en tejido de compresión sin costuras. Su longitud intermedia y su pretina de alta sujeción garantizan que la prenda permanezca fija en su lugar durante entrenamientos dinámicos, ofreciendo total cobertura y confort térmico.

Cintura Alta Anti-Deslizamiento (High-Waist): Pretina elástica de doble capa y compresión media-alta que abraza la zona abdominal de manera firme. Ofrece un soporte seguro que no se enrolla ni se desplaza hacia abajo al hacer ejercicio.

Diseño de Contorno Glúteo Estilizado: Incorpora un tramado de sombreado anatómico bajo la zona posterior que define y realza la silueta de forma natural, adaptándose a las curvas del cuerpo sin recurrir a costuras incómodas.

Largo Biker Funcional: Corte por encima de la rodilla con un dobladillo acanalado suave que fija la prenda en el muslo. Su longitud está optimizada para eliminar la fricción entre las piernas en caminatas, carreras o rutinas pesadas de pierna.

Tejido Elástico Squat-Proof: Punto denso confeccionado en cuatro direcciones que asegura una opacidad completa. Bloquea las transparencias ante la máxima tensión durante sentadillas, pesos muertos o estiramientos intensos.`,
        mainImage: "img/seamless-short-lilac/1.jpg",
        thumbnails: ["img/seamless-short-lilac/1.jpg"],
        colors: [
            { hex: "#B5A2B8", name: "Pastel Lilac", id: "seamless-short-lilac" },
            { hex: "#121212", name: "Onyx Black", id: "seamless-short-onyx" },
            { hex: "#7A2036", name: "Berry Wine", id: "seamless-short-wine" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Seamless Biker Short Pastel Lilac.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["seamless-short-onyx", "seamless-short-wine", "seamless-crop-lilac", "seamless-legging-lilac"]
    },
    {
        id: "seamless-legging-onyx",
        title: "Seamless Leggings",
        color: "Onyx Black",
        collection: "Drop 1",
        price: "22.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Mallas técnicas de compresión y largo completo desarrolladas con tecnología sin costuras. Diseñadas para actuar como una segunda piel protectora, combinan una estructura de alta sujeción abdominal con un tejido flexible que acompaña el movimiento en levantamientos pesados.

Pretina Compresiva de Tiro Alto: Banda elástica de doble grosor que ciñe la zona del abdomen medio, garantizando una sujeción firme y segura. Su estructura técnica evita que la prenda se deslice o se enrolle durante zancadas, carreras o saltos.

Tramado de Contorno Glúteo Sutil: Incorpora líneas de sombreado anatómico de compresión diferenciada bajo la zona trasera. Este diseño textil moldea y realza la silueta de manera natural y estética, prescindiendo por completo de costuras internas molestas.

Tejido Interlock Squat-Proof: Punto elástico multidireccional de densidad media-alta que garantiza una opacidad absoluta. Bloquea de forma eficaz cualquier transparencia bajo máxima tensión (flexión profunda de cadera en sentadillas o peso muerto).

Ajuste Ergonómico Sin Costuras Laterales: Construcción cilíndrica limpia que elimina las uniones en los costados de las piernas. Minimiza los puntos de fricción sobre la piel, reduciendo el riesgo de rozaduras y maximizando el confort en sesiones de entrenamiento prolongadas.`,
        mainImage: "img/seamless-legging-onyx/1.jpg",
        thumbnails: ["img/seamless-legging-onyx/1.jpg"],
        colors: [
            { hex: "#121212", name: "Onyx Black", id: "seamless-legging-onyx" },
            { hex: "#7A2036", name: "Berry Wine", id: "seamless-legging-wine" },
            { hex: "#B5A2B8", name: "Pastel Lilac", id: "seamless-legging-lilac" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Seamless Leggings Onyx Black.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["seamless-legging-wine", "seamless-legging-lilac", "seamless-crop-onyx", "seamless-short-onyx"]
    },
    {
        id: "seamless-legging-wine",
        title: "Seamless Leggings",
        color: "Berry Wine",
        collection: "Drop 1",
        price: "22.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Mallas técnicas de compresión y largo completo desarrolladas con tecnología sin costuras. Diseñadas para actuar como una segunda piel protectora, combinan una estructura de alta sujeción abdominal con un tejido flexible que acompaña el movimiento en levantamientos pesados.

Pretina Compresiva de Tiro Alto: Banda elástica de doble grosor que ciñe la zona del abdomen medio, garantizando una sujeción firme and segura. Su estructura técnica evita que la prenda se deslice o se enrolle durante zancadas, carreras o saltos.

Tramado de Contorno Glúteo Sutil: Incorpora líneas de sombreado anatómico de compresión diferenciada bajo la zona trasera. Este diseño textil moldea y realza la silueta de manera natural y estética, prescindiendo por completo de costuras internas molestas.

Tejido Interlock Squat-Proof: Punto elástico multidireccional de densidad media-alta que garantiza una opacidad absoluta. Bloquea de forma eficaz cualquier transparencia bajo máxima tensión (flexión profunda de cadera en sentadillas o peso muerto).

Ajuste Ergonómico Sin Costuras Laterales: Construcción cilíndrica limpia que elimina las uniones en los costados de las piernas. Minimiza los puntos de fricción sobre la piel, reduciendo el riesgo de rozaduras y maximizando el confort en sesiones de entrenamiento prolongadas.`,
        mainImage: "img/seamless-legging-wine/1.jpg",
        thumbnails: ["img/seamless-legging-wine/1.jpg"],
        colors: [
            { hex: "#7A2036", name: "Berry Wine", id: "seamless-legging-wine" },
            { hex: "#121212", name: "Onyx Black", id: "seamless-legging-onyx" },
            { hex: "#B5A2B8", name: "Pastel Lilac", id: "seamless-legging-lilac" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Seamless Leggings Berry Wine.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["seamless-legging-onyx", "seamless-legging-lilac", "seamless-crop-wine", "seamless-short-wine"]
    },
    {
        id: "seamless-legging-lilac",
        title: "Seamless Leggings",
        color: "Pastel Lilac",
        collection: "Drop 1",
        price: "22.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Mallas técnicas de compresión y largo completo desarrolladas con tecnología sin costuras. Diseñadas para actuar como una segunda piel protectora, combinan una estructura de alta sujeción abdominal con un tejido flexible que acompaña el movimiento en levantamientos pesados.

Pretina Compresiva de Tiro Alto: Banda elástica de doble grosor que ciñe la zona del abdomen medio, garantizando una sujeción firme and segura. Su estructura técnica evita que la prenda se deslice o se enrolle durante zancadas, carreras o saltos.

Tramado de Contorno Glúteo Sutil: Incorpora líneas de sombreado anatómico de compresión diferenciada bajo la zona trasera. Este diseño textil moldea y realza la silueta de manera natural y estética, prescindiendo por completo de costuras internas molestas.

Tejido Interlock Squat-Proof: Punto elástico multidireccional de densidad media-alta que garantiza una opacidad absoluta. Bloquea de forma eficaz cualquier transparencia bajo máxima tensión (flexión profunda de cadera en sentadillas o peso muerto).

Ajuste Ergonómico Sin Costuras Laterales: Construcción cilíndrica limpia que elimina las uniones en los costados de las piernas. Minimiza los puntos de fricción sobre la piel, reduciendo el riesgo de rozaduras y maximizando el confort en sesiones de entrenamiento prolongadas.`,
        mainImage: "img/seamless-legging-lilac/1.jpg",
        thumbnails: ["img/seamless-legging-lilac/1.jpg"],
        colors: [
            { hex: "#B5A2B8", name: "Pastel Lilac", id: "seamless-legging-lilac" },
            { hex: "#121212", name: "Onyx Black", id: "seamless-legging-onyx" },
            { hex: "#7A2036", name: "Berry Wine", id: "seamless-legging-wine" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Seamless Leggings Pastel Lilac.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["seamless-legging-onyx", "seamless-legging-wine", "seamless-crop-lilac", "seamless-short-lilac"]
    },
    {
        id: "bra-onyx",
        title: "Adapt Sports Bra",
        color: "Onyx Black",
        collection: "Drop 1",
        price: "16.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Un sujetador deportivo de impacto medio-alto diseñado para ofrecer un soporte firme y una libertad de movimiento absoluta. Su patrón ergonómico destaca por una estructura trasera que optimiza la ventilación y realza la línea muscular de la espalda.

Estructura de Tirantes Cruzados: Diseño de tirantes finos entrelazados en la espalda que distribuyen el peso de manera uniforme sobre los hombros, reduciendo la presión en la zona del cuello durante entrenamientos intensos.

Apertura Lumbar Estética (Cut-Out): Escote trasero profundo y anatómico que deja al descubierto la zona del dorsal. Este detalle técnico no solo favorece una estética limpia y atlética, sino que actúa como una zona de máxima ventilación activa.

Sujeción de Impacto Medio-Alto: Confeccionado con un tejido elástico de compresión que mantiene el ajuste firme en entrenamientos de fuerza, running ligero o rutinas de alta intensidad. Incluye copas extraíbles para una adaptación personalizada.

Banda Inferior Reforzada: Pretina elástica ancha situada bajo el busto que fija la prenda en su posición exacta, evitando desplazamientos molestos o rozaduras al realizar movimientos de rango completo sobre la cabeza.`,
        mainImage: "img/bra-onyx/1.jpg",
        thumbnails: ["img/bra-onyx/1.jpg"],
        colors: [
            { hex: "#121212", name: "Onyx Black", id: "bra-onyx" },
            { hex: "#1a4231", name: "Forest Green", id: "bra-emerald" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Adapt Sports Bra Onyx Black.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["bra-emerald", "seamless-legging-onyx", "seamless-short-onyx"]
    },
    {
        id: "bra-emerald",
        title: "Adapt Sports Bra",
        color: "Forest Green",
        collection: "Drop 1",
        price: "16.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Un sujetador deportivo de impacto medio-alto diseñado para ofrecer un soporte firme y una libertad de movimiento absoluta. Su patrón ergonómico destaca por una estructura trasera que optimiza la ventilación y realza la línea muscular de la espalda.

Estructura de Tirantes Cruzados: Diseño de tirantes finos entrelazados en la espalda que distribuyen el peso de manera uniforme sobre los hombros, reduciendo la presión en la zona del cuello durante entrenamientos intensos.

Apertura Lumbar Estética (Cut-Out): Escote trasero profundo y anatómico que deja al descubierto la zona del dorsal. Este detalle técnico no solo favorece una estética limpia y atlética, sino que actúa como una zona de máxima ventilación activa.

Sujeción de Impacto Medio-Alto: Confeccionado con un tejido elástico de compresión que mantiene el ajuste firme en entrenamientos de fuerza, running ligero o rutinas de alta intensidad. Incluye copas extraíbles para una adaptación personalizada.

Banda Inferior Reforzada: Pretina elástica ancha situada bajo el busto que fija la prenda en su posición exacta, evitando desplazamientos molestos o rozaduras al realizar movimientos de rango completo sobre la cabeza.`,
        mainImage: "img/bra-emerald/1.jpg",
        thumbnails: ["img/bra-emerald/1.jpg"],
        colors: [
            { hex: "#1a4231", name: "Forest Green", id: "bra-emerald" },
            { hex: "#121212", name: "Onyx Black", id: "bra-onyx" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Adapt Sports Bra Forest Green.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["bra-onyx"]
    },
    {
        id: "bra-longline-onyx",
        title: "Essence Longline Bra",
        color: "Onyx Black",
        collection: "Drop 1",
        price: "16.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Un sujetador deportivo de silueta alargada y soporte de impacto medio. Diseñado con un patrón limpio y minimalista, su estructura ofrece una cobertura ampliada que permite utilizarlo de forma independiente como un top corto de entrenamiento.

Silueta Longline de Cobertura Ampliada: Banda inferior ensanchada que se extiende hacia la boca del estómago. Aporta una sujeción uniforme en todo el contorno del torso, distribuye la presión de manera eficiente y evita que la prenda se suba durante el movimiento.

Tirantes Finos Minimalistas: Diseño de hombros despejados con tirantes de perfil bajo que reducen las marcas sobre la piel y garantizan una total libertad de rotación en la articulación del hombro.

Escote Redondo Ergonómico (Scoop Neck): Línea de cuello con la profundidad justa para ofrecer un ajuste estético y seguro, manteniendo todo en su sitio en ejercicios de flexión o saltos. Incluye almohadillas protectoras extraíbles.

Tejido Técnico Ultra-Suave: Confeccionado con un hilado de tacto aterciopelado que maximiza el confort térmico. Absorbe y evapora el sudor de forma acelerada para mantener la piel seca de principio a fin de la sesión.`,
        mainImage: "img/bra-longline-onyx/1.jpg",
        thumbnails: ["img/bra-longline-onyx/1.jpg"],
        colors: [
            { hex: "#121212", name: "Onyx Black", id: "bra-longline-onyx" },
            { hex: "#B5A2B8", name: "Pastel Lilac", id: "bra-longline-lilac" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Essence Longline Bra Onyx Black.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["bra-longline-lilac", "seamless-legging-onyx", "seamless-short-onyx"]
    },
    {
        id: "bra-longline-lilac",
        title: "Essence Longline Bra",
        color: "Pastel Lilac",
        collection: "Drop 1",
        price: "16.90 €",
        discount: 0, 
        outOfStockSizes: [],
        description: `Un sujetador deportivo de silueta alargada y soporte de impacto medio. Diseñado con un patrón limpio y minimalista, su estructura ofrece una cobertura ampliada que permite utilizarlo de forma independiente como un top corto de entrenamiento.

Silueta Longline de Cobertura Ampliada: Banda inferior ensanchada que se extiende hacia la boca del estómago. Aporta una sujeción uniforme en todo el contorno del torso, distribuye la presión de manera eficiente y evita que la prenda se suba durante el movimiento.

Tirantes Finos Minimalistas: Diseño de hombros despejados con tirantes de perfil bajo que reducen las marcas sobre la piel y garantizan una total libertad de rotación en la articulación del hombro.

Escote Redondo Ergonómico (Scoop Neck): Línea de cuello con la profundidad justa para ofrecer un ajuste estético y seguro, manteniendo todo en su sitio en ejercicios de flexión o saltos. Incluye almohadillas protectoras extraíbles.

Tejido Técnico Ultra-Suave: Confeccionado con un hilado de tacto aterciopelado que maximiza el confort térmico. Absorbe y evapora el sudor de forma acelerada para mantener la piel seca de principio a fin de la sesión.`,
        mainImage: "img/bra-longline-lilac/1.jpg",
        thumbnails: ["img/bra-longline-lilac/1.jpg"],
        colors: [
            { hex: "#B5A2B8", name: "Pastel Lilac", id: "bra-longline-lilac" },
            { hex: "#121212", name: "Onyx Black", id: "bra-longline-onyx" }
        ],
        waMessage: "Hola equipo BAVU! Vengo de la web y quiero pedir Essence Longline Bra Pastel Lilac.",
        forMen: false,
        forWomen: true,
        order: 0,
        relatedProducts: ["bra-longline-onyx", "seamless-legging-lilac", "seamless-short-lilac"]
    }
];


// 🌟 FUNCIÓN GLOBAL DE RENDERIZADO DE PRECIOS CON DESCUENTOS AUTOMÁTICOS
function renderProductPrice(product) {
    if (product.discount && product.discount > 0) {
        const originalPrice = parseFloat(product.price);
        const finalPrice = originalPrice * (1 - product.discount / 100);
        return `
            <span class="price-original" style="text-decoration: line-through; opacity: 0.5; margin-right: 8px; font-size: 0.85em;">${product.price}</span>
            <span class="price-discounted" style="font-weight: 700; color: #e53e3e;">${finalPrice.toFixed(2)} €</span>
            <span class="discount-tag" style="background: #e53e3e; color: white; padding: 2px 5px; font-size: 0.7rem; font-weight: 900; margin-left: 4px; border-radius: 2px; display: inline-block; transform: translateY(-1px); text-transform: uppercase;">-${product.discount}%</span>
        `;
    }
    return `<span class="price-normal">${product.price}</span>`;
}