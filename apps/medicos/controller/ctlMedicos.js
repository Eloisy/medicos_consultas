const mdlMedicos = require("../model/mdlMedicos");

const GetAllMedicos = (req, res) =>
  (async () => {
    let registro = await mdlMedicos.GetAllMedicos();
    res.json({ status: "ok", registro: registro });
  })();

const GetMedicoByID = (req, res) =>
  (async () => {
    const medicoID = parseInt(req.params.medicoid);
    let registro = await mdlMedicos.GetMedicoByID(medicoID);
    res.json({ status: "ok", registro: registro });
  })();

const InsertMedico = (req, res) =>
  (async () => {
    const medicoREG = req.body;
    let { msg, linhasAfetadas } = await mdlMedicos.InsertMedico(medicoREG);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

const UpdateMedico = (req, res) =>
  (async () => {
    const medicoID = parseInt(req.params.medicoid);
    const medicoREG = req.body;
    let { msg, linhasAfetadas } = await mdlMedicos.UpdateMedico(medicoID, medicoREG);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

const DeleteMedico = (req, res) =>
  (async () => {
    const medicoID = parseInt(req.params.medicoid);
    let { msg, linhasAfetadas } = await mdlMedicos.DeleteMedico(medicoID);
    res.json({ status: msg, linhasAfetadas: linhasAfetadas });
  })();

module.exports = {
  GetAllMedicos,
  GetMedicoByID,
  InsertMedico,
  UpdateMedico,
  DeleteMedico
};