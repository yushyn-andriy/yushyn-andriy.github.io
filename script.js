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
document.getElementById("if_statement").addEventListener("click", function(event) {
    editor.session.setValue(listing_5_if);
    output.value = "";
});
document.getElementById("classes").addEventListener("click", function(event) {
    editor.session.setValue(listing_6_classes);
    output.value = "";
});

editor.session.setValue(listing_1_hello_world);