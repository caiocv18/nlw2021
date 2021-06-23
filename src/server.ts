import express from "express";

const app = express();

/**
 * GET => buscar informação
 * POST => inserir(criar) uma informação
 * PUT => alterar uma informação
 * DELETE => remover um dado
 * PATCH => alterar um informação específica
 */
app.get("/test", (request, response) => {
  //request => entrando
  //response => saindo
  return response.send("Olá NLW");
})

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));