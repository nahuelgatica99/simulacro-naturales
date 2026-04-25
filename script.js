// --- BIBLIOTECA COMPLETA ---
const BIBLIOTECA_EXTENDIDA = {
  calor_temp: {
    t: "Temperatura vs Calor",
    d: "Aunque solemos confundirlos, son cosas distintas. El <b>Calor</b> es energía en tránsito; es energía que 'viaja' de un lugar a otro. La <b>Temperatura</b>, en cambio, es una medida: nos dice qué tan rápido se están moviendo las partículas (bolitas) de un cuerpo.",
    ex: "<b>Ejemplo Real:</b> Imagina una pileta y una taza de café, ambas a 50°C. Tienen la misma temperatura, ¡pero la pileta tiene mucho más calor acumulado porque tiene miles de millones de partículas más moviéndose!",
    dat: "En la prueba recordá: El calor fluye del cuerpo con mayor temperatura al de menor, ¡siempre!",
    img: "https://images.unsplash.com/photo-1516053355437-01049755465e?auto=format&fit=crop&q=80&w=400",
    v: "Calor es energía viajera, temperatura es qué tan rápido vibran las partículas."
  },
  materiales: {
    t: "Conductores y Aislantes",
    d: "Los <b>Conductores</b> (como los metales) son materiales que permiten que el calor pase a través de ellos muy fácilmente. Los <b>Aislantes</b> (madera, plástico, lana, telgopor) son materiales que presentan mucha resistencia al paso del calor, actuando como muros.",
    ex: "<b>Ejemplo Real:</b> Cuando cocinas, usas una olla de metal (conductor) para que el calor llegue rápido a la comida, pero el mango es de plástico (aislante) para que el calor no llegue a tu mano.",
    dat: "Dato clave: El aire es un excelente aislante térmico. Por eso las ventanas de doble vidrio o los abrigos inflados funcionan tan bien.",
    img: "https://images.unsplash.com/photo-1584017374013-10d937060f60?auto=format&fit=crop&q=80&w=400",
    v: "Los metales son autopistas de calor. Los aislantes son frenos para la energía."
  },
  cambios_estado: {
    t: "Los Cambios de Estado",
    d: "La materia no es siempre igual. Si entregamos calor, las partículas se mueven más y se separan: el sólido se hace líquido (<b>Fusión</b>) y el líquido se hace gas (<b>Evaporación</b>). Si quitamos calor, se juntan: el gas se hace líquido (<b>Condensación</b>) y el líquido sólido (<b>Solidificación</b>).",
    ex: "<b>Ejemplo Real:</b> El 'humo' que ves al respirar en un día muy frío es el vapor de tu aliento convirtiéndose en gotitas de agua líquida al tocar el aire frío. ¡Eso es condensación!",
    dat: "Ojo aquí: Mientras el hielo se está derritiendo, su temperatura no sube, se queda fija hasta que todo el hielo es agua.",
    img: "https://images.unsplash.com/photo-1551731591-139438062167?auto=format&fit=crop&q=80&w=400",
    v: "Fusión, solidificación, evaporación y condensación. Todo depende de si sumamos o quitamos energía."
  },
  aire_atmosfera: {
    t: "El Aire y sus Propiedades",
    d: "El aire es materia en estado gaseoso. Está compuesto principalmente por <b>Nitrógeno (78%)</b> y <b>Oxígeno (21%)</b>. Aunque no lo veamos, el aire ocupa lugar, tiene peso y ejerce presión sobre nosotros (presión atmosférica).",
    ex: "<b>Ejemplo Real:</b> Si inflas un globo y lo pones al sol, verás que se infla un poquito más solo. Es porque el aire adentro se calienta, sus partículas chocan más fuerte y necesitan más espacio.",
    dat: "Para el examen: El aire caliente es más liviano y sube; el aire frío es más denso y baja. Ese movimiento genera el viento.",
    img: "https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?auto=format&fit=crop&q=80&w=400",
    v: "El aire es una mezcla de gases. Tiene peso, ocupa lugar y se expande con el calor."
  },
  transmision_calor: {
    t: "Formas de Transmisión",
    d: "El calor tiene tres formas de viajar: 1) <b>Conducción</b> (contacto directo en sólidos), 2) <b>Convección</b> (movimiento de masas en líquidos y gases) y 3) <b>Radiación</b> (a través de ondas, incluso en el vacío).",
    ex: "<b>Ejemplo Real:</b> En una estufa, el metal quema por conducción, el aire caliente que sube por la habitación es convección, y el calorcito que sientes en la cara sin tocarla es radiación.",
    dat: "No olvides: La Radiación es la única forma en que el calor del Sol llega a la Tierra a través del vacío del espacio.",
    img: "https://images.unsplash.com/photo-1528150230182-2ce32483f98c?auto=format&fit=crop&q=80&w=400",
    v: "El calor viaja por conducción, convección o radiación. ¡Tres caminos para la misma energía!"
  }
};

const GLOSARIO_CATEGORIZADO = {
  "La temperatura y el calor": [
    { p: "Calor", d: "Energía en tránsito que viaja de un cuerpo con mayor temperatura a uno de menor." },
    { p: "Temperatura", d: "Medida de la agitación o movimiento de las partículas de un cuerpo." },
    { p: "Equilibrio Térmico", d: "Estado en el que dos cuerpos igualan su temperatura y el calor deja de fluir." },
    { p: "Energía Térmica", d: "La energía total de un cuerpo debido al movimiento de sus partículas." }
  ],
  "La medición de la temperatura": [
    { p: "Termómetro", d: "Instrumento que se utiliza para medir la temperatura de forma precisa." },
    { p: "Grados Celsius (°C)", d: "Escala de medición de temperatura más utilizada en el mundo." },
    { p: "Cero Absoluto", d: "Temperatura más baja teórica donde las partículas dejan de moverse por completo." }
  ],
  "La transmisión del calor": [
    { p: "Conducción", d: "Transmisión de calor por contacto directo, típica en materiales sólidos." },
    { p: "Convección", d: "Transmisión de calor en fluidos (líquidos y gases) a través de movimientos de masas." },
    { p: "Radiación", d: "Calor que viaja a través de ondas y puede propagarse incluso en el vacío." },
    { p: "Vacío", d: "Espacio donde no hay materia; solo el calor por radiación puede viajar por aquí." }
  ],
  "Los estados de la materia": [
    { p: "Sólido", d: "Estado donde las partículas están muy juntas y tienen forma y volumen propios." },
    { p: "Líquido", d: "Estado con volumen definido pero forma variable (se adapta al envase)." },
    { p: "Gaseoso", d: "Estado donde las partículas están muy separadas y se mueven libremente." },
    { p: "Fluido", d: "Sustancia que puede moverse o fluir, como los líquidos y los gases." }
  ],
  "El modelo corpuscular de la materia": [
    { p: "Modelo Corpuscular", d: "Idea científica de que todo está hecho de pequeñas partículas (bolitas) en movimiento." },
    { p: "Energía Cinética", d: "Es la energía que tienen las partículas debido a su movimiento o velocidad." },
    { p: "Partícula", d: "El componente más pequeño e invisible que forma toda la materia." }
  ],
  "Los cambios de estado": [
    { p: "Fusión", d: "Paso de sólido a líquido al absorber calor (ej: hielo derritiéndose)." },
    { p: "Solidificación", d: "Paso de líquido a sólido al perder calor (ej: hacer hielo)." },
    { p: "Evaporación", d: "Paso de líquido a gas de forma lenta en la superficie." },
    { p: "Condensación", d: "Paso de gas a líquido al enfriarse (ej: empañar un vidrio)." },
    { p: "Dilatación", d: "Aumento de tamaño de un material al calentarse." },
    { p: "Contracción", d: "Disminución de tamaño de un material al enfriarse." }
  ],
  "El aire y la atmósfera": [
    { p: "Atmósfera", d: "Capa de gases que rodea la Tierra y que nos permite vivir." },
    { p: "Nitrógeno", d: "El gas más abundante del aire (ocupa el 78%)." },
    { p: "Oxígeno", d: "Gas indispensable para la respiración de los seres vivos (ocupa el 21%)." },
    { p: "Presión Atmosférica", d: "El peso que el aire ejerce sobre todas las cosas de la Tierra." }
  ]
};

// --- BANCO DE 100 PREGUNTAS: CS NATURALES (TEMAS LIBRO ABR 26) ---
const BANCO_PREGUNTAS = [
  // 1. LA TEMPERATURA Y EL CALOR (14 preguntas)
  { q: "¿Qué es el calor según el modelo corpuscular?", o: ["Energía en tránsito", "Partículas quietas", "Un líquido invisible"], c: 0, e: "El calor es energía que se transfiere de un cuerpo a otro.", h: "Es algo que 'viaja'.", t: "La temperatura y el calor" },
  { q: "¿Hacia dónde fluye siempre el calor entre dos cuerpos?", o: ["Del más frío al más caliente", "Del más caliente al más frío", "No fluye, se queda quieto"], c: 1, e: "La energía térmica siempre busca el equilibrio fluyendo hacia el cuerpo de menor temperatura.", h: "Busca 'enfriar' al caliente.", t: "La temperatura y el calor" },
  { q: "¿Qué mide la temperatura?", o: ["La cantidad de masa", "La agitación de las partículas", "El tamaño de los átomos"], c: 1, e: "Es una medida del promedio de la energía cinética de las moléculas.", h: "Mide movimiento.", t: "La temperatura y el calor" },
  { q: "Si dos objetos están en 'Equilibrio Térmico' significa que:", o: ["Tienen distinta temperatura", "Tienen igual temperatura", "Uno es de metal"], c: 1, e: "Ya no hay transferencia de calor porque están iguales.", h: "Hay un empate térmico.", t: "La temperatura y el calor" },
  { q: "¿Cuál tiene más energía térmica: una taza de té a 80°C o una olla gigante a 80°C?", o: ["La taza", "La olla", "Son iguales"], c: 1, e: "A igual temperatura, el objeto con más masa tiene más energía térmica total.", h: "Más partículas = más energía.", t: "La temperatura y el calor" },
  { q: "El calor se siente cuando la energía...", o: ["Se destruye", "Se transfiere", "Se congela"], c: 1, e: "Percibimos el calor cuando hay un flujo de energía hacia o desde nosotros.", h: "Movimiento de energía.", t: "La temperatura y el calor" },
  { q: "¿Qué sucede con las partículas de un cuerpo cuando su temperatura sube?", o: ["Se mueven más rápido", "Se mueven más lento", "Se detienen"], c: 0, e: "Mayor temperatura equivale a mayor agitación corpuscular.", h: "Más velocidad.", t: "La temperatura y el calor" },
  { q: "El calor y la temperatura son lo mismo:", o: ["Verdadero", "Falso", "Solo en los metales"], c: 1, e: "El calor es energía en tránsito y la temperatura es una medida de agitación.", h: "Son conceptos distintos.", t: "La temperatura y el calor" },
  { q: "¿Qué ocurre si pongo un objeto a 10°C junto a uno a 40°C?", o: ["El de 10°C le da calor al de 40°C", "El de 40°C le da calor al de 10°C", "Nada"], c: 1, e: "El calor siempre viaja del de mayor temperatura al de menor.", h: "Viaje de caliente a frío.", t: "La temperatura y el calor" },
  { q: "Cuando decimos 'hace calor', científicamente nos referimos a:", o: ["Alta temperatura ambiente", "Poco aire", "Mucha humedad"], c: 0, e: "Es una forma coloquial de decir que el ambiente tiene una temperatura elevada.", h: "Hablamos de grados Celsius.", t: "La temperatura y el calor" },
  { q: "La energía térmica de un cuerpo depende de:", o: ["Su color", "Su masa y temperatura", "Su forma"], c: 1, e: "Depende de cuántas partículas tiene y qué tan rápido se mueven.", h: "Cantidad y velocidad.", t: "La temperatura y el calor" },
  { q: "¿Qué es el frío científicamente?", o: ["Una energía opuesta al calor", "Ausencia o baja energía térmica", "Un gas"], c: 1, e: "El frío no existe como entidad, es la sensación de falta de calor.", h: "Menos movimiento corpuscular.", t: "La temperatura y el calor" },
  { q: "El calor se mide frecuentemente en:", o: ["Kilómetros", "Calorías o Joules", "Litros"], c: 1, e: "Como es una forma de energía, usamos unidades de energía.", h: "Unidades de energía.", t: "La temperatura y el calor" },
  { q: "¿Puede el calor viajar a través del vacío?", o: ["No, necesita aire", "Sí, mediante radiación", "Solo si hay agua"], c: 1, e: "La radiación no requiere materia para propagarse.", h: "Como el sol.", t: "La temperatura y el calor" },

  // 2. LA MEDICIÓN DE LA TEMPERATURA (14 preguntas)
  { q: "¿Qué propiedad física cambia en un termómetro de mercurio?", o: ["El color", "El volumen (se dilata)", "El peso"], c: 1, e: "El líquido sube porque se expande con el calor.", h: "Se hace más grande.", t: "La medición de la temperatura" },
  { q: "¿Cuál es el punto de fusión del agua en la escala Celsius?", o: ["100°C", "0°C", "32°C"], c: 1, e: "A 0°C el hielo comienza a transformarse en agua líquida.", h: "Cuando se congela.", t: "La medición de la temperatura" },
  { q: "¿A qué temperatura hierve el agua (punto de ebullición) a nivel del mar?", o: ["50°C", "100°C", "200°C"], c: 1, e: "A los 100°C el agua líquida pasa a ser vapor de forma masiva.", h: "Burbujas en la olla.", t: "La medición de la temperatura" },
  { q: "El instrumento para medir la temperatura corporal se llama:", o: ["Barómetro", "Termómetro clínico", "Anemómetro"], c: 1, e: "Está diseñado para rangos de temperatura humana.", h: "Lo usa el médico.", t: "La medición de la temperatura" },
  { q: "La escala Kelvin empieza en el 'Cero Absoluto', que equivale a:", o: ["0°C", "-273,15°C", "100°C"], c: 1, e: "Es el punto donde no hay movimiento corpuscular.", h: "Mucho frío teórico.", t: "La medición de la temperatura" },
  { q: "¿Por qué se dejó de usar el mercurio en termómetros hogareños?", o: ["Porque era caro", "Porque es tóxico", "Porque no medía bien"], c: 1, e: "Es un metal pesado peligroso para la salud y el ambiente.", h: "Es peligroso.", t: "La medición de la temperatura" },
  { q: "¿Qué escala de temperatura se usa mayormente en laboratorios científicos?", o: ["Celsius", "Fahrenheit", "Kelvin"], c: 2, e: "La escala Kelvin es la unidad del Sistema Internacional.", h: "Empieza en el cero absoluto.", t: "La medición de la temperatura" },
  { q: "¿Cómo funciona un termómetro digital?", o: ["Con un líquido rojo", "Con un sensor electrónico", "Con un resorte"], c: 1, e: "Usa un componente llamado termistor que cambia su resistencia con el calor.", h: "Usa batería.", t: "La medición de la temperatura" },
  { q: "¿Qué escala se usa comúnmente en Estados Unidos?", o: ["Celsius", "Kelvin", "Fahrenheit"], c: 2, e: "Es la escala tradicional de ese país.", h: "Empieza con F.", t: "La medición de la temperatura" },
  { q: "Si un termómetro marca 37°C en una persona, significa:", o: ["Tiene fiebre", "Temperatura normal", "Está congelada"], c: 1, e: "36°C a 37°C es el rango normal del cuerpo humano.", h: "Salud normal.", t: "La medición de la temperatura" },
  { q: "Para medir la temperatura de un horno industrial se usa:", o: ["Termómetro de alcohol", "Termocupla (pirómetro)", "Termómetro de mercurio"], c: 1, e: "Pueden medir temperaturas muy altas donde el vidrio se fundiría.", h: "Para calor extremo.", t: "La medición de la temperatura" },
  { q: "Los termómetros de alcohol suelen ser de color:", o: ["Plateado", "Rojo o azul", "Verde fluorescente"], c: 1, e: "Se les agrega colorante para ver mejor la columna.", h: "Colorante.", t: "La medición de la temperatura" },
  { q: "¿Qué sucede si ponemos un termómetro clínico en agua hirviendo?", o: ["Mide 100°C", "Se rompe", "Se apaga"], c: 1, e: "Los termómetros clínicos solo llegan hasta 42°C generalmente.", h: "No resiste tanto.", t: "La medición de la temperatura" },
  { q: "La temperatura ambiente normal en una casa suele ser de:", o: ["0 a 5°C", "20 a 25°C", "40 a 50°C"], c: 1, e: "Es el rango de confort térmico.", h: "Ni frío ni calor.", t: "La medición de la temperatura" },

  // 3. LA TRANSMISIÓN DEL CALOR (14 preguntas)
  { q: "¿Cómo se llama la transmisión de calor por contacto directo?", o: ["Convección", "Radiación", "Conducción"], c: 2, e: "Ocurre principalmente en sólidos cuando las partículas chocan entre sí.", h: "Tocar algo.", t: "La transmisión del calor" },
  { q: "La convección ocurre principalmente en:", o: ["Sólidos", "Vacío", "Fluidos (líquidos y gases)"], c: 2, e: "El calor se traslada por el movimiento de la masa del fluido.", h: "Aire o agua.", t: "La transmisión del calor" },
  { q: "¿Qué tipo de transmisión no necesita materia para viajar?", o: ["Conducción", "Radiación", "Convección"], c: 1, e: "La radiación viaja mediante ondas electromagnéticas.", h: "A través del vacío.", t: "La transmisión del calor" },
  { q: "Un material que deja pasar el calor fácilmente es un:", o: ["Aislante", "Conductor", "Semisólido"], c: 1, e: "Los metales son excelentes conductores.", h: "Cobre, plata, hierro.", t: "La transmisión del calor" },
  { q: "¿Cuál de estos es un buen aislante térmico?", o: ["Cobre", "Aluminio", "Telgopor"], c: 2, e: "Materiales con mucho aire atrapado son malos conductores.", h: "Mantiene el frío.", t: "La transmisión del calor" },
  { q: "El mango de madera de una sartén sirve para:", o: ["Que sea más linda", "Aislar el calor", "Que pese menos"], c: 1, e: "La madera es un aislante que evita quemaduras.", h: "Protección.", t: "La transmisión del calor" },
  { q: "En una estufa, el aire caliente sube por:", o: ["Conducción", "Radiación", "Convección"], c: 2, e: "El aire caliente es menos denso y genera corrientes ascendentes.", h: "Corrientes de aire.", t: "La transmisión del calor" },
  { q: "Sentir el calor de una fogata en la cara es:", o: ["Conducción", "Radiación", "Convección"], c: 1, e: "El calor llega por ondas infrarrojas a distancia.", h: "Calor a distancia.", t: "La transmisión del calor" },
  { q: "Un termo tiene doble pared de vidrio con vacío para evitar:", o: ["Que se rompa", "La conducción y convección", "La luz"], c: 1, e: "El vacío no tiene partículas, bloqueando estos dos tipos de transmisión.", h: "Bloquea el viaje del calor.", t: "La transmisión del calor" },
  { q: "¿Por qué los metales son buenos conductores?", o: ["Porque son brillantes", "Por su estructura de partículas", "Porque son pesados"], c: 1, e: "Sus partículas están muy juntas y transmiten la vibración rápido.", h: "Estructura interna.", t: "La transmisión del calor" },
  { q: "La brisa en la playa durante el día es un ejemplo de:", o: ["Conducción", "Convección", "Magnetismo"], c: 1, e: "El aire circula por diferencias de temperatura.", h: "Aire moviéndose.", t: "La transmisión del calor" },
  { q: "La lana nos mantiene calientes porque:", o: ["Genera calor propio", "Atrapa aire que es aislante", "Es mágica"], c: 1, e: "El aire quieto entre las fibras no deja escapar el calor del cuerpo.", h: "Aire atrapado.", t: "La transmisión del calor" },
  { q: "¿Cuál de estos materiales es el mejor conductor?", o: ["Plástico", "Plata", "Madera"], c: 1, e: "La plata es uno de los mejores conductores térmicos.", h: "Es un metal caro.", t: "La transmisión del calor" },
  { q: "Al calentar agua en una olla, el agua de abajo sube porque:", o: ["Se evapora", "Se vuelve menos densa", "Tiene miedo"], c: 1, e: "El calor expande el agua de abajo, se hace liviana y sube.", h: "Corrientes de agua.", t: "La transmisión del calor" },

  // 4. LOS ESTADOS DE LA MATERIA (14 preguntas)
  { q: "¿Qué estado de la materia tiene forma y volumen definidos?", o: ["Líquido", "Gaseoso", "Sólido"], c: 2, e: "Las partículas están muy juntas y ordenadas.", h: "Como una piedra.", t: "Los estados de la materia" },
  { q: "Los líquidos tienen volumen definido pero...", o: ["No tienen peso", "No tienen forma propia", "No tienen partículas"], c: 1, e: "Toman la forma del recipiente que los contiene.", h: "Se adaptan al vaso.", t: "Los estados de la materia" },
  { q: "¿Cuál de estos estados se puede comprimir (achicar) fácilmente?", o: ["Sólido", "Líquido", "Gaseoso"], c: 2, e: "Los gases tienen mucho espacio entre sus partículas.", h: "Como el aire en una jeringa.", t: "Los estados de la materia" },
  { q: "En el estado gaseoso, las partículas están:", o: ["Muy juntas", "En contacto pero desordenadas", "Muy separadas y veloces"], c: 2, e: "Vuelan libremente en todas direcciones.", h: "Mucha libertad.", t: "Los estados de la materia" },
  { q: "Un ejemplo de materia en estado líquido es:", o: ["Vapor", "Hielo", "Aceite"], c: 2, e: "El aceite fluye pero mantiene su volumen.", h: "Se puede derramar.", t: "Los estados de la materia" },
  { q: "¿Qué sucede con las partículas en el estado sólido?", o: ["Vibran en un lugar fijo", "Vuelan por el aire", "Se desplazan unas sobre otras"], c: 0, e: "Tienen fuerzas de atracción muy fuertes.", h: "Están 'atadas'.", t: "Los estados de la materia" },
  { q: "Los gases ocupan...", o: ["Solo el fondo del envase", "Todo el espacio disponible", "Un lugar fijo"], c: 1, e: "Se expanden hasta llenar cualquier recipiente.", h: "No tienen límites.", t: "Los estados de la materia" },
  { q: "¿Cuál es el cuarto estado de la materia (común en el sol)?", o: ["Gelatina", "Plasma", "Humo"], c: 1, e: "Es un gas ionizado con mucha energía.", h: "Está en las estrellas.", t: "Los estados de la materia" },
  { q: "Si pasamos 1 litro de agua de una jarra a un balde:", o: ["Cambia el volumen", "Cambia la forma", "Cambian ambos"], c: 1, e: "El volumen sigue siendo 1 litro, pero la forma cambia.", h: "Líquidos.", t: "Los estados de la materia" },
  { q: "¿Qué estado fluye pero no se puede comprimir?", o: ["Sólido", "Líquido", "Gaseoso"], c: 1, e: "Los líquidos fluyen pero sus partículas ya están muy cerca.", h: "Como el agua.", t: "Los estados de la materia" },
  { q: "El aire que nos rodea está en estado:", o: ["Plasma", "Líquido", "Gaseoso"], c: 2, e: "Es una mezcla de gases.", h: "Invisibles.", t: "Los estados de la materia" },
  { q: "Una mesa es un sólido porque:", o: ["Es de madera", "Sus partículas están muy unidas", "Es grande"], c: 1, e: "La fuerza de atracción corpuscular es alta.", h: "Dureza.", t: "Los estados de la materia" },
  { q: "¿Qué estado tiene la mayor energía cinética?", o: ["Sólido", "Líquido", "Gaseoso"], c: 2, e: "Las partículas de gas se mueven a gran velocidad.", h: "Mucho movimiento.", t: "Los estados de la materia" },
  { q: "El estado de una sustancia depende de:", o: ["Solo la presión", "Solo la temperatura", "Presión y temperatura"], c: 2, e: "Ambas afectan cómo se organizan las partículas.", h: "Dos factores.", t: "Los estados de la materia" },

  // 5. EL MODELO CORPUSCULAR DE LA MATERIA (14 preguntas)
  { q: "Según el modelo corpuscular, la materia está formada por:", o: ["Hilos invisibles", "Partículas o corpúsculos", "Energía pura"], c: 1, e: "Todo lo que vemos son pequeñas bolitas unidas.", h: "Pequeñas esferas.", t: "El modelo corpuscular de la materia" },
  { q: "¿Qué hay entre partícula y partícula?", o: ["Aire", "Agua", "Vacío"], c: 2, e: "No hay nada entre ellas, es espacio vacío.", h: "Nada de nada.", t: "El modelo corpuscular de la materia" },
  { q: "Las partículas están siempre:", o: ["Quietitas", "En movimiento", "Solo se mueven si las tocamos"], c: 1, e: "Incluso en sólidos, vibran constantemente.", h: "Eterno movimiento.", t: "El modelo corpuscular de la materia" },
  { q: "¿Qué sucede con el espacio entre partículas en un gas?", o: ["Es muy grande", "Es muy pequeño", "No existe"], c: 0, e: "Están muy alejadas unas de otras.", h: "Mucha distancia.", t: "El modelo corpuscular de la materia" },
  { q: "La fuerza que mantiene unidas a las partículas se llama:", o: ["Gravedad", "Fuerza de atracción", "Magnetismo"], c: 1, e: "Varía según el estado de la materia.", h: "Las mantiene juntas.", t: "El modelo corpuscular de la materia" },
  { q: "Si calentamos un gas, las partículas chocan...", o: ["Más suave", "Más fuerte y frecuente", "Igual"], c: 1, e: "Aumenta la energía y la violencia de los choques.", h: "Más velocidad.", t: "El modelo corpuscular de la materia" },
  { q: "¿Por qué los sólidos no se pueden comprimir?", o: ["Porque son duros", "Porque sus partículas ya están muy juntas", "Porque no tienen aire"], c: 1, e: "No hay espacio libre para acercarlas más.", h: "Sin espacio.", t: "El modelo corpuscular de la materia" },
  { q: "El modelo corpuscular explica que la materia es:", o: ["Continua", "Discontinua (con huecos)", "Infinita"], c: 1, e: "Es discontinua porque tiene espacios vacíos entre partículas.", h: "Como un rompecabezas.", t: "El modelo corpuscular de la materia" },
  { q: "En un líquido, las partículas pueden:", o: ["Volar por el aire", "Desplazarse unas sobre otras", "Estar fijas"], c: 1, e: "Esto permite que el líquido fluya.", h: "Se resbalan.", t: "El modelo corpuscular de la materia" },
  { q: "¿Qué partícula es más pequeña que un átomo?", o: ["Célula", "Electrón", "Gota"], c: 1, e: "Los electrones son partículas subatómicas.", h: "Muy, muy chiquito.", t: "El modelo corpuscular de la materia" },
  { q: "A mayor energía cinética, las partículas tienen:", o: ["Más masa", "Más velocidad", "Más brillo"], c: 1, e: "La energía cinética es la energía del movimiento.", h: "Rapidez.", t: "El modelo corpuscular de la materia" },
  { q: "El modelo corpuscular es una:", o: ["Verdad absoluta", "Teoría o modelo científico", "Ley de la selva"], c: 1, e: "Es una representación para entender la realidad.", h: "Es una explicación.", t: "El modelo corpuscular de la materia" },
  { q: "Cuando un sólido se funde, las partículas...", o: ["Se rompen", "Vencen parte de la atracción", "Se multiplican"], c: 1, e: "Ganan energía y se separan un poco.", h: "Se sueltan.", t: "El modelo corpuscular de la materia" },
  { q: "¿Qué sucede con el tamaño de cada partícula al calentar?", o: ["Se agrandan", "Se achican", "No cambian de tamaño"], c: 2, e: "La partícula no cambia, cambia el espacio entre ellas.", h: "Cuidado: truco.", t: "El modelo corpuscular de la materia" },

  // 6. LOS CAMBIOS DE ESTADO (15 preguntas)
  { q: "¿Cómo se llama el paso de sólido a líquido?", o: ["Fusión", "Ebullición", "Sublimación"], c: 0, e: "Como cuando el hielo se derrite.", h: "Derrretir.", t: "Los cambios de estado" },
  { q: "El paso de líquido a sólido se denomina:", o: ["Condensación", "Solidificación", "Fusión"], c: 1, e: "Ocurre al quitar calor al líquido.", h: "Congelar.", t: "Los cambios de estado" },
  { q: "La evaporación es un cambio de líquido a gas que ocurre:", o: ["En toda la masa a 100°C", "Lentamente en la superficie", "Solo si hay sol"], c: 1, e: "Ocurre a cualquier temperatura, solo en la capa de arriba.", h: "La ropa secándose.", t: "Los cambios de estado" },
  { q: "Cuando el vapor toca una tapa fría y se hace agua, ocurre:", o: ["Evaporación", "Condensación", "Sublimación"], c: 1, e: "El gas pierde calor y vuelve a ser líquido.", h: "Gotitas.", t: "Los cambios de estado" },
  { q: "La ebullición ocurre cuando:", o: ["Solo arriba", "En toda la masa del líquido", "Hace frío"], c: 1, e: "Es un proceso violento con burbujas en todo el líquido.", h: "Hervir.", t: "Los cambios de estado" },
  { q: "El paso directo de sólido a gas (sin ser líquido) es:", o: ["Fusión", "Sublimación", "Vaporización"], c: 1, e: "Como sucede con la naftalina o el hielo seco.", h: "Salto de estado.", t: "Los cambios de estado" },
  { q: "¿Qué cambio de estado requiere ganar energía (calor)?", o: ["Solidificación", "Fusión", "Condensación"], c: 1, e: "Para derretir algo hay que darle calor.", h: "Dar energía.", t: "Los cambios de estado" },
  { q: "¿Qué cambio de estado libera energía (se enfría)?", o: ["Evaporación", "Fusión", "Solidificación"], c: 2, e: "Al congelarse, la sustancia entrega su calor.", h: "Quitar energía.", t: "Los cambios de estado" },
  { q: "La escarcha en el pasto es ejemplo de:", o: ["Fusión", "Sublimación inversa", "Evaporación"], c: 1, e: "El vapor de agua pasa a sólido directamente.", h: "Hielo directo.", t: "Los cambios de estado" },
  { q: "Al calentar un metal, este se estira un poco. Esto es:", o: ["Dilatación", "Contracción", "Fusión"], c: 0, e: "Las partículas se alejan y el cuerpo ocupa más lugar.", h: "Se agranda.", t: "Los cambios de estado" },
  { q: "¿Por qué las vías del tren tienen espacios entre ellas?", o: ["Para ahorrar metal", "Para la dilatación en verano", "Para que el tren haga ruido"], c: 1, e: "Evita que se tuerzan cuando el calor las expande.", h: "Espacio para crecer.", t: "Los cambios de estado" },
  { q: "Si un globo se pone en el freezer, este:", o: ["Se infla", "Se achica (contracción)", "Explota"], c: 1, e: "El aire adentro pierde energía y ocupa menos volumen.", h: "Se encoge.", t: "Los cambios de estado" },
  { q: "La vaporización incluye dos procesos:", o: ["Fusión y Vapor", "Evaporación y Ebullición", "Lluvia y Nieve"], c: 1, e: "Son las dos formas de pasar de líquido a gas.", h: "Dos caminos.", t: "Los cambios de estado" },
  { q: "Cuando sudamos y el viento nos refresca es por la:", o: ["Condensación", "Evaporación", "Solidificación"], c: 1, e: "Al evaporarse, el sudor nos quita calor del cuerpo.", h: "El sudor se va.", t: "Los cambios de estado" },
  { q: "El punto de fusión y de solidificación del agua es:", o: ["El mismo (0°C)", "Distinto", "100°C"], c: 0, e: "Es la temperatura donde conviven el sólido y el líquido.", h: "Es 0°C.", t: "Los cambios de estado" },

  // 7. EL AIRE Y LA ATMÓSFERA (15 preguntas)
  { q: "¿Cuál es el gas más abundante en nuestra atmósfera?", o: ["Oxígeno", "Dióxido de Carbono", "Nitrógeno"], c: 2, e: "El nitrógeno compone el 78% del aire.", h: "78 por ciento.", t: "El aire y la atmósfera" },
  { q: "¿Qué porcentaje de oxígeno tiene el aire aproximadamente?", o: ["78%", "21%", "1%"], c: 1, e: "Es la cantidad justa para la vida animal.", h: "Casi un cuarto.", t: "El aire y la atmósfera" },
  { q: "La capa de aire que protege a la Tierra se llama:", o: ["Hidrósfera", "Biósfera", "Atmósfera"], c: 2, e: "Filtra rayos solares y mantiene la temperatura.", h: "Manto de gases.", t: "El aire y la atmósfera" },
  { q: "El aire tiene peso:", o: ["Falso", "Verdadero", "Solo si llueve"], c: 1, e: "Como tiene partículas con masa, la gravedad lo atrae.", h: "Es materia.", t: "El aire y la atmósfera" },
  { q: "¿Qué gas usan las plantas para la fotosíntesis?", o: ["Oxígeno", "Dióxido de Carbono", "Argón"], c: 1, e: "Toman CO2 y liberan Oxígeno.", h: "Lo que exhalamos.", t: "El aire y la atmósfera" },
  { q: "El aire caliente tiende a:", o: ["Bajar al suelo", "Subir", "Ir hacia los costados"], c: 1, e: "Es menos denso que el aire frío.", h: "Globos aerostáticos.", t: "El aire y la atmósfera" },
  { q: "La presión atmosférica es mayor en:", o: ["La cima de una montaña", "A nivel del mar", "En el espacio"], c: 1, e: "Hay más aire encima nuestro presionando.", h: "Donde hay más aire arriba.", t: "El aire y la atmósfera" },
  { q: "¿Qué gas nos protege de los rayos ultravioletas?", o: ["Oxígeno", "Ozono", "Helio"], c: 1, e: "La capa de ozono es vital en la estratosfera.", h: "Empieza con O.", t: "El aire y la atmósfera" },
  { q: "El viento se produce por:", o: ["Las aspas de los molinos", "Diferencias de temperatura y presión", "El movimiento del mar"], c: 1, e: "El aire se mueve de zonas frías a cálidas.", h: "Viaje del aire.", t: "El aire y la atmósfera" },
  { q: "Un globo inflado con helio sube porque:", o: ["El helio es muy pesado", "El helio es menos denso que el aire", "El helio es aire caliente"], c: 1, e: "Tiene menos masa por unidad de volumen.", h: "Más liviano.", t: "El aire y la atmósfera" },
  { q: "¿Cómo se llama la capa de la atmósfera donde vivimos?", o: ["Troposfera", "Exosfera", "Mesosfera"], c: 0, e: "Es la capa más baja donde ocurre el clima.", h: "Empieza con T.", t: "El aire y la atmósfera" },
  { q: "El aire es una mezcla de:", o: ["Solo un gas", "Muchos gases y partículas", "Solo oxígeno y agua"], c: 1, e: "Contiene nitrógeno, oxígeno, argón, CO2 y vapor de agua.", h: "Es una mezcla.", t: "El aire y la atmósfera" },
  { q: "Sin atmósfera, la temperatura de la Tierra sería:", o: ["Igual", "Muy extrema (muy frío y muy calor)", "Siempre caliente"], c: 1, e: "La atmósfera actúa como un invernadero natural.", h: "Efecto invernadero.", t: "El aire y la atmósfera" },
  { q: "¿Qué gas expulsamos al respirar?", o: ["Oxígeno", "Dióxido de Carbono", "Nitrógeno"], c: 1, e: "Es el residuo de nuestra respiración celular.", h: "CO2.", t: "El aire y la atmósfera" },
  { q: "¿Por qué el aire es materia?", o: ["Porque se puede ver", "Porque tiene masa y ocupa lugar", "Porque es transparente"], c: 1, e: "Cumple con las dos condiciones básicas de la materia.", h: "Masa y volumen.", t: "El aire y la atmósfera" }
];
let score = 0, currentIdx = 0, needsReview = new Set(), hintUsed = false;

// --- NUEVAS VARIABLES DE HISTORIAL ---
let maxScore = localStorage.getItem('maxScore') || 0;
let historial = JSON.parse(localStorage.getItem('historial')) || [];

function speak(text) {
  window.speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'es-AR';
  window.speechSynthesis.speak(msg);
}

function mainMenu() {
  document.getElementById('title').innerText = "MENÚ PRINCIPAL";
  
  let historialHTML = historial.length > 0 
    ? historial.slice(-3).reverse().map(h => `<li>${h.fecha}: <b>${h.puntos} pts</b></li>`).join('')
    : "<li>Aún no hay intentos</li>";

  document.getElementById('display-area').innerHTML = `
    <div style="text-align:center; margin-bottom:15px;">
      <div style="background:#fefce8; border:2px solid #facc15; padding:10px; border-radius:15px; color:#854d0e;">
        🏆 <b>RÉCORD PERSONAL: ${maxScore} pts</b>
      </div>
    </div>
    
    <center>
      <img src="data:image/jpeg;base64,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" 
           alt="Científico"
           class="edu-img" 
           style="height:150px; width:auto; border: 3px solid #38bdf8; border-radius: 20px; background: white;">
    </center>
    
    <div class="theory-section" style="font-size:0.85rem; background:#f8fafc; margin-top:10px;">
      <b>🕒 Últimos intentos:</b>
      <ul style="margin:5px 0; padding-left:20px;">${historialHTML}</ul>
    </div>
  `;
  
  document.getElementById('help-area').innerHTML = "";
  document.getElementById('action-buttons').innerHTML = `
    <button onclick="startAventura()" style="background:#2563eb">🚀 INICIAR SIMULACRO (30 NIVELES)</button>
    <button onclick="showLibraryMenu()" style="background:#10b981">📚 BIBLIOTECA COMPLETA</button>
    <button onclick="showGlosario()" style="background:#f59e0b">📖 GLOSARIO CLAVE</button>
  `;
}

function showLibraryMenu() {
  document.getElementById('title').innerText = "TEMAS DEL LIBRO";
  let btns = "";
  for(let k in BIBLIOTECA_EXTENDIDA) btns += `<button class="option-btn" onclick="showInfo('${k}')">${BIBLIOTECA_EXTENDIDA[k].t}</button>`;
  document.getElementById('display-area').innerHTML = "<p>Elegí un tema para repasar:</p>";
  document.getElementById('action-buttons').innerHTML = btns;
}

function showInfo(k) {
  const info = BIBLIOTECA_EXTENDIDA[k];
  document.getElementById('display-area').innerHTML = `
    <img src="${info.img}" class="edu-img">
    <div class="theory-section">${info.d}</div>
    <div class="example-box">${info.ex}</div>
    <div class="theory-section" style="background:#fff7ed">💡 <b>Datazo:</b> ${info.dat}</div>
  `;
  document.getElementById('action-buttons').innerHTML = `<button onclick="showLibraryMenu()">⬅️ VOLVER</button>`;
  speak(info.v);
}

function showGlosario() {
  document.getElementById('title').innerText = "GLOSARIO POR TEMAS";
  let html = "";
  
  for (let tema in GLOSARIO_CATEGORIZADO) {
    // Título de la sección según tu imagen
    html += `<h3 style="color:#2563eb; margin-top:20px; border-bottom: 2px solid #e2e8f0; font-size: 1rem;">${tema}</h3>`;
    
    GLOSARIO_CATEGORIZADO[tema].forEach(i => {
      html += `
        <div class="theory-section" onclick="speak('${i.p}: ${i.d}')" style="cursor:pointer; margin-bottom:8px;">
          <b style="color:#0369a1;">${i.p}:</b> ${i.d}
        </div>`;
    });
  }
  
  document.getElementById('display-area').innerHTML = html;
  document.getElementById('action-buttons').innerHTML = `<button onclick="mainMenu()">⬅️ VOLVER</button>`;
}

// --- LOGICA DE SELECCIÓN ALEATORIA ---
let PREGUNTAS = []; 

function startAventura() {
  score = 0; 
  currentIdx = 0; 
  needsReview.clear();
  
  // 1. Mezclamos el banco de 100
  let mezcladas = [...BANCO_PREGUNTAS].sort(() => Math.random() - 0.5);
  
  // 2. Elegimos las primeras 30 para este simulacro
  PREGUNTAS = mezcladas.slice(0, 30);
  
  updateHUD(); 
  loadQuestion();
}

function loadQuestion() {
  hintUsed = false;
  document.getElementById('help-area').innerHTML = "";
  const item = PREGUNTAS[currentIdx];
  document.getElementById('title').innerText = `NIVEL ${currentIdx + 1}/${PREGUNTAS.length}`;
  document.getElementById('display-area').innerHTML = `<p style="font-weight:bold; font-size:1.1rem; text-align:center">${item.q}</p>`;
  
  const btns = document.getElementById('action-buttons');
  btns.innerHTML = "";
  
  item.o.forEach((opt, idx) => {
    const b = document.createElement('button');
    b.className = "option-btn";
    b.innerText = opt;
    b.onclick = () => checkAnswer(idx);
    btns.appendChild(b);
  });

  const hBtn = document.createElement('button');
  hBtn.innerText = "💡 PISTA (-5 pts)";
  hBtn.style.background = "#f59e0b";
  hBtn.onclick = () => {
    hintUsed = true;
    document.getElementById('help-area').innerHTML = `<div class="hint-box"><b>Pista:</b> ${item.h}</div>`;
    speak(item.h);
  };
  btns.appendChild(hBtn);
  speak(item.q);
}

function checkAnswer(selected) {
  const item = PREGUNTAS[currentIdx];
  const isCorrect = selected === item.c;
  const feedback = isCorrect ? item.e : `¡Casi! La respuesta correcta era: "${item.o[item.c]}". ${item.e}`;
  
  if(isCorrect) {
    score += hintUsed ? 5 : 10;
    document.getElementById('sfx-win').play();
  } else {
    needsReview.add(item.t);
  }

  document.getElementById('display-area').innerHTML += `
    <div class="feedback-box ${isCorrect ? 'correct' : 'incorrect'}">${feedback}</div>
  `;
  
  document.getElementById('action-buttons').innerHTML = `<button onclick="nextStep()">CONTINUAR ➡️</button>`;
  speak(feedback);
}

function nextStep() {
  currentIdx++;
  if(currentIdx < PREGUNTAS.length) loadQuestion(); else endGame();
  updateHUD();
}

function updateHUD() {
  document.getElementById('points').innerText = score;
  document.getElementById('rank').innerText = score >= (PREGUNTAS.length * 8) ? "Genio 🏅" : "Estudiante";
}

function endGame() {
  // --- LÓGICA DE GUARDADO ---
  // 1. Guardar en historial
  const intento = {
    puntos: score,
    fecha: new Date().toLocaleDateString() + " " + new Date().getHours() + ":" + new Date().getMinutes()
  };
  historial.push(intento);
  localStorage.setItem('historial', JSON.stringify(historial));

  // 2. Actualizar Récord Máximo
  if (score > maxScore) {
    maxScore = score;
    localStorage.setItem('maxScore', maxScore);
    speak("¡Felicitaciones! Superaste tu récord personal.");
  }
  // --------------------------

  document.getElementById('title').innerText = "RESUMEN FINAL";
  let temas = Array.from(needsReview).join(", ");
  document.getElementById('display-area').innerHTML = `
    <center>
      <h3 style="margin:0">¡Simulacro terminado!</h3>
      <div style="font-size:3.5rem; color:#2563eb; font-weight:bold;">${score}</div>
      <p style="margin:0 0 10px 0">Puntos obtenidos</p>
      ${score === maxScore ? "<b style='color:#f59e0b'>⭐ NUEVO RÉCORD ⭐</b>" : ""}
    </center>
    <div class="theory-section">
      <b>🔍 Temas que fallaste:</b><br>
      ${temas || "¡Ninguno! Estás listo para el 10."}
    </div>
  `;
  document.getElementById('action-buttons').innerHTML = `<button onclick="mainMenu()">VOLVER AL INICIO</button>`;
}

mainMenu();
