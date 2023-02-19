let binary_number: string|null;
let decimal_number: string;

binary_number = prompt("Informe um número para ser convertido ");

if (typeof binary_number === "string") {
    if (binary_number.length <= 8) {
        for (let i = 0; i < binary_number.length; i++) {
            if (binary_number[i] != "0" && binary_number[i] != "1") {
               console.log(`O digito da posicao ${i}`);
            }
        }
    }
    else {
        console.log("Quantidade informada invalida");
    }
}
else {
    console.log("Nao foi informada uma string");
}
