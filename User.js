export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    if (nome.trim() === "") {
      throw new Error("Nome não pode ser vazio");
    }
    this.#nome = nome;
  }
  get email() {
    return this.#email;
  }
  set email(email) {
    this.#email = email;
  }
  get nascimento() {
    return this.#nascimento;
  }
  set nascimento(nascimento) {
    this.#nascimento = nascimento;
  }
  get role() {
    return this.#role;
  }
  set role(role) {
    this.#role = role;
  }
  get ativo() {
    return this.#ativo;
  }
  set ativo(ativo) {
    this.#ativo = ativo;
  }
  #montaObjUser() {
    return {
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      ativo: this.#ativo,
    };
  }
  //   exibirInfos() {
  //     // return `${this.#nome} - ${this.#email}`;
  //     const objUser = this.#montaObjUser()
  //     return `${objUser.nome} - ${objUser.email}`
  //   }

  // Sobrecarga
  exibirInfos() {
    if (this.role === "estudante") {
      return `Dados do Estudante: ${this.nome}`;
    } else if (this.role === "admin") {
      return `Dados do Admin: ${this.nome} - ${this.role}`;
    } else if (this.role === "docente") {
      return `Dados do Docente: ${this.nome} - ${this.email}`;
    }
  }

  // método estático
  static exibirInfosStatic(nome, email) {
    return `${nome} - ${email}`;
  }
}

// const novoUser = new User('Anna', 'anna@gmail.com', '1990-01-01')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())
// console.log('-------------------------')

// verificando se USER é protótipo de NOVOUSER
// console.log(User.prototype.isPrototypeOf(novoUser)) // true
