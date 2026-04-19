import express from "express";
import https from "https";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("¡Servidor levantado con Express y pnpm!");
});

app.get("/hi", (req, res) => {
	res.send("Hola, esta es una ruta distinta.");
});

app.listen(port, () => {
	console.log(`Servidor corriendo en http://localhost:${port}`);
});
