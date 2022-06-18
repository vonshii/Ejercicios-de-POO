let auto = {
  marca: "mercedes",
  color: "plateado",
  modelo: "C63",
  estado: false,
  encenderAuto() {
    this.estado = true;
  },

  apagarAuto() {
    this.estado = false;
  },
};

document.write(
  `<br>color: ${auto.color} <br>marca: ${auto.marca} <br>modelo: ${auto.modelo}`
);

auto.encenderAuto();
document.write('<br>Estado del auto: '+((auto.estado)?'Encendido':'Apagado'));


auto.apagarAuto()
document.write('<br>Estado del auto: '+((auto.estado)?'Encendido':'Apagado'));



