db.produtos.countDocuments({
  nome: { $regex: /mc/gi },
});
