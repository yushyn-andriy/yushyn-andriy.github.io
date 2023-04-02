const go = new Go();
WebAssembly.instantiateStreaming(fetch("compiler.wasm"), go.importObject).then((result) => {
    go.run(result.instance);
});


var editor = ace.edit("editor");
editor.setTheme("ace/theme/terminal");
editor.setOptions({
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
    mode: "ace/mode/javascript",
    useWorker: false,
});
editor.resize()


output = document.getElementById("output");
document.getElementById("evaluate_btn").addEventListener("click", function(event) {
    output.value = evaluate(editor.getValue())
});
document.getElementById("clear_btn").addEventListener("click", function(event) {
    editor.session.setValue("");
    output.value = "";
});
document.getElementById('editor').style.fontSize='16px';


document.getElementById("hello-world-tab").addEventListener("click", function(event) {
    editor.session.setValue(listing_hello_world);
    output.value = "";
});

document.getElementById("hello-world-tab").addEventListener("click", function(event) {
    editor.session.setValue(listing_1_hello_world);
    output.value = "";
});
document.getElementById("functions").addEventListener("click", function(event) {
    editor.session.setValue(listing_2_functions);
    output.value = "";
});
document.getElementById("variables").addEventListener("click", function(event) {
    editor.session.setValue(listing_3_variables);
    output.value = "";
});
document.getElementById("for_loop").addEventListener("click", function(event) {
    editor.session.setValue(listing_4_for);
    output.value = "";
});




const example1 = `# // creating new class

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


# // Ordinary function in FireFly
fn setName(obj, new_name) {
    obj.name = new_name;
}

# // Creating instance of class HelloWorld
hw = HelloWorld("FireFly")

# // ForLoop in FireFly
for (i = 0; i<2; i = i+1) {
    println(hw.greeting());
}

# // calling ordinary function
setName(hw, "Norway");
for (i = 0; i<2; i = i+1) {
    println(hw.greeting());
}

# // calling object method
hw.setName("Andrew");
for (i = 0; i<2; i = i+1) {
    println(hw.greeting());
}

# // print local objects
println("locals()=", locals());
println("");


# // print builtins
println("builtins()=", builtins());
println("");

# // strings
s = "New string";
println("len(s)=", len(s));
println(s + "another string");

# // lists in FyreFly
list = [1, 2, "string", hw];

println("list[3] =", list[3].name);
println("len(list)=", len(list));
println("");


# // dicts in FireFly
dict = {
    "key1": list[3].name,
    "key2": "string",
    3: 773,
};


println("dict['key2']=", dict["key2"]);
println("dict[3]=", dict[3]);

dict[3] = -3.14;
println("dict[3]=", dict[3]);

println();

PI = 3.1410 + 0.0005;
println("PI:", PI);`

editor.session.setValue(example1);