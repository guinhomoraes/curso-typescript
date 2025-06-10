type pessoaType = 
{
    nome:string;
    idade:number;
    escolaridade?: string;
    localizacao:
    {
        logradouro: string;
        bairro: string;
        cidade: string;
    },
    status : "Ativo" | "Inativo"
}

let pessoa:pessoaType = 
{
    nome : "Guilherme",
    idade : 35,
    localizacao:
    {
        logradouro: "Rua dos Types",
        bairro: "Types",
        cidade: "CityTypes"
    },
    status : "Ativo"
};