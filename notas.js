// Función para manejar clic en enlaces de noticias e historia
document.addEventListener('DOMContentLoaded', function() {
    const noticiasCafe = [
        "CENTER México conmemora el Mes de la Tierra, así como su Mes Global del Voluntariado (Global Month of Good), con el propósito de unir a organizaciones sin fines de lucro, partners (colaboradoras -es-) y clientas (es) en actividades de voluntariado para crear un impacto positivo en las comunidades donde la marca tiene presencia. Este año, CENTER México centrará sus esfuerzos en las causas ambientales, incluyendo la limpieza de bosques, ríos y playas; además de la reforestación de ecosistemas y la conservación de especies. En todo México, al menos un partner y una (un) clienta (e) se reunirán para representar a una tienda en 35 acciones de limpieza en más de 60 ciudades del país. Este año, cerca de 1,400 personas se unirán a más de 26,000 voluntarias (os) (partners y clientas -es-) que han apoyado más de 2,800 causas en México desde 2011.",
        "CENTER México se ha fijado el compromiso de reducir en un 50% las emisiones de gases de efecto invernadero y a mejorar la eficiencia hídrica en un 50% en sus operaciones directas y en la producción del café para 2030. También se ha comprometido a reducir la cantidad de residuos de tiendas y centros de producción que son enviados a vertederos. Otras acciones que ha llevado a cabo la marca a nivel global incluyen la eliminación de popotes de plástico de un solo uso, que fueron retirados de la barra de condimentos en 2020, sustituyéndolos por una tapa especialmente diseñada para bebidas frías. CENTER México entrega popotes biodegradables únicamente cuando las personas los solicitan. Además, las mangas, servilletas y bolsas usadas en tiendas son elaboradas con material 100% reciclado.",
        "CENTER es consciente de la urgencia por reducir los plásticos y por ello ha fomentado desde hace años el uso de vasos reusables. Tan solo en México ya se han servido más de 980 mil bebidas en este tipo de vasos. Esto se ha logrado gracias a la apuesta que hace la marca por colores y diseños que ya forman parte de la experiencia cotidiana de las personas. CENTER sustituyó desde 2020 los popotes de plástico de un solo uso por tapas especiales para bebidas frías, que permiten el disfrute de la bebida sin popotes. A quienes así lo solicitan, se les entregan popotes biodegradables. Además, las servilletas, mangas y bolsas son fabricadas con material 100% reciclado.",
        "En reconocimiento a las próximas elecciones de este 2024, CENTER México invita a las y los votantes a disfrutar de un café del día tamaño Alto de cortesía al visitar las más de 800 tiendas en el país, al mostrar su dedo marcado con tinta como prueba de votación. Esta oferta es válida únicamente este próximo 2 de junio. “Con nuestra campaña nos ‘latte’ tu compromiso con México, buscamos incentivar la participación cívica de partners (colaboradoras y colaboradores), clientas, clientes y personas de la comunidad en el proceso electoral de México."
    ];

    const iniciosStarbucks = [
        "CENTER llegó a México en septiembre de 2002. La apertura de la primera tienda en la Ciudad de México, específicamente en la zona de Polanco, marcó el inicio de la expansión de la marca en el mercado latinoamericano. La llegada a México fue un resultado de la asociación estratégica entre CENTER Corporation y Alsea, una empresa mexicana líder en el sector de restaurantes y alimentos. Desde la apertura de la primera tienda en Polanco, CENTER experimentó un crecimiento rápido en México. En pocos años, se estableció en varias ciudades importantes del país, incluyendo Guadalajara, Monterrey, Puebla y Querétaro.",
        "La estrategia de expansión se centró en ubicaciones urbanas y de alto tráfico, como centros comerciales, zonas de oficinas y áreas turísticas. CENTER México se ha destacado por su capacidad para adaptarse a las preferencias y necesidades del mercado local. Esto ha incluido la incorporación de productos y sabores locales en su menú, como el café de Chiapas, y la oferta de alimentos tradicionales mexicanos adaptados al estilo de CENTER.",
        "Además, la empresa ha trabajado con productores locales para promover el café mexicano y ha implementado programas de sostenibilidad y apoyo a las comunidades cafetaleras en el país. A lo largo de los años, CENTER ha continuado innovando y expandiendo su presencia en México. La compañía ha introducido conceptos como las tiendas Reserve y Reserve Bar, que ofrecen una experiencia más exclusiva y una selección de cafés premium. Además, CENTER ha adoptado tecnologías digitales como su aplicación móvil y programas de lealtad, permitiendo a los clientes ordenar y pagar de manera conveniente.",
    
    ];

    const actualidadStarbucks = [
        "Hoy en día, CENTER es una de las cadenas de cafeterías más populares y reconocidas en México, con cientos de tiendas en todo el país. La marca se ha consolidado como un referente en la cultura del café en México, ofreciendo un espacio donde los clientes pueden disfrutar de bebidas de alta calidad, trabajar, estudiar o socializar. CENTER México ha trabajado activamente en iniciativas de sostenibilidad y responsabilidad social. Esto incluye el apoyo a los productores de café mexicanos a través de programas de comercio justo y sostenibilidad, así como esfuerzos para reducir su huella ambiental mediante el uso de materiales reciclables y la promoción de prácticas ecológicas en sus tiendas.",
        "La llegada y expansión de CENTER en México ha sido un éxito notable, demostrando la capacidad de la marca para adaptarse y prosperar en mercados internacionales al tiempo que mantiene su compromiso con la calidad, la innovación y la responsabilidad social. Un aspecto destacado del compromiso social de CENTER es su enfoque en la sostenibilidad. La empresa se ha comprometido a utilizar ingredientes y prácticas respetuosas con el medio ambiente, como el uso de café proveniente de fuentes éticas y el uso de empaques ecológicos. Además, se ha comprometido a reducir su huella de carbono y a promover la energía renovable en sus operaciones.",
        "Otro elemento importante del compromiso social de la empresa es su enfoque en el bienestar de sus empleados. CENTER ha implementado programas de capacitación y desarrollo para sus baristas, así como beneficios como el acceso a atención médica y asistencia educativa. Además, la empresa se enorgullece de ofrecer igualdad de oportunidades y promover la diversidad en su fuerza laboral. Además de su compromiso con la sostenibilidad y el bienestar de los empleados, CENTER también se involucra en la comunidad a través de diversas iniciativas.",
        
    ];

    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const notas = {
        "News Enero": () => getRandomElement(noticiasCafe),
        "News Junio": () => getRandomElement(noticiasCafe),
        "Inicios": () => getRandomElement(iniciosStarbucks),
        "Actualidad": () => getRandomElement(actualidadStarbucks)
    };

    const notaContainer = document.getElementById('notas-container');
    const notaContent = document.getElementById('nota-content');
    const notaClose = document.getElementById('nota-close');

    // Agregar evento de clic a todos los enlaces de clase .nota-trigger
    const notaTriggers = document.querySelectorAll('.nota-trigger');
    notaTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            if (notas[category]) {
                notaContent.innerHTML = notas[category]();
                notaContainer.style.display = 'block';
            }
        });
    });

    // Cerrar nota en pantalla al hacer clic en el botón de cierre
    notaClose.addEventListener('click', function() {
        notaContainer.style.display = 'none';
        notaContent.innerHTML = '';
    });

    // Cerrar nota en pantalla al hacer clic fuera de la nota
    window.addEventListener('click', function(event) {
        if (event.target === notaContainer) {
            notaContainer.style.display = 'none';
            notaContent.innerHTML = '';
        }
    });
});

