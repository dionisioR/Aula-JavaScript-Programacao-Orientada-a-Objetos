import User from './User.js'

export default class Admin extends User{ 
    constructor(nome, email, nascimento, role='admin', ativo='true'){
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeCurso, qtdVagas){
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas`
    }

    // sobrescrevendo método - sobrescrita
    exibirInfos(){
        // return `${this.nome} - ${this.email} - ${this.role}`
        const infos = super.exibirInfos()
        return `Admin: ${infos}`
    }
}

// const novoAdmin = new Admin('Rodrigo', 'rodrigo@gmail.com', '1980-01-01')
// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso('JavaScript', 20))
