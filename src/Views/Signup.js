import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    console.log("props: ", this.props);
    console.log("state: ", this.props?.location?.data);
    this.state = { data: this.props?.location?.data };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
        form: {
            ...this.state.form,
            [e.target.name]: e.target.value
        }
    })
}

  handleSubmit = (e) => {
      console.log(e.target)
   }

  render() {
    return (
      <div className="col-md-12" id="conåfirmacion">
        <div className="panel panel-default">
          <div className="panel-heading" align="center">
            <div className="panel-title">Confirmación de CURP</div>
          </div>
          <div className="panel-body">
            <div className="form-group" align="center">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-3">
                    <div>
                      <label forname="nombre">Nombre:</label>
                    </div>
                    <div className="str" id="nombred"></div>
                    <input
                      className="information_input"
                      name="nombre"
                      id="nombre"
                      value={this.state?.data?.name}
                      readOnly
                    />
                  </div>
                  <div className="col-md-3">
                    <div>
                      <label forname="paterno">Primer apellido:</label>
                    </div>
                    <div className="str" id="paternod"></div>
                    <input
                      className="information_input"
                      name="paterno"
                      id="paterno"
                      value={this.state?.data?.firstLastName}
                      readOnly
                    />
                  </div>
                  <div className="col-md-3">
                    <div>
                      <label forname="materno">Segundo apellido:</label>
                    </div>
                    <div className="str" id="maternod"></div>
                    <input
                      className="information_input"
                      name="materno"
                      id="materno"
                      value={this.state?.data?.secondLastName}
                      readOnly
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div>
                      <label forname="curp">CURP:</label>
                    </div>
                    <div className="str" id="curppd"></div>
                    <input
                      className="information_input"
                      name="curp"
                      id="curp"
                      value={this.state?.data?.curp}
                      readOnly
                    />
                  </div>
                  <div className="col-md-3">
                    <div>
                      <label forname="fechanac">Fecha de nacimiento:</label>
                    </div>
                    <div className="str" id="fechanacd"></div>
                    <input
                      className="information_input"
                      name="fechanac"
                      id="fechanac"
                      value={this.state?.data?.dob}
                      readOnly
                    />
                  </div>
                  <div className="col-md-3">
                    <div>
                      <label forname="entidad">Entidad de nacimiento:</label>
                    </div>
                    <div className="str" id="entidad_d"></div>
                    <input
                      className="information_input"
                      name="entidad"
                      id="entidad"
                      value={this.state?.data?.pob}
                      readOnly
                    />
                  </div>
                  <div className="col-md-2">
                    <div>
                      <label forname="sexo">Sexo:</label>
                    </div>
                    <div className="str" id="sexod"></div>
                    <input
                      className="information_input"
                      name="sexo"
                      id="sexo"
                      value={this.state?.data?.gender}
                      readOnly
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading" align="center">
            <div className="panel-title">
              Lugar en donde voy a vacunarme y datos para localizarme
            </div>
          </div>
          <div className="panel-body">
            <div className="form-group" align="center">
              <div className="row">
                <div className="col-md-3">
                  <div>
                    <label forname="calle">Entidad:</label>
                  </div>
                  <select
                    name="entidadd"
                    id="entidadd"
                    onChange={this.handleChange}
                    className="form-control"
                    required
                  >
                    <option value="0">--</option>
                    <option value="1">AGUASCALIENTES</option>
                    <option value="2">BAJA CALIFORNIA</option>
                    <option value="3">BAJA CALIFORNIA SUR</option>
                    <option value="4">CAMPECHE</option>
                    <option value="7">CHIAPAS</option>
                    <option value="8">CHIHUAHUA</option>
                    <option value="5">COAHUILA</option>
                    <option value="6">COLIMA</option>
                    <option value="9">DISTRITO FEDERAL</option>
                    <option value="10">DURANGO</option>
                    <option value="11">GUANAJUATO</option>
                    <option value="12">GUERRERO</option>
                    <option value="13">HIDALGO</option>
                    <option value="14">JALISCO</option>
                    <option value="15">MEXICO</option>
                    <option value="16">MICHOACAN</option>
                    <option value="17">MORELOS</option>
                    <option value="18">NAYARIT</option>
                    <option value="19">NUEVO LEON</option>
                    <option value="20">OAXACA</option>
                    <option value="21">PUEBLA</option>
                    <option value="22">QUERETARO</option>
                    <option value="23">QUINTANA ROO</option>
                    <option value="24">SAN LUIS POTOSI</option>
                    <option value="25">SINALOA</option>
                    <option value="26">SONORA</option>
                    <option value="27">TABASCO</option>
                    <option value="28">TAMAULIPAS</option>
                    <option value="29">TLAXCALA</option>
                    <option value="30">VERACRUZ</option>
                    <option value="31">YUCATAN</option>
                    <option value="32">ZACATECAS</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <div>
                    <label forname="calle">Municipio:</label>
                  </div>
                  <select onChange={this.handleChange} name="municipio" id="municipio" className="form-control">
                    <option value="0">--</option>
                    <option value="1">AGUASCALIENTES</option>
                    <option value="2">BAJA CALIFORNIA</option>
                    <option value="3">BAJA CALIFORNIA SUR</option>
                    <option value="4">CAMPECHE</option>
                    <option value="7">CHIAPAS</option>
                    <option value="8">CHIHUAHUA</option>
                    <option value="5">COAHUILA</option>
                    <option value="6">COLIMA</option>
                    <option value="9">DISTRITO FEDERAL</option>
                    <option value="10">DURANGO</option>
                    <option value="11">GUANAJUATO</option>
                    <option value="12">GUERRERO</option>
                    <option value="13">HIDALGO</option>
                    <option value="14">JALISCO</option>
                    <option value="15">MEXICO</option>
                    <option value="16">MICHOACAN</option>
                    <option value="17">MORELOS</option>
                    <option value="18">NAYARIT</option>
                    <option value="19">NUEVO LEON</option>
                    <option value="20">OAXACA</option>
                    <option value="21">PUEBLA</option>
                    <option value="22">QUERETARO</option>
                    <option value="23">QUINTANA ROO</option>
                    <option value="24">SAN LUIS POTOSI</option>
                    <option value="25">SINALOA</option>
                    <option value="26">SONORA</option>
                    <option value="27">TABASCO</option>
                    <option value="28">TAMAULIPAS</option>
                    <option value="29">TLAXCALA</option>
                    <option value="30">VERACRUZ</option>
                    <option value="31">YUCATAN</option>
                    <option value="32">ZACATECAS</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <div>
                    <label forname="calle">CP:</label>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    name="cp"
                    id="cp"
                    value=""
                    maxLength="5"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row"></div>
              <div className="row">
                <div className="col-md-3">
                  <div>
                    <label forname="curp">Teléfono (1):</label>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    name="telefono_1"
                    id="telefono_1"
                    value=""
                    maxLength="10"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <div>
                    <label forname="curp">Teléfono (2):</label>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    name="telefono_2"
                    id="telefono_2"
                    value=""
                    maxLength="10"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <div>
                    <label forname="curp">Correo electrónico personal:</label>
                  </div>
                  <input
                    className="form-control"
                    type="email"
                    name="correoe"
                    id="correoe"
                    value=""
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <div>
                    <label forname="curp">Correo electrónico de apoyo:</label>
                  </div>
                  <input
                    className="form-control"
                    type="email"
                    name="correoea"
                    id="correoea"
                    value=""
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <label forname="curp">Notas de contacto:</label>
                  </div>
                  <textarea
                    name="nota"
                    id="nota"
                    className="form-control"
                    // value={this.props.formValues.lastName}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-sm-12 controls" style={{ marginTop: "20px" }}>
                <button className="btn btn-primary">Quiero vacunarme</button>
                <Link to="/" className="btn btn-secondary">
                  Regresar
                </Link>
              </div>
            </div>
            <div id="#msgsub"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
