const db = require("../../../database/databaseconfig");

const GetAllConsultas = async () => {
  return (
    await db.query(
      "SELECT * FROM consultas WHERE deleted = false ORDER BY dataconsulta ASC"
    )
  ).rows;
};

const GetConsultaByID = async (consultaIDPar) => {
  return (
    await db.query(
      "SELECT * FROM consultas WHERE consultaoid = $1 AND deleted = false",
      [consultaIDPar]
    )
  ).rows;
};

const InsertConsulta = async (consultaREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO consultas (numeroconsulta, dataconsulta, valorconsulta, observacoes, medicoid) " +
        "VALUES ($1, $2, $3, $4, $5)",
        [
          consultaREGPar.numeroconsulta,
          consultaREGPar.dataconsulta,
          consultaREGPar.valorconsulta,
          consultaREGPar.observacoes,
          consultaREGPar.medicoid
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlConsultas|InsertConsulta] " + error.message;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const UpdateConsulta = async (consultaIDPar, consultaREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE consultas SET numeroconsulta = $2, dataconsulta = $3, " +
        "valorconsulta = $4, observacoes = $5, medicoid = $6 " +
        "WHERE consultaoid = $1 AND deleted = false",
        [
          consultaIDPar,
          consultaREGPar.numeroconsulta,
          consultaREGPar.dataconsulta,
          consultaREGPar.valorconsulta,
          consultaREGPar.observacoes,
          consultaREGPar.medicoid
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlConsultas|UpdateConsulta] " + error.message;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const DeleteConsulta = async (consultaIDPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE consultas SET deleted = true WHERE consultaoid = $1",
        [consultaIDPar]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlConsultas|DeleteConsulta] " + error.message;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

module.exports = {
  GetAllConsultas,
  GetConsultaByID,
  InsertConsulta,
  UpdateConsulta,
  DeleteConsulta
};