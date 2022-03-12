var subdomainVisits = function(cpdomains) {
    const domainMap = {};
    cpdomains.forEach(item => {
        const [count, domain] = item.split(' ');
        function findDomains(domain) {
            domainMap[domain] = domainMap[domain] ? +domainMap[domain] + +count : count;
            let dotIndex = domain.indexOf('.');
            if(dotIndex === -1) return;
            const newDomain = domain.slice(dotIndex + 1);
            findDomains(newDomain);
        }
        findDomains(domain);
    })
    
    const result = [];
    for (const domain in domainMap) {
        const val = `${domainMap[domain]} ${domain}`;
        result.push(val);
    }
    return result;
};

const cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
const result = subdomainVisits(cpdomains);
console.log(result);