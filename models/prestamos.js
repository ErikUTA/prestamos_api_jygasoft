class Prestamo {
  constructor(
    CI,
    Nombre,
    Apellido_Paterno,
    Apellido_Materno,
    Cantidad_Prestada,
    Telefono,
    Email,
    Fecha_de_Prestamo,
    Dia_de_cobro,
    Meses_del_Prestamo,
    Intereses
  ) {
    this.CI = CI;
    this.Nombre = Nombre;
    this.Apellido_Paterno = Apellido_Paterno;
    this.Apellido_Materno = Apellido_Materno;
    this.Cantidad_Prestada = Cantidad_Prestada;
    this.Telefono = Telefono;
    this.Email = Email;
    this.Fecha_de_Prestamo = Fecha_de_Prestamo;
    this.Dia_de_cobro = Dia_de_cobro;
    this.Meses_del_Prestamo = Meses_del_Prestamo;
    this.Intereses = Intereses;
  }
}

module.exports = Prestamo;
