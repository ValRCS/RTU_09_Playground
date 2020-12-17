console.log("Objects");
//objects lets us store related information with a key:value pair for each piece of this information
//keys are usually strings(no quotes needed but can use quotes)
//values can be any other data type

//https://javascript.info/object

let user = {     // an object
    name: "Valdis",  // by key "name" store value "Valdis"
    age: 46,        // by key "age" store value 46
    likes: "potatoes"
  };

  console.log("This user is", user.name);
  console.log("Age:", user.age);
  console.log(user.name, "likes", user.likes);

  //objectas are very flexible
  //you can add new entries/properties simply using this type of syntax
  user["speed"] = 105;
  
  //less commonly you can also delete properties using del keyword

  //Warning! Do not use "in" syntax for arrays, in is meant for objects
  for (let key in user) {
      console.log("Key:", key, "value:", user[key]);
  }


  //check existance of key
  console.log("Is there speed in user object?", "speed" in user);