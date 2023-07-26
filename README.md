

# used npm packages and reason
    express
    nodemon while changing the service to restart the service automatically


# bable

    @babel/cli: This package provides the Babel command-line interface (CLI). It allows you to run Babel from the command line and provides several useful commands, such as transpiling files or directories, watching for changes, and more.

    @babel/core: This is the core package of Babel, responsible for the main transformation process. It parses the input code, transforms it using various plugins based on the specified presets, and generates the output code.

    @babel/node: This package allows you to run Node.js scripts using Babel without manually transpiling them or using a separate build process. It enhances Node.js by automatically compiling your code on-the-fly when you run it, so you can use modern JavaScript features and ES6 modules in your Node.js project.

    @babel/plugin-proposal-class-properties: This Babel plugin enables the use of class properties in your code, such as declaring class instance variables directly inside the class body without the need for a constructor.

    @babel/plugin-proposal-object-rest-spread: This plugin allows you to use the object spread and rest syntax. With this plugin, you can spread the properties of one object into another or use the rest syntax to collect object properties into a single variable.

    @babel/preset-env: This is a preset in Babel that enables you to use the latest ECMAScript features and syntax without having to specify each feature individually. It automatically determines the necessary transformations based on your target environments (browsers or Node.js versions) and ensures that your code is compatible with those environments.

    @babel/register: This package helps with integrating Babel into your Node.js project without the need for manual transpilation. When you use @babel/register, it hooks into the Node.js require() function, so any imported files will be automatically transpiled on-the-fly by Babel before being executed.

