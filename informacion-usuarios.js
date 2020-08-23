db.usuarios.insertMany(
    [{
            "_id": ObjectId(),
            "nombre": "Luis",
            "apellido": "Juarez",
            "email": "ljuarez@gmail.com",
            "password": "asd.963",
            "fechaNacimiento": {
                "dia": "3",
                "mes": "6",
                "anio": "2004"
            },
            "tarifa": "tarifa 2",
            "proyectos": [{
                    "_id": ObjectId(),
                    "titulo": "Proyecto A"
                },
                {
                    "_id": ObjectId(),
                    "titulo": "Proyecto B"
                },
                {
                    "_id": ObjectId(),
                    "titulo": "Proyecto C"
                }
            ]
        },
        {
            "_id": ObjectId(),
            "nombre": "Danny",
            "apellido": "Salgado",
            "email": "dsalgado@gmail.com",
            "password": "asd.963",
            "fechaNacimiento": {
                "dia": "18",
                "mes": "9",
                "anio": "1996"
            },
            "tarifa": "tarifa 1",
            "proyectos": [{
                    "_id": ObjectId(),
                    "titulo": "Proyecto D"
                },
                {
                    "_id": ObjectId(),
                    "titulo": "Proyecto E"
                },
                {
                    "_id": ObjectId(),
                    "titulo": "Proyecto F"
                }
            ]
        },
        {
            "_id": ObjectId(),
            "nombre": "Noe",
            "apellido": "Cruz",
            "email": "ncruz@gmail.com",
            "password": "asd.963",
            "fechaNacimiento": {
                "dia": "22",
                "mes": "8",
                "anio": "1992"
            },
            "tarifa": "tarifa 3",
            "proyectos": [{
                    "_id": ObjectId(),
                    "titulo": "Proyecto G"
                },
                {
                    "_id": ObjectId(),
                    "titulo": "Proyecto H"
                },
                {
                    "_id": ObjectId(),
                    "titulo": "Proyecto I"
                }
            ]
        }
    ]);