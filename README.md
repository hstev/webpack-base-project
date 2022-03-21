# Webpack base project

### How to add dependencies ?

1. Use npm to install them
```sh
npm install {dependency_name}
```
2. Edit the src/assets.js adding the new dependency whether CSS,JS,etc. If the extension doesn't exists, add a new array to export module
```js
    const JS = [
        '...',
        'new/dependency/path',
    ]
```
3. Bundle the files
```sh
    npm run build-dev OR npm run build-pro
```

# License
**MIT**

> Keep it simple ;)
