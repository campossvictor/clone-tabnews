function status(request, response) {
  response.status(200).json({ chave: "chave", valor: "valor" });
}

export default status;
