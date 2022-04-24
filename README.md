# Debug React v18.0.0

## install

```bash
pnpm i
```

## start

```bash
pnpm run dev

# [webpack-dev-server] Loopback: http://localhost:8080/
```

## how to debug in vscode?

see [https://github.com/microsoft/vscode-js-debug](https://github.com/microsoft/vscode-js-debug)

1. Open the Vs Code extensions view `(ctrl+shift+x)` and search for `@builtin @id:ms-vscode.js-debug`
2. Right click on the JavaScript Debugger extension and Disable it.
3. Search for `@id:ms-vscode.js-debug-nightly` in the extensions view.
4. Install that extension.

You can debug npm scripts by clicking the code lens shown in the package.json, or by running the Debug: `Debug NPM Script command/`.
