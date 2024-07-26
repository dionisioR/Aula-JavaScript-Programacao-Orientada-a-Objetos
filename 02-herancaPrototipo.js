const user = {
    nome: 'Anna',
    email: 'anna@example.com',
    senha: '123456',
    cidade: 'São Paulo',
    estado: 'SP',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'mariana@example.com',
    senha: '696969',
    cidade: 'São Paulo',
    estado: 'SP',
    nascimento: '2020-01-01',
    role: 'admin',
    ativo: true,
    // exibirInfos: function(){
    //     console.log(this.nome, this.email)
    // },
    criarCurso: function(){
        console.log('Curso criado')
    }
}

// herança com prototipo
// O obj admin vai utilizar como base o objeto user
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()