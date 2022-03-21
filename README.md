# Webpack base project

### How to add dependencies ?

1. Install all needed
```sh
npm install
```
2. Use npm to install them
```sh
npm install {dependency_name}
```
3. Edit the src/assets.js adding the new dependency whether CSS,JS,etc. If the extension doesn't exists, add a new array to export module
```js
    const JS = [
        '...',
        'new/dependency/path',
    ]
```
4. Bundle the files
```sh
    npm run build-dev OR npm run build-pro
```

# License
**MIT**

> Keep it simple ;)
