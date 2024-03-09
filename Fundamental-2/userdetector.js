const allUser = [
    "Anurag",
    "Mithun",
    "Rahul",
    "Niranjan",
    "Aditya",
    "Arvind",
    "Desh Deepak"
]

function isuserPresent(user) {
    if(allUser.includes(user)){
        console.log(`Yes ${user} is a valid user`);
    }
    else{
        console.log(`No ${user} is not a valid user`);
    }
}

isuserPresent("Mithun");