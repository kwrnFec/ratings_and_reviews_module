# Elysium Solutions - Ratings and Reviews Microservice

> Elysium Solutions is an e-commerce platform for selling professional grade photo editing software applications.
This repository contains the code for the ratings and reviews microservice of this platforms e-commerce product pages. 
This platform was developed with a services oriented architecture in mind and was broken down into four individual microservices
(ratings and reviews, product overview, questions and answers, and related products). These microservices are served together utilizing
a proxy server hosted on Amazon Web Services.

## Table of Contents

1. [Related Projects](#related-projects)
2. [Demo](#demo)
3. [Technologies Used](#technologies-used)
4. [Requirements](#requirements)
5. [Development](#development)

## Related Projects

  - https://github.com/kwrnFec/q_and_a_module
  - https://github.com/kwrnFec/overview_module
  - https://github.com/kwrnFec/related_items_module
  - https://github.com/kwrnFec/zach_proxy

## Demo

![Alt Text](https://i.imgur.com/JSZvGR9.gif)

<!-- A demonstration of all microservices rendered to the proxy server can be seen here https://youtu.be/3BBFQ9nNj08 -->

## Technologies Used

 - JavaScript
 - React
 - Bootstrap
 - CSS Modules
 - Express
 - Node.js
 - Jest
 - Enzyme
 - Docker
 - Amazon Web Services
 - CircleCI

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0 or greater
- npm

## Development

### Installing Dependencies

> The following commands will install the application dependencies, run webpack to compile the application and start the development server

    npm install
    npm run react-dev
    npm run start

From within the root directory:

```sh
npm install -g webpack
npm install
```

