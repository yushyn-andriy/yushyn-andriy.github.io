const listing_6_classes = `

class HelloWorld {

    # // defining initialize method(called when instance of class created)
    fn __init__(name) {
        self.name = name;
    };

    # // defining ordinary functions
    fn setName(new_name) {
        self.name = new_name;
    };
    fn greeting() { return "Hei, " + self.name + " !!!"};
};


hw = HelloWorld("FireFly")
println(hw.greeting());

# // calling object method
hw.setName("Andrew");

println(hw.greeting());


# // just useful builtin functions
# // print local objects
println("locals()=", locals());
println("");


# // print builtins
println("builtins()=", builtins());
println("");
`