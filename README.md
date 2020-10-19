# @5minlab/tslint-5minlab

[![Build Status](https://travis-ci.org/5minlab/tslint-5minlab.svg?branch=master)](https://travis-ci.org/5minlab/tslint-config-5minlab)

tslint.json for 5minlab

## prerequisites

.npmrc

```
//npm.pkg.github.com/:_authToken=${AUTH_TOKEN}
@5minlab:registry=https://npm.pkg.github.com/
```

## installation

```sh
$ npm install @5minlab/tslint-5minlab --save-dev
```

## usage

tslint.json

```json
{
  "extends": [
    "@5minlab/tslint-5minlab"
  ]
}
```

## publish

```sh
$ npm version patch
$ npm publish
```
