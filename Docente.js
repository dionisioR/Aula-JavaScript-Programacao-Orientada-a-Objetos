import User from "./User.js";
export default class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = "true") {
    super(nome, email, nascimento, role, ativo);
  }
  aprovarEstudante(nomeEstudante, nomeCurso) {
    return `Estudante ${nomeEstudante} aprovado no curso ${nomeCurso} - professor ${this.nome}`;
  }
}

// const novoDocente = new Docente("Maria", "m@g.com", "2000-07-01")
// console.log(novoDocente.nome)
// console.log(novoDocente.aprovarEstudante('João', 'JavaScript'))