mongo


db.createCollection("alunos")


db.alunos.insert(

    {
        "nome" : "Felipe",
        "data_nascimento" : new Date(1994,02,26),
        "curso" : {
            "nome" : "Sistemas de informação"
        },
        "notas" : [10.0, 9.0, 4.5],
        "habilidades" : [
            {
                "nome" : "inglês",
                "nivel" : "avançado"
            },
            {
                "nome" : "taekwondo",
                "nivel" : "básico"
            }
        ]
    }

)


db.alunos.find()


db.alunos.remove(
    {
        "_id" : ObjectId("571a84da0461ea724dd62e31")
    }
)


db.alunos.insert(
    {
        "nome" : "Alberto",
        "data_nascimento" : new Date(1972,09,30),
        "curso" : {
            "nome" : "Engenharia Química"
        },
        "habilidades" : [
            {
                "nome" : "inglês",
                "nivel" : "intermediário"
            }
        ]
    }

)


db.alunos.insert(
    {
        "nome" : "Marcos",
        "data_nascimento" : new Date(1995,09,30),
        "curso" : {
            "nome" : "Medicina"
        },
        "habilidades" : [
            {
                "nome" : "alemão",
                "nivel" : "básico"
            }
        ]
    }

)


db.alunos.insert(
    {
        "nome" : "Daniel",
        "data_nascimento" : new Date(1991,06,30),
        "curso" : {
            "nome" : "Análise e Desenvolvimento de Sistemas"
        },
        "habilidades" : [
            {
                "nome" : "inglês",
                "nivel" : "básico"
            }
        ]
    }

)


---------------------------------------------------------------------------


db.alunos.find().pretty()


db.alunos.find(
    {
        nome : "Felipe"
    }
).pretty()


db.alunos.insert(
    {
        nome : "Felipe",
        curso : {
            nome : "matemática"
        }
    }
)


db.alunos.find({
    "nome" : "Felipe",
    "data_nascimento" : new Date(1994, 02, 26)
}).pretty()


db.alunos.find(
    {
        nome : "Felipe"
    }
).pretty()


db.alunos.remove(
    {
        "_id" : ObjectId("571a8fa5e42caec723de5561")
    }
)


db.alunos.find({nome : "Felipe"}).pretty()


db.alunos.find({
    "habilidades.nome" : "inglês"
}).pretty()


db.alunos.find({
    "nome" : "Felipe",
    "habilidades.nome" : "inglês"
}).pretty()


------------------------------------------------------------------------


db.alunos.find({
    "curso.nome" : "Sistemas de informação"
}).pretty()


db.alunos.find({
    "curso.nome" : "Engenharia Química"
}).pretty()


//pesquisa com dois valores diferentes para chave
db.alunos.find({
    $or : [
        {"curso.nome" : "Sistemas de informação"},
        {"curso.nome" : "Engenharia Química"}
    ]
}).pretty()


//pesquisa com dois valores diferentes para chave
db.alunos.find({
    $or : [
        {"curso.nome" : "Sistemas de informação"},
        {"curso.nome" : "Engenharia Química"}
    ]
}).pretty()


//verifica (curso1 OR curso2) AND nome
db.alunos.find({
    $or : [
        {"curso.nome" : "Sistemas de informação"},
        {"curso.nome" : "Engenharia Química"}
    ],
    "nome" : "Daniel"
}).pretty()


//verifica (curso1 OR curso2 OR curso3) AND nome
db.alunos.find({
    $or : [
        {"curso.nome" : "Sistemas de informação"},
        {"curso.nome" : "Engenharia Química"},
        {"curso.nome" : "Análise e Desenvolvimento de Sistemas"}
    ],
    "nome" : "Daniel"
}).pretty()


//utiliza o IN ao invés do OR como no mysql
db.alunos.find({
    "curso.nome" : {
            $in: ["Sistemas de informação", "Engenharia Química"]
        }
}).pretty()