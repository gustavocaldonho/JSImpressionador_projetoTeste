import { turboLogger } from "./turboLogger.js";

console.log("Estou usando o github");
turboLogger("Estou aprendendo o fluxo do git", "red");
turboLogger("Eu consegui criar uma nova mensagem sem afetar a versão principal do meu sistema!", "darkgreen");

// git merge nome_da_branch -> mescla o conteúdo da branch atual com a branch especificada.
// git checkout nome_da_branch -> troca para a branch especificada (git checkout -b nome_da_branch -> cria uma branch).
// git push -> envia as alterações para o repositório remoto no github.
// git pull -> puxa as alterações feitas no repositório remoto para o pc local.
// git add . -> deixa visível para o git todas as alterações feitas na branch atual, a fim de ser feito o commit.
// git commit -m "mensagem" -> comita as alterações (após elas já terem sido adicionadas)

// ordem correta: git add . -> git commit -> git push 
