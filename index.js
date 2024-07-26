import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Anna", "a@gmail.com", "1990-05-15");
console.log(novoUser.exibirInfos());
console.log(novoUser.nome)
console.log('------------------')

// novoUser.#nome = 'Geraldo'  // erro - tentando acessar atributo privado
// console.log(novoUser.#nome)  // erro - tentando acessar atributo privado


const novoAdmin = new Admin("Mariana", "m@gmail.com", "1995-08-20");
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.nome)
novoAdmin.nome = "Mariana Silva"
console.log(novoAdmin.nome)
// novoAdmin.nome = "    "