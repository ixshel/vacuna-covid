import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="list-info">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <img
                  data-v-9e928f9a=""
                  src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
                  href="/"
                  alt="logo gobierno de méxico"
                  className="logo_footer"
                  style={{ maxWidth: "90%" }}
                />
              </div>
              <div className="col-sm-3">
                <h5>Enlaces</h5>
                <ul>
                  <li>
                    <a
                      href="https://participa.gob.mx"
                      target="_blank"
                      rel="noreferrer"
                      title="Enlace abre en ventana nueva"
                    >
                      Participa
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gob.mx/publicaciones"
                      target="_blank"
                      rel="noreferrer"
                      title="Enlace abre en ventana nueva"
                    >
                      Publicaciones Oficiales
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.ordenjuridico.gob.mx"
                      target="_blank"
                      rel="noreferrer"
                      title="Enlace abre en ventana nueva"
                    >
                      Marco Jurídico
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://consultapublicamx.inai.org.mx/vut-web/"
                      target="_blank"
                      rel="noreferrer"
                      title="Enlace abre en ventana nueva"
                    >
                      Plataforma Nacional de Transparencia
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h5>¿Qué es gob.mx?</h5>
                <p>
                  Es el portal único de trámites, información y participación
                  ciudadana.
                  <a href="https://www.gob.mx/que-es-gobmx">Leer más</a>
                </p>
                <ul>
                  <li>
                    <a href="https://datos.gob.mx">Portal de datos abiertos</a>
                  </li>
                  <li>
                    <a href="https://www.gob.mx/accesibilidad">
                      Declaración de accesibilidad
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gob.mx/privacidadintegral">
                      Aviso de privacidad integral
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gob.mx/privacidadsimplificado">
                      Aviso de privacidad simplificado
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gob.mx/terminos">
                      Términos y Condiciones
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gob.mx/terminos#medidas-seguridad-informacion">
                      Política de seguridad
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gob.mx/sitemap">Mapa de sitio</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h5>
                  <a href="https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54">
                    Denuncia contra servidores públicos
                  </a>
                </h5>
                <h5>Síguenos en</h5>
                <ul className="list-inline">
                  <li>
                    <a
                      className="social-icon facebook"
                      target="_blank"
                      rel="noreferrer"
                      title="Enlace abre en ventana nueva"
                      href="https://www.facebook.com/gobmexico"
                      aria-label="Facebook de presidencia"
                      >F</a>
                  </li>
                  <li>
                    <a
                      className="social-icon twitter"
                      target="_blank"
                      rel="noreferrer"
                      title="Enlace abre en ventana nueva"
                      href="https://twitter.com/GobiernoMX"
                      aria-label="Twitter de presidencia"
                    >T</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid footer-pleca">
          <div className="row">
            <div className="col">
              <br />
              <br />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;