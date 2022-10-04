const express = require("express");
const {
  AddContact,
  GetContact,
  DeleteContact,
  UpdateContact,
} = require("../Controllers/Controllers");

const ContactRoutes = express.Router();
const ContactSchema = require("../Models/Contact");


ContactRoutes.post("/", AddContact);


ContactRoutes.get("/", GetContact);



ContactRoutes.delete("/:id", DeleteContact);

ContactRoutes.put("/:id", UpdateContact);

module.exports = ContactRoutes;
