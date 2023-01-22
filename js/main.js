const encriptar = () => {
    const texto1 = document.getElementById("texto").value;
    console.log(texto1);
    let result = "";
    if (texto1.length < 1) {
        return;
    }
    for (let i = 0; i < texto1.length; i++) {
        switch (texto1[i]) {
            case 'a':
                result += 'ai'
                // console.log('es a');
                break;
            case 'e':
                result += 'enter'
                // console.log('es a');
                break;
            case 'i':
                result += 'imes'
                // console.log('es a');
                break;
            case 'o':
                result += 'ober'
                // console.log('es a');
                break;
            case 'u':
                result += 'ufat'
                // console.log('es a');
                break;
            default:
                result += texto1[i];
                break;
        }
    }
    console.log(result);
    // console.log(texto1);
}
const desencriptar = () => {
    let texto1 = document.getElementById("texto").value;
    console.log(texto1);
    let result = "";

    if (texto1.length < 1) {
        return;
    }
    while (texto1.search('ai') != -1) {
        texto1 = texto1.replace('ai', 'a');
    }
    while (texto1.search('enter') != -1) {
        texto1 = texto1.replace('enter', 'e');
    }
    while (texto1.search('imes') != -1) {
        texto1 = texto1.replace('imes', 'i');
    }
    while (texto1.search('ober') != -1) {
        texto1 = texto1.replace('ober', 'o');
    }
    while (texto1.search('ufat') != -1) {
        texto1 = texto1.replace('ufat', 'u');
    }
    console.log(texto1);
}

// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"