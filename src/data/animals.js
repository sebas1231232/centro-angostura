const initialAnimals = [
  {
    id: 'perdiz-chilena',
    nombre: 'Perdiz Chilena',
    // Asegúrate que esta ruta coincida con tu carpeta 'public'
    imageURL: '/images/Perdiz_chilena.jpg', 
    tipo: 'Ave',
    dondeVive: 'Habita en matorrales y pastizales.',
    comoEs: 'Plumaje críptico que le ayuda a camuflarse.',
    queCome: 'Semillas e insectos.',
    reproduccion: 'Nidifica en el suelo.',
    datoCurioso: 'Es un ave nativa de Chile.'
  },
  {
    id: 'churrin-del-norte',
    nombre: 'Churrín del Norte',
    imageURL: '/images/churrin-del-norte.webp',
    tipo: 'Ave',
    dondeVive: 'Zonas boscosas del norte de Chile.',
    comoEs: 'Un pequeño pájaro insectívoro.',
    queCome: 'Insectos.',
    reproduccion: 'Construye nidos en arbustos.',
    datoCurioso: 'Conocido por su llamado melodioso.'
  },
  {
    id: 'zorro-culpeo',
    nombre: 'Zorro Culpeo',
    // Ejemplo de GIF
    imageURL: '/images/zorro-culpeo.gif', 
    tipo: 'Mamífero',
    dondeVive: 'Montañas y valles.',
    comoEs: 'El cánido nativo más grande de Chile, pelaje gris y rojizo.',
    queCome: 'Roedores, conejos, y a veces fruta.',
    reproduccion: 'Madrigueras subterráneas.',
    datoCurioso: 'Es un ágil cazador crepuscular.'
  },
  {
    id: 'cisne-de-cuello-negro',
    nombre: 'Cisne de Cuello Negro',
    imageURL: 'https://cdn.pixabay.com/photo/2017/10/24/09/01/bird-2883390_1280.jpg',
    tipo: 'Ave',
    dondeVive: 'Lagunas y humedales.',
    comoEs: 'Cuerpo blanco y un elegante cuello negro.',
    queCome: 'Plantas acuáticas.',
    reproduccion: 'Nidos flotantes.',
    datoCurioso: 'Símbolo de los humedales del sur de Chile.'
  }
];

export default initialAnimals;