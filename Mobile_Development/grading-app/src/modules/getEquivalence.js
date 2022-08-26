const getEquivalence = (val) => {

    if (val >= 93 && val <= 100) {
        return 'A';
    }
    else if(val >= 90 && val <= 92) {
        return 'A-';
    }
    else if(val >= 87 && val <= 89) {
        return 'B+';
    }
    else if(val >= 83 && val <= 86) {
        return 'B';
    }
    else if(val >= 80 && val <= 82) {
        return 'B-';
    }
    else if(val >= 77 && val <= 79) {
        return 'C+';
    }
    else if(val >= 73 && val <= 76) {
        return 'C';
    }
    else if(val >= 70 && val <= 72) {
        return 'C-';
    }
    else if(val >= 67 && val <= 69) {
        return 'D+';
    }
    else if(val >= 64 && val <= 66) {
        return 'D';
    }
    else if(val < 64 && val >= 0) {
        return 'E';
    }
    else {
        return '';
    }
};

export {getEquivalence};