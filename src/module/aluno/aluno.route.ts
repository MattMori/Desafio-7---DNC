import express, { Request, Response } from "express";
import { getAll, store } from "./aluno.model";

const router = express.Router();

// Rota GET para obter todos os registros da tabela aluno
router.get("/", async (_: Request, res: Response) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

// Rota POST para inserir um novo registro na tabela aluno
router.post("/", async (req: Request, res: Response) => {
  const { nome, email, nacionalidade } = req.body;

  if (!nome || !email || !nacionalidade) {
    console.error("Dados incompletos:", req.body);
    return res.status(400).json({ error: "Dados incompletos" });
  }

  try {
    console.log("Request body:", req.body);
    const [id] = await store(req.body);
    console.log("Insert result ID:", id);
    return res.status(200).json({ data: { id, ...req.body } });
  } catch (error) {
    console.error("Erro ao inserir os dados:", error);
    return res.status(500).json({ error: "Erro ao inserir os dados" });
  }
});

export default router;
