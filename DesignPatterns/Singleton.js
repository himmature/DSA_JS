function Process(id) {
    this.processId = id;
}

let p1 = new Process(1);
let p2 = new Process(1);


let pManager = (function() {
  let pManager = [];
  function getPManager() {
     if(!pManager.length) {
          pManager.push(p1,p2);
          return pManager;
      } else {
          return pManager;
      }   
  }
  return {
      getPManager
  }
}())