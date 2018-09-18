# Show Tonight

Show Tonight is a sample application that demonstrates how to build mobile apps with Ionic 3 for HackX. 

## Installation Instructions

Install docker & docker-compose

``docker-compose up``

``docker ps`` should give three containers running, one for the backend, one for the frontend, one for the db

* To access the backend : ``docker exec -it hkx-back bash``
* To access the frontend : ``docker exec -it hkx-front bash``
* To access the mongo : ``docker exec -it hkx-db bash``
