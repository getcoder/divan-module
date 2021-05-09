function myModule() {
  const obj = {};

  this.define = function (name, param, timeout) {
    obj[name] = new Promise((resolve) =>
      setTimeout(() => resolve(param), timeout)
    );
  };
  this.require = function (param, callback) {
    Promise.all(Object.values(obj)).then((res) => {
      callback(...res);
    });
  };
}

module.exports = myModule;
