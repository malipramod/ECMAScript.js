//Before
try{
    throw new Error("Error in 'Erorr'");
}catch(err){
    console.log(err);
}

//New: Optional Catch Binding
try{
    console.log(x);
}catch{
    console.log("X is undefined");
}
