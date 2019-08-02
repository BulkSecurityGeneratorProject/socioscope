#!/bin/bash


if [ "$#" -ne 1 ]; then
    echo "Need the url for deployment"
    echo "e.g.: ./path-to/deploy.sh <url>"
else
    echo "Beginning deployment of Socioscope App."

    # if [ $(mongo localhost:27017 --eval 'db.getMongo().getDBNames().indexOf("socioscope")' --quiet) -lt 0 ]; then
    #     echo "Socioscope DataBase does not exist. Gonna create one."
    # else
    #     echo "Socioscope DatBase exists. Gonna delete it then create a new one."
    #     mongo socioscope --eval "db.dropDatabase()"
    # fi

    # mongo localhost:27017 --eval "use socioscope"

    node ./migrate/import.js $1 all
    node ./migrate/qb_data_migration.js
    mongoimport --db socioscope --collection deputies --type json --file migrate/deputies.json --jsonArray
    echo "Finished deployment"
fi

