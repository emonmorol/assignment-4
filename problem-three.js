function picnicBudget(totalPeople) {
    let totalBudget = 0;
    if (totalPeople >= 0 && totalPeople <= 100) {
        totalBudget = totalPeople * 5000;
        return totalBudget;
    }
    else if (totalPeople > 100 && totalPeople <= 200) {
        totalBudget = (100 * 5000) + ((totalPeople - 100) * 4000);
        return totalBudget;
    }
    else if (totalPeople > 200) {
        totalBudget = (100 * 5000) + (100 * 4000) + ((totalPeople - 200) * 3000);
        return totalBudget;
    }
    else {
        totalBudget = 'Invalid!!Please Input a Valid Number!!';
        return totalBudget;
    }
}

const overallBudget = picnicBudget('149');
console.log(overallBudget);