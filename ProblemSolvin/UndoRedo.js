const undoRedo = object => {
    const operations = [];
    function set(key, value) {
        const opDetails = {
            type: 'set',
            keyExisted: this.hasOwnProperty(key),
            newKey: key,
            prevValue: this[key],
            newValue: value
        };
        operations.push(opDetails);
      this[key] = value;
      return value;
    }
    function get(key) {
      return this[key];
    }
    function del(key) {
        const opDetails = {
            type: 'del',
            key,
            value: this[key]
        }
        operations.push(opDetails);
        delete this[key];
    }
    function undo() {
      if(!operations.length) {
          throw ('no operations to undo');
      }
      const lastOp = operations[operations.length - 1];
      if(lastOp.type === 'del'){
          this[lastOp.key] = lastOp.value;
      } else if(lastOp.type === 'set') {
          if(!lastOp.keyExisted) {
              delete this[lastOp.newKey];
          } else {
              this[lastOp.key] = lastOp.prevValue;
          }
      }
      operations.pop();
    }
    object.get = get;
    object.set = set;
    object.del = del;
    object.undo = undo;
    return object;
  };
  let obj = {
      x:1, y:2
  }
  undoRedo(obj);
  