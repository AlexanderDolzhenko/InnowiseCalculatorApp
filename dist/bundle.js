(() => {
  "use strict";
  const e = {
    displayElement: document.querySelector(".display"),
    currentOperand: "",
    currentOperation: null,
    operationDisplay: "",
    memoryValue: 0,
  };
  function r() {
    let r;
    const n = parseFloat(e.currentOperand.replace(",", "."));
    switch (e.currentOperation) {
      case "+":
        r = e.memoryValue + n;
        break;
      case "-":
        r = e.memoryValue - n;
        break;
      case "×":
        r = e.memoryValue * n;
        break;
      case "÷":
        if (0 === n) return void (e.displayElement.value = "Error");
        r = e.memoryValue / n;
        break;
      default:
        return;
    }
    (e.displayElement.value = r.toString().replace(".", ",")),
      (e.memoryValue = r);
  }
  document.addEventListener("DOMContentLoaded", function () {
    !(function () {
      const e = document.querySelectorAll(".button"),
        r = document.querySelector(".round.red"),
        n = document.querySelector(".round.yellow"),
        t = document.querySelector(".round.green"),
        a = document.querySelector(".display"),
        o = document.querySelector(".calculator");
      function c() {
        (a.style.backgroundColor = "#000"), (o.style.backgroundColor = "#000");
      }
      r.addEventListener("click", function () {
        e.forEach((e) => {
          e.style.backgroundColor = "#ff5f52";
        }),
          (a.style.color = "#ff5f52"),
          c();
      }),
        n.addEventListener("click", function () {
          e.forEach((e) => {
            e.style.backgroundColor = "#f3ba25";
          }),
            (a.style.color = "#f3ba25"),
            c();
        }),
        t.addEventListener("click", function () {
          e.forEach((e) => {
            e.style.backgroundColor = "#26c938";
          }),
            (a.style.color = "#26c938"),
            c();
        }),
        document.addEventListener("keydown", function (r) {
          "Escape" === r.key &&
            (e.forEach((e) => {
              e.style.backgroundColor = "";
            }),
            (a.style.color = ""),
            (a.style.backgroundColor = ""),
            (o.style.backgroundColor = ""));
        });
    })(),
      document.querySelectorAll(".button").forEach((n) => {
        n.addEventListener("click", function () {
          const t = n.getAttribute("data-value");
          var a;
          (isNaN(t) && "." !== t) ||
            ("." === (a = t)
              ? e.currentOperand.includes(",") || (e.currentOperand += ",")
              : "0" === e.currentOperand
                ? (e.currentOperand = a)
                : (e.currentOperand += a),
            (e.displayElement.value = e.currentOperand)),
            ["+", "-", "×", "÷"].includes(t) &&
              (function (n) {
                "" !== e.currentOperand
                  ? (null === e.currentOperation
                      ? (e.memoryValue = parseFloat(
                          e.currentOperand.replace(",", "."),
                        ))
                      : r(),
                    (e.currentOperand = ""),
                    (e.currentOperation = n),
                    (e.operationDisplay = `${e.memoryValue.toString().replace(".", ",")} ${n} `),
                    (e.displayElement.value = e.operationDisplay))
                  : (e.currentOperation = n);
              })(t),
            "=" === t &&
              "" !== e.currentOperand &&
              (r(), (e.currentOperand = ""), (e.currentOperation = null)),
            "AC" === t &&
              ((e.currentOperand = ""),
              (e.currentOperation = null),
              (e.operationDisplay = ""),
              (e.displayElement.value = "0")),
            "+/-" === t &&
              "string" == typeof e.currentOperand &&
              "" !== e.currentOperand &&
              ((e.currentOperand = (-parseFloat(e.currentOperand))
                .toString()
                .replace(".", ",")),
              (e.displayElement.value = e.currentOperand)),
            "%" === t &&
              (function () {
                if (
                  "string" == typeof e.currentOperand &&
                  "" !== e.currentOperand
                ) {
                  const r =
                    parseFloat(e.currentOperand.replace(",", ".")) / 100;
                  (e.currentOperand = r.toString().replace(".", ",")),
                    (e.displayElement.value = e.currentOperand);
                }
              })();
        });
      });
  });
})();
