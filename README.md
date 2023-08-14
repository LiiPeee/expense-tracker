# TypeScript With ts-node-dev

```

Tamplate commands to init a NodeJS TypeScript project

## Dependencies
```

```
npm init -y
npm i express cors
npm i -g --save-dev @types/node
npm i --save @types/express
npm i --save-dev nodemon
npm i --save-dev @types/cors
npm install dotenv --save
npm i jest ts-jest @types/jest -D
npx ts-jest config:init
npx jest --init
```
## tsconfig.json

Create **tsconfig.json** in the root directory that will contain your typescript compiler configuration, more information in https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

``` JSON
{
  "compilerOptions": {
    "target": "es2017", 
    "experimentalDecorators": true, 
    "emitDecoratorMetadata": true, 
    "module": "commonjs",
    "rootDir": "./src", 
    "outDir": "./dist", 
    "removeComments": true, 
    "esModuleInterop": true, 
    "forceConsistentCasingInFileNames": true, 
    "strict": true, 
    "resolveJsonModule": true,
    "skipLibCheck": true 
  }
}
```
``` JEST
/* eslint-disable no-undef */
/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

```

## package.json

Add **dev** and **build** scripts to your **package.json** file, 

- **Dev**: Uses **ts-node-dev** to start a dev server that automatically transpiles your **.ts** files to **.js** whenever you edit something. (More info at https://www.npmjs.com/package/ts-node-dev)
- **Build**: Uses **tsc** to transpile your whole application to **.js**, is used when you want to deploy to production. (More info at https://www.typescriptlang.org/docs/handbook/compiler-options.html)

``` JSON
"scripts": {
    "build": "tsc",
    "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify src/index.ts"
  }
```
## Run


```
npx jest

npm run dev
```
OR
```
yarn dev
```

## Build
```
npm run build
```
or
```
yarn build
```