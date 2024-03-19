const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//Analisa solicitações do tipo conteúdo - applications/json
app.use(express.json());

//Analisa solicitações do tipo conteúdo - x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simples rota

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Rodrigo Neves Ottoboni World"})
});

//porta pra para pedidos das requisicoes
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
