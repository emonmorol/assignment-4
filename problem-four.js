function oddFriend(friendsName) {
    if (typeof friendsName == 'string' || typeof friendsName == 'number' || typeof friendsName == 'bolean') {
        return 'Invalid!! Sorry you have no friends!!'
    }
    for (let i = 0; i <= friendsName.length; i++) {
        let nameLength = friendsName[i];
        nameLength = nameLength.length;
        if (nameLength % 2 == 1) {
            return friendsName[i]
        }
    }
    return 'There is No Odd Friend!!';
}
const myOddFriend = oddFriend(['Burhan', 'Utol', 'Meheraj', 'Foysals']);
console.log(myOddFriend);