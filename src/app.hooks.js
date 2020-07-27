// Application hooks that run for every service

module.exports = {
  before: {
    all: [
      (context) => {
        // debugger;
        console.log(context.provider);
        console.log(context.params);
      },
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [
      // (context) => {
      //   console.log(context.result);
      // },
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
