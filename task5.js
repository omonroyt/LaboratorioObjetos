

// Type your code below this line!
function FriendsList(names) {
  this.names = names
}
const numFriends = parseInt(process.argv[2])
let friends = []
for (let i = 0; i < numFriends; i++) {
  friends.push(process.argv[3 + i])
}
const myFriends = new FriendsList(friends)
console.log(myFriends.names)
// Type your code above this line!

