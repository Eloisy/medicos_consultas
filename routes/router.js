const express = require("express");
const routerApp = express.Router();

const appMedicos = require("../apps/medicos/controller/ctlMedicos");
const appConsultas = require("../apps/consultas/controller/ctlConsultas");
const appLogin = require("../apps/login/controller/ctlLogin");

routerApp.use((req, res, next) => {
  next();
});

routerApp.get("/", (req, res) => {
  res.send("API Médicos e Consultas funcionando!");
});

// Médicos
routerApp.get("/getAllMedicos", appLogin.AutenticaJWT, appMedicos.GetAllMedicos);
routerApp.get("/getMedicoByID/:medicoid", appLogin.AutenticaJWT, appMedicos.GetMedicoByID);
routerApp.post("/insertMedico", appLogin.AutenticaJWT, appMedicos.InsertMedico);
routerApp.put("/updateMedico/:medicoid", appLogin.AutenticaJWT, appMedicos.UpdateMedico);
routerApp.delete("/deleteMedico/:medicoid", appLogin.AutenticaJWT, appMedicos.DeleteMedico);

// Consultas
routerApp.get("/getAllConsultas", appLogin.AutenticaJWT, appConsultas.GetAllConsultas);
routerApp.get("/getConsultaByID/:consultaoid", appLogin.AutenticaJWT, appConsultas.GetConsultaByID);
routerApp.post("/insertConsulta", appLogin.AutenticaJWT, appConsultas.InsertConsulta);
routerApp.put("/updateConsulta/:consultaoid", appLogin.AutenticaJWT, appConsultas.UpdateConsulta);
routerApp.delete("/deleteConsulta/:consultaoid", appLogin.AutenticaJWT, appConsultas.DeleteConsulta);

// Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;