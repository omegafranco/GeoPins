const { gql } = require('apollo-server');
const IndexFields = require('./IndexFields');

module.exports = `
    type User {
        _id: ID
        name: String
        email: String
        picture: String
    }

    type Query {
        me: User
        #consulta com o conteuda da busca
        search: [Index]
        #consulta de campos para o cliente preencher seus cards
        cardFields: [Fields]
    }

    #representa o modelo (baseado nos campos desejados)
    type Index { 
        ${IndexFields[0].key}: String
        ${IndexFields[1].key}: String
    }

    #Campos do Indice
    type Fields {
        key: String
        value: String
    }
`;