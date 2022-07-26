function calEx() {
    var input = document.getElementById("inputn");
    var value = input === null || input === void 0 ? void 0 : input.value;
    var n = parseInt(value);
    var p = document.getElementById("ex");
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum = sum + i / n;
    }
    p.innerText = sum.toString();
}
function handleEvent(e) {
    e.preventDefault();
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var resultDisplay = document.getElementById("result");
    var resultDisplay2 = document.getElementById("result2");
    var container = document.querySelector(".container");
    var detail = document.getElementById("detail");
    var input1Data = input1.value.split("; ");
    var input2Data = input2.value.split("; ");
    var input1Students = input1Data.map(function (el) {
        var splitedData = el.split(", "); // trả về mảng chứa thông tin sinh viên mssv, tên
        return { code: splitedData[0], name: splitedData[1] };
    });
    //mảng các object student
    var matchedStudents = [];
    var notMatchedStudents = [];
    var input2Students = input2Data.forEach(function (el) {
        var splitedData = el.split(", ");
        var code = splitedData[0];
        var address = splitedData[1];
        // tìm trong mảng 1 xem có mã sv đó ko
        var student = input1Students.find(function (s) { return s.code === code; });
        if (student) {
            // if find then push in match
            matchedStudents.push({ code: code, name: student.name, address: address });
        }
        else {
            notMatchedStudents.push({ code: code, address: address });
        }
    });
    if (matchedStudents.length === 0 ||
        input1.value === "" ||
        input2.value === "") {
        resultDisplay.textContent = "No matched student found!";
    }
    else {
        var displayText = matchedStudents.reduce(function (prev, cur) { return "".concat(prev).concat(cur.code, ", ").concat(cur.name, ", ").concat(cur.address, "\n"); }, "");
        resultDisplay.innerText = displayText;
    }
    notMatchedStudents.sort(function (a, b) { return a.code.localeCompare(b.code); });
    resultDisplay2.textContent = "T\u1ED5ng s\u1ED1 sinh vi\u00EAn v\u00E0 danh s\u00E1ch sinh vi\u00EAn c\u00F3 \u1EDF Input 2 m\u00E0 ko c\u00F3 \u1EDF Input 1: ".concat(notMatchedStudents.length);
    if (notMatchedStudents.length !== 0) {
        var displayText = notMatchedStudents.reduce(function (prev, cur) { return "".concat(prev).concat(cur.code, ", ").concat(cur.address, "\n"); }, "");
        detail.innerText = displayText;
    }
    else {
        detail.innerText = "";
    }
}
function convert() {
    var inputelement = document.getElementById("number");
    var input = inputelement.value.split("");
    var output = document.getElementById("output");
    for (var i = 1; i < input.length; i++) {
        if (parseInt(input[i]) % 2 == 0 && parseInt(input[i + 1]) % 2 == 0)
            input[i] = input[i] + "-";
    }
    output.innerText = input.join("");
}
