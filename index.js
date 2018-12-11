const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, cb) {
      for (const key in collection) {
        cb(collection[key])
      } return collection
    },

    map: function (collection, cb) {
      const newCollection = []
      for (const key in collection) {
        newCollection.push(cb(collection[key]))
      } return newCollection
    },

    reduce: function (collection, cb, acc = 0) {
      for (const key in collection) {
        acc = cb(acc, collection[key])
      }
      return acc
    },

    find: function (collection, predicate) {
      for (const key in collection) {
        if (predicate(collection[key])) {
          return collection[key]
        }
      }
      return undefined
    },

    filter: function (collection, predicate) {
      const newCollection = []
      for (const key in collection) {
        if (predicate(collection[key])) {
          newCollection.push(collection[key])
        }
      }
      return newCollection
    },

    size: function (collection) {
      let counter = 0
      for (const key in collection) {
        counter += 1
      }
      return counter
    },

    first: function (collection, n = 1) {
      let newCollection = [];
      let counter = 0;
      while (counter < n) {
        newCollection.push(collection[counter])
        counter++
      }
      if (n === 1) {
        return newCollection[0]
      } else {
        return newCollection
      }
    },

    last: function (collection, n = 1) {
      let newCollection = []
      let counter = -1;
      while (counter >= (-n)) {
        newCollection.unshift(collection[collection.length + counter])
        counter--
      }
      if (n === 1) {
        return newCollection[0]
      } else {
        return newCollection
      }
    },

    compact: function (collection) {
      let newCollection = []
      for (let element of collection) {
        if (element) {
          newCollection.push(element)
        }
      }
      return newCollection
    },

    keys: function (object) {
      let newCollection = []
      for (let key in object) {
        newCollection.push(key)
      }
      return newCollection
    },

    values: function (object) {
      let newCollection = []
      for (let key in object) {
        newCollection.push(object[key])
      }
      return newCollection
    },

    functions: function () {

    }

  }
}())

fi.libraryMethod()
