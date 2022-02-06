// 1.Problem One
function anaToVori(ana) {
    if (ana >= 0) {
        let vori = 0;
        vori = ana / 16;
        return vori
    }
    else {
        return 'Invalid Value !!!';
    }
}

let voriFromAna = anaToVori(32);
console.log(voriFromAna);


// 2.Problem Two
function pandaCost(singara, samosa, jilapi) {
    if (singara <= 0 || samosa <= 0 || jilapi <= 0) { //if the Value is negetive
        return 'Invalid Value !!'
    }
    let totalCost = (singara * 7) + (samosa * 10) + (jilapi * 15);
    return totalCost;
}
let totalSpent = pandaCost(5, 7, 9);
console.log(totalSpent);


// 3.Problem Three
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

const overallBudget = picnicBudget(236);
console.log(overallBudget);


// 4.Problem Four
function oddFriend(friendsName) {
    if (typeof friendsName == 'string' || typeof friendsName == 'number' || typeof friendsName == 'bolean') {
        return 'Invalid!! Sorry you have no friends!!'
    }
    for (let i = 0; i <= friendsName.length; i++) {
        let nameLength = friendsName[i];
        nameLength = nameLength.length;
        if (nameLength % 2 == 1) {
            return friendsName[i];
        }
    }
    return 'There is No Odd Friend!!';
}
const myOddFriend = oddFriend(['Burhan', 'Utol', 'Meheraj', 'Foysal']);
console.log(myOddFriend);