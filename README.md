# B3 Devops - TP 2

## Info
mail: guillaume.chateauroux@ynov.com

github _username: ChxGuillaume

## How to use

### Commands

#### For Developement

Build

```shell
docker-compose build
```

Run

```shell
docker-compose up -d
```

Stop

```shell
docker-compose down
```



#### For Production

Build

```shell
docker-compose -f ./docker-compose.prod.yml build
```

Run

```shell
docker-compose -f ./docker-compose.prod.yml up -d
```

Stop

```shell
docker-compose -f ./docker-compose.prod.yml down
```



### Usage

With the developement when you change you're files in the app folder it will auto refresh

> Note: When adding a new npm dependencie it won't install it automaticly.

To do so you'll need to type:

```shell
docker exec nodeapi npm i
```



Developed 

- http://localhost:3000/api                 =>  A simple json response.
- http://localhost:3000/api/status    =>  Status for different services.
