
const db = require("../../../database/databaseconfig");

const GetAllMedicos = async () => {
  return (
    await db.query(
      "SELECT * FROM medicos WHERE deleted = false ORDER BY nome ASC"
    )
  ).rows;
};

const GetMedicoByID = async (medicoIDPar) => {
  return (
    await db.query(
      "SELECT * FROM medicos WHERE medicoid = $1 AND deleted = false",
      [medicoIDPar]
    )
  ).rows;
};

const InsertMedico = async (medicoREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO medicos (crm, nome, especialidade) VALUES ($1, $2, $3)",
        [
          medicoREGPar.crm,
          medicoREGPar.nome,
          medicoREGPar.especialidade
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlMedicos|InsertMedico] " + error.message;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const UpdateMedico = async (medicoIDPar, medicoREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE medicos SET crm = $2, nome = $3, especialidade = $4 " +
        "WHERE medicoid = $1 AND deleted = false",
        [
          medicoIDPar,
          medicoREGPar.crm,
          medicoREGPar.nome,
          medicoREGPar.especialidade
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlMedicos|UpdateMedico] " + error.message;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const DeleteMedico = async (medicoIDPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE medicos SET deleted = true WHERE medicoid = $1",
        [medicoIDPar]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlMedicos|DeleteMedico] " + error.message;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

module.exports = {
  GetAllMedicos,
  GetMedicoByID,
  InsertMedico,
  UpdateMedico,
  DeleteMedico
};
