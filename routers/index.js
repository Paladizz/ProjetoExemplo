const projetoRoute = require("./projetoRoute");

module.exports = (app) => {
  const express = require("express");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(projetoRoute);
};
