function logMethod(target, propertyKey, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    console.log(`Calling method: ${propertyKey}, Arguments: ${JSON.stringify(args)}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Example {
  @logMethod
  greet(name) {
    console.log(`Hello, ${name}!`);
  }
}

const instance = new Example();

instance.greet('John');