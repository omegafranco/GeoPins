const IndexFields = require('./IndexFields');

const index =[{
    [IndexFields[0].key]: "isso mesmo",
    [IndexFields[1].key]: "de novo",
}];

const user = {
    _id: "1",
    name: "Joao",
    email: "omegafranco@outlook.com",
    picture: ""
};

module.exports = {
    Query: {
        me: () => user,
        search: () => index,
        cardFields: () => IndexFields
    }
}