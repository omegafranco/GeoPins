const metadata = [{field:"Um teste é assim"}, {field: "é cassação"}, {field: "áéóí"}]

const setupData = [{
    indexName: "Indice",
    url: "http://umaurl.com",
    cardFields:["Um teste é assim", "áéóí"],
    filterFields:["Um teste é assim", "áéóí"]
}];

const filtered = metadata.filter(data => setupData[0].cardFields.includes(data.field))
 if (filtered.length !== setupData[0].cardFields.length)
    throw new Error("Campo não existe no indice");


const IndexFields = setupData[0].cardFields.map((value)=>{
    const key = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g,"_").toLowerCase();
    return {key,value};
});


module.exports = IndexFields;

