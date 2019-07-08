function lookUpProfile(name, prop){
    // Only change code below this line
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].name === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
    
    // Only change code above this line
    }
    
    // Change these values to test your function
    lookUpProfile("Harry", "likes");