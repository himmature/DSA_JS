var findingUsersActiveMinutes = function(logs, k) {
  const result = Array.from({ length: k}, () => 0);
  const uamMap = new Map();
  for(let i = 0; i < logs.length; i++) {
    let user = logs[i][0];
    let uam = logs[i][1];
    if(!uamMap.has(user)) {
        uamMap.set(user, new Set().add(uam));
    } else {
        let ss = uamMap.get(user);
        ss.add(uam);
        uamMap.set(user, ss);
    }
  }
  uamMap.forEach(uam => {
    result[uam.size - 1] += 1
  })
  return result;
};

const logs = [[305589003,4136],[305589004,4139],[305589004,4141],[305589004,4137],[305589001,4139],[305589001,4139]];
const k = 6;

const result = findingUsersActiveMinutes(logs, k);
console.log(result);