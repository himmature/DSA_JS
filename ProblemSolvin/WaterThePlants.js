var wateringPlants = function(plants, capacity) {
    let totalSteps = 0
    let remainingCapacity = capacity;
    for(let i = 0; i < plants.length; i++) {
        if(plants[i] <= remainingCapacity) {
            remainingCapacity = remainingCapacity - plants[i];
            totalSteps++;
        } else {
            remainingCapacity = capacity - plants[i];
            totalSteps += 2*i + 1;
        }
    }
    return totalSteps;
};

const plants = [3,2,4,2,1];
const capacity = 6;

const result = wateringPlants(plants, capacity);
console.log(result);