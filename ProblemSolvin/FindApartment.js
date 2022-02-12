function findApartment(blocks, reqs) {
    function exec(blocks, reqs, currentBlock = blocks[0]) {
        let aptMap = new Map();
        for(let i = 0; i < blocks.length; i++) {
            reqs.forEach((item) => {
                let distance = 0;
                let subMap = new Map();
                if(currentBlock[item]) {
                    subMap.set(item, distance);
                } else {
                    distance++;
                    const remainingBlocks = [...blocks].splice(i, 1);
                    exec(remainingBlocks, reqs)
                }
            })
            aptMap.set(i, subMap);
        }
    }
    exec(blocks, reqs);
}

const blocks = [
    {
        gym: false,
        school: true,
        store: false
    },
    {
        gym: true,
        school: false,
        store: false
    },
    {
        gym: true,
        school: true,
        store: false
    },
    {
        gym: false,
        school: true,
        store: false
    },
    {
        gym: false,
        school: true,
        store: true
    },
]

const reqs = ['gym', 'school', 'store'];

const result = findApartment(blocks, reqs);
console.log(result);