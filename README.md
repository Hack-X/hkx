# Show Tonight

Show Tonight is a sample application that demonstrates how to build mobile apps with Ionic 3 for HackX. 

## Installation Instructions

Install docker & docker-compose

``docker-compose up``

Then log into [http://localhost:1337/admin](http://localhost:1337/admin) (create an account first)
Then you can access [http://localhost:8100/](http://localhost:8100/) and use the same login to login 

## Usefull comands

``docker ps`` should give three containers running, one for the backend, one for the frontend, one for the db

* To access the backend : ``docker exec -it hkx-back bash``
* To access the frontend : ``docker exec -it hkx-front bash``
* To access the mongo : ``docker exec -it hkx-db bash``
