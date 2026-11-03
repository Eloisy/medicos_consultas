const mdlConsultas = require("../model/mdlConsultas");

const GetAllConsultas = (req, res) =>
  (async () => {
    let registro = await mdlConsultas.GetAllConsultas();
    res.json({ status: "ok", registro: registro });
  })();

const GetConsultaByID = (req, res) =>
  (async () => {
    const consultaID = parseInt(req.params.consultaoid);
    let registro = await mdlConsultas.GetConsultaByID(consultaID);
    res.json({ status: "ok", registro: registro });
  })();

const InsertConsulta = (req, res) =>
  (async () => {
    const consultaREG = req.body;
    let { msg, linhasAfetadas } = await mdlConsultas.InsertConsulta(consultaREG);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

const UpdateConsulta = (req, res) =>
  (async () => {
    const consultaID = parseInt(req.params.consultaoid);
    const consultaREG = req.body;
    let { msg, linhasAfetadas } = await mdlConsultas.UpdateConsulta(consultaID, consultaREG);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

const DeleteConsulta = (req, res) =>
  (async () => {
    const consultaID = parseInt(req.params.consultaoid);
    let { msg, linhasAfetadas } = await mdlConsultas.DeleteConsulta(consultaID);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

module.exports = {
  GetAllConsultas,
  GetConsultaByID,
  InsertConsulta,
  UpdateConsulta,
  DeleteConsulta
};