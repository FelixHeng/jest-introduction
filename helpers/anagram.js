// Return true if anagram and false if not
// ex : 'elbow' *** 'below'
// ex : 'Dormitory' *** 'dirty room##'

function isAnagram(str1, str2) {
    return fromatStr(str1) === fromatStr(str2);
}

const fromatStr = (str) => {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

module.exports = isAnagram