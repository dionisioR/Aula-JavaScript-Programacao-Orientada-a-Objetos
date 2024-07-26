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
user.exibirInfos()  // Anna anna@example.com
const informacoes = user.exibirInfos
informacoes()  // undefined undefined - perde o contexto do this

const exibir = function(){
    console.log(this.nome, this.email)
}
// o bind prende a função a um contexto do objeto user
const exibirInformacoes = exibir.bind(user)
exibirInformacoes()
