import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { curp: "", error: null, data: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      curp: e.target.value,
    });
  };

  handleSubmit = (e) => {
    if (this.state.curp.toUpperCase() === "ABCD111111HDFWWW00") {
      const data = {
        curp: this.state.curp,
        name: "Juan",
        firstLastName: "Perez",
        secondLastName: "Mendez",
        dob: "11-25-1986",
        gender: "Masculino",
        pob: "CDMX",
      };
      // this.props.data = data;
      this.props.history.push({
        pathname: `/vaccine-signup`,
        data: data
      });
    } else {
      this.setState({ error: "Curp Invalidad" });

      setTimeout(() => {
        this.setState({ error: null });
      }, 2500);
    }
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div
          style={{ paddingTop: "4rem" }}
          id="divcurp"
          className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
        >
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title">
                Tengo 60 años cumplidos y me quiero vacunar:
              </div>
            </div>
            <div style={{ paddingTop: "30px" }} className="panel-body">
              {this.state.error ? (
                <div class="alert alert-danger">{this.state.error}</div>
              ) : null}
              <form onSubmit={this.handleSubmit} className="form-horizontal">
                <div style={{ marginBottom: "25px" }} className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user"></i>
                  </span>
                  <input
                    value={this.state.curp}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    maxLength="18"
                    placeholder="Introducir CURP"
                    required
                  ></input>
                </div>
                <div className="col-sm-12 controls">
                  <button className="btn btn-primary pull-right" type="submit">
                    Confirmar CURP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "4rem" }} className="col-sm-12">
          <div
            style={{ marginBottom: "25px" }}
            className="col-sm-4 text-center"
          >
            <a href="registro_vacuna-01.pdf" className="btn btn-default btn-sm">
              Guía para registrarse en mivacuna
            </a>
          </div>
          <div
            style={{ marginBottom: "25px" }}
            className="col-sm-4 text-center"
          >
            <a
              href="https://www.gob.mx/curp/"
              target="_blank"
              className="btn btn-default btn-sm"
              rel="noreferrer"
            >
              ¿No conoces tu CURP...? Consúltala aquí
            </a>
          </div>
          <div
            style={{ marginBottom: "25px" }}
            className="col-sm-4 text-center"
          >
            <a href="aviso_de_privacidad.pdf" className="btn btn-link">
              Aviso de Privacidad
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
