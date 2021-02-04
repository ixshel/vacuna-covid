import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <header className="App-header">
        <nav
          className="navbar navbar-inverse navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbarMainCollapse"
              >
                <span className="sr-only">Interruptor de Navegación</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="https://www.gob.mx/">
                <img
                  src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
                  width="128"
                  height="48"
                  alt="Página de inicio, Gobierno de México"
                />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbarMainCollapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="https://www.gob.mx/tramites">Trámites</a>
                </li>
                <li>
                  <a href="https://www.gob.mx/gobierno">Gobierno</a>
                </li>
                <li>
                  <a href="https://www.gob.mx/busqueda">
                    <span className="sr-only">Búsqueda</span>
                    <i className="icon-search"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigation;
