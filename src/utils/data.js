const departamentos = [
  { label: "Antioquia", value: "antioquia" },
  { label: "Amazonas", value: "amazonas" },
  { label: "Santander", value: "santander" },
];
const municipios = {
  antioquia: [
    "Medellin",
    "La Ceja",
    "Rionegro",
    "Marinilla",
    "Santa Rosa",
    "San Andres",
  ],
  santander: ["Aguada", "Villa de Leyva", "Aratoca"],
  amazonas: ["Leticia", "Tarapaca", "Puerto Arica", "Miriti Paraná"],
};

const programas = [
  { cod: "506", nombre: "Ingeniería de Sistemas" },
  { cod: "507", nombre: "Ingeniería de Telecomunicaciones" },
  { cod: "508", nombre: "Ingeniería de Mecatrónica" },
  { cod: "509", nombre: "Ingeniería de Mecánica" },
  { cod: "510", nombre: "Ingeniería de Electrónica" },
  { cod: "511", nombre: "Ingeniería de Energía" },
  { cod: "512", nombre: "Ingeniería de Petróleos" },
  { cod: "513", nombre: "Ingeniería de Minas" },
  { cod: "514", nombre: "Ingeniería de Materiales" },
  { cod: "515", nombre: "Ingeniería de Alimentos" },
];

const universidades = [
  { cod: "1", nombre: "Universidad Nacional de Colombia" },
  { cod: "2", nombre: "Universidad de Antioquia" },
  { cod: "3", nombre: "Universidad de los Andes" },
  { cod: "4", nombre: "Universidad de la Salle" },
  { cod: "5", nombre: "Universidad de Medellín" },
  { cod: "6", nombre: "Universidad EAFIT" },
  { cod: "7", nombre: "Universidad de Caldas" },
  { cod: "8", nombre: "Universidad de Cundinamarca" },
  { cod: "9", nombre: "Universidad de la Sabana" },
  { cod: "10", nombre: "Universidad de la Amazonia" },
];

const sedes = [
  { cod: "1", nombre: "Medellín - Ciudad universitaria" },
  { cod: "2", nombre: "Amalfi" },
  { cod: "3", nombre: "Bajo Cauca" },
  { cod: "4", nombre: "Magdalena Medio" },
  { cod: "5", nombre: "Norte" },
  { cod: "6", nombre: "Occidente" },
  { cod: "7", nombre: "Oriente" },
  { cod: "8", nombre: "Segovia" },
  { cod: "9", nombre: "Remedios" },
  { cod: "10", nombre: "Sonsón" },
  { cod: "11", nombre: "Suroeste" },
  { cod: "12", nombre: "Urabá" },
];

export { departamentos, municipios, programas, universidades, sedes };
