var displayTable = function(orders) {
    const head = orders.reduce((acc, cv) => {
        acc.add(cv[2]);
        return acc;
    }, new Set())
    const header = [...head].sort();
    const tableHeader = ["Table", ...header];
    const orderMap = orders.reduce((acc, cv) => {
        if(!acc[cv[1]]) acc[cv[1]] = {};
        acc[cv[1]] = {
            ...acc[cv[1]],
            [cv[2]]: ++acc[cv[1]][cv[2]] || 1,
        }
        return acc;
    }, {})
    const result = Object.keys(orderMap).reduce((acc, key) => {
        acc.push([key, ...header.map((currentDish) => orderMap[key][currentDish] ? String(orderMap[key][currentDish]) : '0')])
        return acc;
    }, [tableHeader])
    return result;
};

const orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]
const result = displayTable(orders);
console.log(result);