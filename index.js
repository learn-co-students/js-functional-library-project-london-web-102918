fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      for (const item in collection){
         cb(collection[item])
       }
       return collection
    },

    map: function(collection, cb) {
      let newCollection = []
      for (const item in collection){
         newCollection.push(cb(collection[item]))
       }
       return newCollection
    },

    reduce: function(collection, callback, acc=0) {
      for (const index of collection) {
        acc = callback(acc, index, collection)
      }
      return acc
    },

    first: function(collection, n) {
      if (n){
         return collection.slice(0,n)
      }
      else {
        return (collection[0])
      }
    },

    last: function(collection, n) {
      if (n){
         return collection.slice(n*-1)
      }
      else {
        return (collection[collection.length - 1])
      }
    },

    compact: function(collection) {
      let newCollection = []
      for (const index of collection.keys()){
        if (collection[index]){
          newCollection.push(collection[index])
        }
      }
      return newCollection
    },

    filter: function(collection, cb) {
      let newCollection = []
      for (const item in collection){
         if (cb(collection[item])){
           newCollection.push(collection[item])
         }
      }
      return newCollection
    },

    find: function(collection, cb) {
      for (const item in collection){
         if (cb(collection[item])){
           return collection[item]
         }
      }
    },

    functions: function(collection) {
      const newCollection = []
      for (item in collection) {
        if (typeof(collection[item]) === "function") {
          newCollection.push(item)
        }
      }
      return newCollection
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    sortBy: function(collection, callback) {
      const newCollection = [...collection]
      newCollection.sort(function(a, b) {
        return (callback(a) - callback(b))
      })
      return newCollection
    },

    flatten: function(collection, shallow) {
      const newCollection = []
      if (shallow) {
        for (const key in collection) {
          if (typeof collection[key] === 'object') {
            for (const nestedKey in collection[key]) {
              newCollection.push(collection[key][nestedKey])
            }
          } else {
            newCollection.push(collection[key])
          }
         }
       return newCollection
       } else {
       return collection.reduce((acc, val) => Array.isArray(val) ? acc.concat(fi.flatten(val)) : acc.concat(val), [])
       }
    },

    uniq: function(collection, isSorted = false, callback = (x => x)) {
      let newCollection = []
      let callbackCollection = collection.map(callback)
      if (!isSorted) {
        for (let i = 0; i < collection.length; i++) {
          if (!callbackCollection.slice(0, i).includes(callbackCollection[i])) {
            newCollection.push(collection[i])
          }
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          if (callbackCollection[i - 1] !== (callbackCollection[i])) {
            newCollection.push(collection[i])
          }
        }
      }
      return newCollection
    },

    keys: function(collection) {
      const newCollection = []
      for (const key in collection){
        newCollection.push(key)
      }
      return newCollection
    },
    values: function(collection) {
      const newCollection = []
      for (const key in collection){
        newCollection.push(collection[key])
      }
      return newCollection
    },

  }
})()

fi.libraryMethod()
