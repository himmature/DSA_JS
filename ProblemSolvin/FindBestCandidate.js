const findBestPerson = (candidates, skills) => {
    const skillsArr = skills.split(',');
    const updatedCandidateList = []
    let bestCandidate;
    candidates.forEach(candidate => {
        const candidateSkills = candidate.skills;
        let i = 0;
        let j = 0;
        let skillMatchCounter = 0;
        while(i < skillsArr.length) {
            if(skillsArr[i] !== candidateSkills[j]) {
                if(j < candidateSkills.length) {
                    j++
                } else {
                    i++;
                    j = 0;
                }
            } else {
                skillMatchCounter++;
                i++;
                j = 0;
            }
        }
        const updatedCandidate = {...candidate, noOfSkills: skillMatchCounter}
        skillMatchCounter && updatedCandidateList.push(updatedCandidate);
    });
    if()
    bestCandidate = updatedCandidateList[0];
    updatedCandidateList.forEach(updatedCandidate => {
        if(bestCandidate !== updatedCandidate && bestCandidate.noOfSkills <= updatedCandidate.noOfSkills && bestCandidate.skills.length <= updatedCandidate.skills.length) {
            bestCandidate = updatedCandidate;
        }
    })
    delete bestCandidate.noOfSkills;
    return bestCandidate;
}


const candidates = [
    {
        id: 1,
        name: 'jack',
        skills: ['es6', 'js']
    },
    {
        id: 2,
        name: 'Matt',
        skills: ['html', 'css']
    },
    {
        id: 3,
        name: 'shaun',
        skills: ['es6', 'drool', 'mongo']
    },
    {
        id: 4,
        name: 'ryan',
        skills: ['node', 'js']
    },
    {
        id: 5,
        name: 'max',
        skills: ['drool', 'js', 'java', 'css']
    },
    {
        id: 6,
        name: 'shane',
        skills: ['java', 'mongo', 'css']
    },
    {
        id: 7,
        name: 'rick',
        skills: []
    },
];

const bestCandidate = findBestPerson(candidates, 'js,css,java')
console.log(bestCandidate);