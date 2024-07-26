import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";


const novoUser = new User("Anna", "a@gmail.com", "1990-05-15");
console.log(novoUser.exibirInfos());
console.log('------------------')

// Herança de classe
const novoAdmin = new Admin("Mariana", "m@gmail.com", "1995-08-20");
console.log(novoAdmin.exibirInfos())
console.log('------------------')


const novoDocente = new Docente('Juca','j@g.com', '2000-01-04')
console.log(novoDocente.exibirInfos())
console.log('------------------')

console.log(User.exibirInfosStatic('XXX', 'WWW'))
const usuarioTeste = User.exibirInfosStatic('Pedro','p@g.com')
console.log(usuarioTeste)