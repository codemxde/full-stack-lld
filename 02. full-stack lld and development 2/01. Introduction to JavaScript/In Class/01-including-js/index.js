// * Lets mess with scopes yeahh

function foo() {
  console.log(`defined or undefined ?: ${seeyuh} `);

  if (true) {
    if (true) {
      var seeyuh = "defined";
      fwaeh = "homicxde🗣️";
      let auth = "this is block scoped";
    }
    // console.log(auth);
  }

  console.log("defined or undefined ?:", seeyuh);
}

foo();
console.log(fwaeh);
