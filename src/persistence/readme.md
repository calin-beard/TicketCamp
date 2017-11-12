To install MongoDB on MacOS, perform the following steps:

-> install brew

-> install MongoDB from brew:
    • brew update
    • brew install mongodb / brew install mongodb --with-openssl

-> start MongoDB:
    • brew services start mongodb

-> configure MongoDB:
    • mongod --dbpath <path to data directory> (/Users/clau/MongoDB)

-> start MongoDB shell:
    • mongo

-> use MongoDB:
    • show databases: show dbs
    • create database: use <name>
    • create collection: db.createCollection(<name>, <schema>)
    • remove collection: db.<collection>.drop() // e.g. db.students.drop()
    • view collections: show collections
    • insert document: db.<collection>.insert({name: "Kevin", age: 21})
    • remove document: db.<collection>.remove()
    • find all: db.<collection>.find() // returns all entries
    • find specific: db.<collection>.find({name: "Kevin"}) // finds document where name is "Kevin"
