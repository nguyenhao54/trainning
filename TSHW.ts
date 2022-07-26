function calEx(): void {
  const input = document.getElementById("inputn") as HTMLInputElement | null;
  const value = input?.value;
  const n: number = parseInt(value!);
  const p = document.getElementById("ex");
  let sum: number = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + i / n;
  }
  p!.innerText = sum.toString();
}

function handleEvent(e: any): void {
  e.preventDefault();
  const input1 = document.getElementById("input1") as HTMLInputElement | null;
  const input2 = document.getElementById("input2") as HTMLInputElement | null;
  const resultDisplay = document.getElementById("result");
  const resultDisplay2 = document.getElementById("result2");
  const container = document.querySelector(".container");
  const detail = document.getElementById("detail");
  const input1Data = input1!.value.split("; ");
  const input2Data = input2!.value.split("; ");
  const input1Students = input1Data.map((el) => {
    const splitedData = el.split(", "); // trả về mảng chứa thông tin sinh viên mssv, tên
    return { code: splitedData[0], name: splitedData[1] };
  });
  //mảng các object student
  const matchedStudents: { code: string; name: string; address: string }[] = [];
  const notMatchedStudents: { code: string; address: string }[] = [];
  const input2Students = input2Data.forEach((el) => {
    const splitedData: string[] = el.split(", ");
    const code: string = splitedData[0];
    const address = splitedData[1];
    // tìm trong mảng 1 xem có mã sv đó ko
    const student = input1Students.find((s) => s.code === code);
    if (student) {
      // if find then push in match
      matchedStudents.push({ code, name: student.name, address });
    } else {
      notMatchedStudents.push({ code, address });
    }
  });

  if (
    matchedStudents.length === 0 ||
    input1!.value === "" ||
    input2!.value === ""
  ) {
    resultDisplay!.textContent = "No matched student found!";
  } else {
    const displayText = matchedStudents.reduce(
      (prev, cur) => `${prev}${cur.code}, ${cur.name}, ${cur.address}\n`,
      ""
    );
    resultDisplay!.innerText = displayText;
  }

  notMatchedStudents.sort((a, b) => a.code.localeCompare(b.code));
  resultDisplay2!.textContent = `Tổng số sinh viên và danh sách sinh viên có ở Input 2 mà ko có ở Input 1: ${notMatchedStudents.length}`;
  if (notMatchedStudents.length !== 0) {
    const displayText = notMatchedStudents.reduce(
      (prev, cur) => `${prev}${cur.code}, ${cur.address}\n`,
      ""
    );
    detail!.innerText = displayText;
  } else {
    detail!.innerText = "";
  }
}
function convert() {
  const inputelement = document.getElementById(
    "number"
  ) as HTMLInputElement | null;
  const input = inputelement!.value.split("");
  const output = document.getElementById("output");
  for (let i = 1; i < input.length; i++) {
    if (parseInt(input[i]) % 2 == 0 && parseInt(input[i + 1]) % 2 == 0)
      input[i] = input[i] + "-";
  }
  output!.innerText = input.join("");
}
