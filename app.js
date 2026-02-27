class ServicioApp extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.clientes = {}; 
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="style.css">

      <form id="formServicio">
        <input type="text" id="cliente" placeholder="Nombre del Cliente">

        <select id="tipoServicio">
          <option value="">Seleccione servicio</option>
          <option value="Mantenimiento">Mantenimiento</option>
          <option value="Reparación">Reparación</option>
          <option value="Instalación de Red">Instalación de Red</option>
        </select>

        <input type="number" id="costo" placeholder="Costo $" min="1">

        <button type="submit">Agregar Servicio</button>
      </form>

      <div id="resultado"></div>
    `;

    this.shadowRoot
      .getElementById("formServicio")
      .addEventListener("submit", (e) => this.agregarServicio(e));
  }

  agregarServicio(e) {
    e.preventDefault();

    const cliente = this.shadowRoot.getElementById("cliente").value.trim();
    const tipo = this.shadowRoot.getElementById("tipoServicio").value;
    const costo = parseFloat(this.shadowRoot.getElementById("costo").value);

   
    if (cliente === "" || tipo === "" || isNaN(costo) || costo <= 0) {
      alert("Todos los campos son obligatorios y el costo debe ser mayor a 0");
      return;
    }

 
    if (!this.clientes[cliente]) {
      this.clientes[cliente] = [];
    }

   
    this.clientes[cliente].push({ tipo, costo });

    this.mostrarClientes();

    e.target.reset();
  }

  mostrarClientes() {
    const resultado = this.shadowRoot.getElementById("resultado");
    resultado.innerHTML = "";

    for (let cliente in this.clientes) {

      let totalCliente = this.clientes[cliente]
        .reduce((acc, servicio) => acc + servicio.costo, 0);

      let serviciosHTML = this.clientes[cliente]
        .map(servicio =>
          `<li>${servicio.tipo} - $${servicio.costo}</li>`
        ).join("");

      resultado.innerHTML += `
        <div class="cliente">
          <strong>Cliente: ${cliente}</strong>
          <ul>${serviciosHTML}</ul>
          <strong>Total Cliente: $${totalCliente}</strong>
        </div>
      `;
    }
  }
}

customElements.define("servicio-app", ServicioApp);