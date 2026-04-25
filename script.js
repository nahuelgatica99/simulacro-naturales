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

// --- BANCO DE 60 PREGUNTAS COMPLETO ---
const BANCO_PREGUNTAS = [
  // --- CALOR Y TEMPERATURA (1-12) ---
  { q: "¿Qué pasa con las partículas al calentar algo?", o: ["Se detienen", "Se mueven más rápido", "Se rompen"], c: 1, e: "El calor aumenta la energía y el movimiento de las partículas.", h: "Calor es movimiento.", t: "Modelo Corpuscular" },
  { q: "¿Hacia dónde viaja siempre el calor?", o: ["Frío a Caliente", "Caliente a Frío", "No viaja"], c: 1, e: "La energía fluye del cuerpo con más temperatura al de menos.", h: "El calor busca equilibrar.", t: "Termodinámica" },
  { q: "La temperatura mide:", o: ["La masa", "La agitación de las partículas", "El peso"], c: 1, e: "Mide qué tan rápido vibran las partículas.", h: "No es lo mismo que calor.", t: "Temperatura" },
  { q: "El equilibrio térmico se alcanza cuando:", o: ["Las temperaturas se igualan", "Una cosa se congela", "El calor sube"], c: 0, e: "Ya no hay flujo de energía porque empataron.", h: "Empate térmico.", t: "Equilibrio" },
  { q: "La energía térmica depende de:", o: ["Solo la masa", "Solo el color", "Masa y temperatura"], c: 2, e: "Más partículas moviéndose es más energía.", h: "Cantidad de materia.", t: "Termodinámica" },
  { q: "La palabra 'Térmico' viene de:", o: ["Dynamis", "Thermas", "Corpus"], c: 1, e: "Thermas en griego significa calor.", h: "Etimología.", t: "Glosario" },
  { q: "El 'Cero Absoluto' es:", o: ["0 grados Celsius", "-273 grados Celsius", "100 grados"], c: 1, e: "Es la temperatura teórica donde nada se mueve.", h: "Límite físico.", t: "Glosario" },
  { q: "Para estudiar el calor usamos la:", o: ["Biología", "Termodinámica", "Geología"], c: 1, e: "Es la rama que explica estos fenómenos.", h: "Nombre de la ciencia.", t: "Termodinámica" },
  { q: "¿Qué sucede si mezclamos agua a 20°C con agua a 20°C?", o: ["Sube a 40°C", "Se mantiene a 20°C", "Baja a 0°C"], c: 1, e: "Al estar a la misma temperatura, ya están en equilibrio.", h: "No hay diferencia térmica.", t: "Equilibrio" },
  { q: "Si un cuerpo tiene más masa que otro a igual temperatura:", o: ["Tiene más calor", "Tiene menos calor", "Tienen igual calor"], c: 0, e: "A más partículas, más energía térmica total almacenada.", h: "Pensá en una pileta vs una taza.", t: "Termodinámica" },
  { q: "¿Cómo se llama la energía 'en movimiento' entre cuerpos?", o: ["Temperatura", "Calor", "Grados"], c: 1, e: "El calor es energía que transita de un objeto a otro.", h: "Es energía viajera.", t: "Termodinámica" },
  { q: "¿En qué unidad medimos comúnmente la temperatura?", o: ["Metros", "Grados Celsius", "Kilogramos"], c: 1, e: "Usamos la escala Celsius (°C) para el clima y el cuerpo.", h: "Se usa un termómetro.", t: "Temperatura" },

  // --- MATERIALES: CONDUCTORES Y AISLANTES (13-24) ---
  { q: "El metal es un material...", o: ["Aislante", "Conductor", "Gaseoso"], c: 1, e: "Los metales dejan pasar el calor con facilidad.", h: "Cuchara metálica en té caliente.", t: "Materiales" },
  { q: "El telgopor y el corcho son:", o: ["Conductores", "Aislantes", "Líquidos"], c: 1, e: "Tienen aire atrapado que frena el calor.", h: "Se usan en heladeritas.", t: "Materiales" },
  { q: "¿Por qué las sartenes tienen mango de plástico?", o: ["Para que pesen menos", "Porque el plástico es aislante", "Para que sea más lindo"], c: 1, e: "El aislante evita que el calor pase a tu mano.", h: "Seguridad térmica.", t: "Materiales" },
  { q: "Si tocás madera y metal afuera en invierno:", o: ["Están igual", "El metal parece más frío", "La madera está más fría"], c: 1, e: "El metal te quita calor más rápido por ser conductor.", h: "Sensación térmica.", t: "Materiales" },
  { q: "Un termo mantiene el agua caliente porque:", o: ["Genera calor", "Tiene paredes aislantes", "Es de metal"], c: 1, e: "Reduce la pérdida de calor al exterior.", h: "Usa el vacío.", t: "Materiales" },
  { q: "Un abrigo de lana te protege porque:", o: ["Produce fuego", "Atrapa aire quieto", "Es muy pesado"], c: 1, e: "El aire atrapado funciona como un muro térmico.", h: "La lana es aislante.", t: "Materiales" },
  { q: "El vidrio es un material:", o: ["Buen conductor", "Mal conductor", "Metálico"], c: 1, e: "El vidrio no conduce el calor tan rápido como el metal.", h: "Se usa en ventanas dobles.", t: "Materiales" },
  { q: "Las pinzas de cocina suelen tener goma para:", o: ["No resbalar", "Aislar el calor", "Ambas son correctas"], c: 2, e: "La goma es aislante y mejora el agarre.", h: "Protección y utilidad.", t: "Materiales" },
  { q: "¿Cuál de estos es el mejor conductor?", o: ["Madera", "Cobre", "Plástico"], c: 1, e: "El cobre es uno de los mejores conductores térmicos.", h: "Se usa en cables y ollas.", t: "Materiales" },
  { q: "El aire en reposo funciona como:", o: ["Conductor", "Aislante", "Combustible"], c: 1, e: "El aire quieto es un excelente aislante térmico.", h: "Pensá en las plumas de las aves.", t: "Materiales" },
  { q: "¿Por qué el hielo dura más en una caja de telgopor?", o: ["Porque el telgopor enfría", "Porque es un aislante", "Porque es blanco"], c: 1, e: "Evita que el calor del ambiente entre a la caja.", h: "Mantiene el frío adentro.", t: "Materiales" },
  { q: "Los metales conducen calor porque sus partículas:", o: ["Están muy separadas", "Pasan la energía fácilmente", "No se mueven"], c: 1, e: "Su estructura permite un flujo rápido de energía.", h: "Es una autopista de calor.", t: "Materiales" },

  // --- CAMBIOS DE ESTADO (25-36) ---
  { q: "Cuando el vapor se hace gotitas en el espejo:", o: ["Fusión", "Condensación", "Evaporación"], c: 1, e: "El gas pierde calor y se transforma en líquido.", h: "Ocurre después de bañarse.", t: "Cambios" },
  { q: "El hielo derritiéndose es:", o: ["Solidificación", "Fusión", "Sublimación"], c: 1, e: "El sólido absorbe calor y se vuelve líquido.", h: "De sólido a líquido.", t: "Cambios" },
  { q: "El agua líquida pasando a hielo es:", o: ["Fusión", "Solidificación", "Ebullición"], c: 1, e: "Se quita calor hasta que el agua se congela.", h: "Líquido a sólido.", t: "Cambios" },
  { q: "Para que el agua hierva (ebullición) debe:", o: ["Perder calor", "Ganar calor", "Estar quieta"], c: 1, e: "Necesita energía para romper los lazos del líquido.", h: "Líquido a gas.", t: "Cambios" },
  { q: "La condensación es el paso de:", o: ["Sólido a gas", "Gas a líquido", "Líquido a sólido"], c: 1, e: "Se produce por enfriamiento.", h: "Gotitas de agua.", t: "Cambios" },
  { q: "¿Cómo se llama el paso de líquido a gas lento?", o: ["Ebullición", "Evaporación", "Fusión"], c: 1, e: "La evaporación ocurre en la superficie a cualquier temperatura.", h: "La ropa secándose al sol.", t: "Cambios" },
  { q: "Si ponemos alcohol en la mano y sentimos frío es porque:", o: ["El alcohol está helado", "Se está evaporando", "Se está congelando"], c: 1, e: "Al evaporarse, el alcohol nos quita calor.", h: "Cambio de líquido a gas.", t: "Cambios" },
  { q: "La nieve es agua en estado:", o: ["Gaseoso", "Líquido", "Sólido"], c: 2, e: "Son cristales de hielo formados en la atmósfera.", h: "Está muy fría.", t: "Cambios" },
  { q: "Al secarse un charco de lluvia ocurre:", o: ["Condensación", "Evaporación", "Solidificación"], c: 1, e: "El agua líquida pasa a vapor de agua.", h: "Sube al aire.", t: "Cambios" },
  { q: "¿Qué estado tiene forma y volumen propios?", o: ["Sólido", "Líquido", "Gaseoso"], c: 0, e: "Las partículas están muy juntas y ordenadas.", h: "Como una piedra.", t: "Modelo Corpuscular" },
  { q: "Los líquidos tienen volumen definido pero:", o: ["No tienen masa", "No tienen forma propia", "No tienen partículas"], c: 1, e: "Toman la forma del recipiente que los contiene.", h: "Como el agua en un vaso.", t: "Modelo Corpuscular" },
  { q: "El 'humito' que sale de la sopa caliente es:", o: ["Vapor invisible", "Gotitas de agua (vapor condensado)", "Aire puro"], c: 1, e: "Es vapor que se enfrió al contacto con el aire.", h: "Se ve blanco.", t: "Cambios" },

  // --- EL AIRE Y LA ATMÓSFERA (37-48) ---
  { q: "El aire caliente suele...", o: ["Bajar", "Subir", "Quedarse quieto"], c: 1, e: "El aire caliente es menos denso (más liviano) y flota.", h: "Globos aerostáticos.", t: "El Aire" },
  { q: "¿Qué gas es el más abundante en el aire?", o: ["Oxígeno", "Nitrógeno", "Argón"], c: 1, e: "El nitrógeno ocupa el 78% del aire.", h: "No es el que respiramos.", t: "Atmósfera" },
  { q: "¿Qué sucede con el volumen si el aire se calienta?", o: ["Se achica", "Se expande", "No cambia"], c: 1, e: "Las partículas chocan con más fuerza y se separan.", h: "Dilatación térmica.", t: "El Aire" },
  { q: "La brisa marina se produce por:", o: ["Diferencia de temperatura", "Los peces", "La sal"], c: 0, e: "El aire se mueve buscando equilibrio.", h: "Convección a gran escala.", t: "El Aire" },
  { q: "El aire tiene peso y ocupa lugar:", o: ["Falso", "Verdadero", "Solo si hay viento"], c: 1, e: "Aunque sea invisible, es materia.", h: "Propiedades del aire.", t: "El Aire" },
  { q: "Si ponés un globo al sol, este:", o: ["Se desinfla", "Se infla más", "Se pone azul"], c: 1, e: "El aire adentro se calienta y expande.", h: "Dilatación.", t: "El Aire" },
  { q: "¿Qué gas necesitamos para respirar?", o: ["Dióxido de Carbono", "Oxígeno", "Nitrógeno"], c: 1, e: "El oxígeno es vital para los seres vivos.", h: "21% del aire.", t: "Atmósfera" },
  { q: "La capa de aire que rodea la Tierra es la:", o: ["Hidrósfera", "Atmósfera", "Geósfera"], c: 1, e: "Es la capa gaseosa de nuestro planeta.", h: "Donde están las nubes.", t: "Atmósfera" },
  { q: "El viento es simplemente:", o: ["Aire en movimiento", "Oxígeno puro", "Vapor de agua"], c: 0, e: "Se produce por cambios de presión y temperatura.", h: "Se siente en la cara.", t: "El Aire" },
  { q: "Un globo inflado pesa más que uno desinflado porque:", o: ["El aire pesa", "El plástico se estira", "Es un truco"], c: 0, e: "El aire tiene masa y se puede pesar.", h: "Propiedad de la materia.", t: "El Aire" },
  { q: "El aire frío es más...", o: ["Pesado (denso)", "Liviano", "Caliente"], c: 0, e: "Sus partículas están más juntas y tiende a bajar.", h: "Baja hasta el suelo.", t: "El Aire" },
  { q: "El componente del aire que usan las plantas es:", o: ["Oxígeno", "Dióxido de Carbono", "Argón"], c: 1, e: "Lo usan para la fotosíntesis.", h: "Lo que exhalamos nosotros.", t: "Atmósfera" },

  // --- TRANSMISIÓN DE CALOR Y EXTRAS (49-60) ---
  { q: "En el vacío, el calor viaja por:", o: ["Conducción", "Radiación", "Convección"], c: 1, e: "Es la única forma en que el calor viaja sin materia.", h: "Como el Sol a la Tierra.", t: "Radiación" },
  { q: "La transferencia de calor por corrientes es:", o: ["Conducción", "Convección", "Radiación"], c: 1, e: "Ocurre en fluidos (agua o aire).", h: "Movimiento de masas.", t: "Transmisión" },
  { q: "En un día de sol, la arena quema porque:", o: ["Es conductora", "Tiene sol adentro", "Es un gas"], c: 0, e: "La arena absorbe y transmite calor rápidamente.", h: "Sólidos conductores.", t: "Materiales" },
  { q: "¿Cómo viaja el calor por una barra de metal?", o: ["Convección", "Radiación", "Conducción"], c: 2, e: "Viaja partícula a partícula por contacto.", h: "De un extremo al otro.", t: "Transmisión" },
  { q: "Sentir el calor de una fogata sin tocarla es:", o: ["Conducción", "Radiación", "Fricción"], c: 1, e: "El calor llega por ondas infrarrojas.", h: "A la distancia.", t: "Radiación" },
  { q: "En una casa, el piso suele estar más frío que el techo por:", o: ["Convección", "Radiación", "Mala suerte"], c: 0, e: "El aire caliente sube y el frío baja.", h: "Movimiento del aire.", t: "Transmisión" },
  { q: "¿Qué pasa con una barra de hierro si se calienta?", o: ["Se encoge", "Se dilata (estira)", "Se vuelve madera"], c: 1, e: "El calor hace que los sólidos aumenten su tamaño.", h: "Dilatación de sólidos.", t: "Modelo Corpuscular" },
  { q: "Las partículas de un gas están:", o: ["Muy juntas", "Muy separadas y veloces", "Vibrando apenas"], c: 1, e: "Vuelan libremente ocupando todo el espacio.", h: "Modelo Corpuscular.", t: "Estados" },
  { q: "¿Dónde están más quietas las partículas?", o: ["En el vapor", "En el agua", "En el hielo"], c: 2, e: "En los sólidos la energía cinética es menor.", h: "Estados de la materia.", t: "Modelo Corpuscular" },
  { q: "Al tocar un cubo de hielo, el calor viaja:", o: ["Del hielo a tu mano", "De tu mano al hielo", "No viaja"], c: 1, e: "Tu mano tiene más temperatura, por eso entrega calor.", h: "De mayor a menor.", t: "Termodinámica" },
  { q: "La ropa oscura al sol da más calor porque:", o: ["Refleja la luz", "Absorbe más radiación", "Es más pesada"], c: 1, e: "Los colores oscuros atrapan más energía solar.", h: "Absorción de energía.", t: "Radiación" },
  { q: "Para evitar que el calor escape de una casa usamos:", o: ["Ventanas de metal", "Aislantes en las paredes", "Pintura roja"], c: 1, e: "Los materiales aislantes mantienen el clima interno.", h: "Como un termo gigante.", t: "Materiales" }
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

let PREGUNTAS = []; // Variable global que contendrá las 30 de cada turno

function startAventura() {
  score = 0; 
  currentIdx = 0; 
  needsReview.clear();
  
  // 1. Mezclamos el banco de 60
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
