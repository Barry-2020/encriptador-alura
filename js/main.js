// document.getElementById('copiar').style.display = 'none';
const encriptar = () => {
    const texto1 = document.getElementById("texto").value;
    let result = "";
    if (texto1.length <= 1) {
        document.getElementById("texto").focus();
        return;
    }
    document.getElementById('texto2').value = "";
    console.log(texto1);
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
    document.getElementById('d_resultado_h').style.display = 'none';
    document.getElementById('texto2').value = result;
    document.getElementById('texto2').style.display = 'initial';
    document.getElementById('copiar').style.display = 'initial';
    console.log(result);
    // console.log(texto1);
}
const desencriptar = () => {
    let texto1 = document.getElementById("texto").value;
    let result = "";
    
    if (texto1.length <= 1) {
        document.getElementById("texto").focus();
        return;
    }
    document.getElementById('texto2').value = "";
    console.log(texto1);
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

    document.getElementById('d_resultado_h').style.display = 'none';
    document.getElementById('texto2').value = texto1;
    document.getElementById('texto2').style.display = 'initial';
    document.getElementById('copiar').style.display = 'initial';
    console.log(texto1);
}
const copiar = () => {
    const text = document.getElementById('texto2').value;
    console.log(text);
    navigator.clipboard.writeText(text).then(function() {
        console.log('Copiado');
        document.getElementById('copiar').style.transition = '400ms';
        document.getElementById('copiar').style.backgroundColor = '#5fc981';
        document.getElementById('copiar').style.borderColor = '#5fc981';
        document.getElementById('copiar').style.fontWeight = 'bold';
        document.getElementById('copiar').style.color = 'white';
        document.getElementById('copiar').innerHTML = 'Copiado ✅';
        
    }, function(err) {
        console.error('Error: ', err);
    });
}
const reset_b = () => {
    let texto1 = document.getElementById("texto").value;
    if (texto1.length <= 1) {
        document.getElementById('copiar').style.transition = '400ms';
        document.getElementById('copiar').style.backgroundColor = 'transparent';
        document.getElementById('copiar').style.borderColor = '#092b55';
        document.getElementById('copiar').style.fontWeight = '';
        document.getElementById('copiar').style.color = '#0A3871';
        document.getElementById('copiar').innerHTML = 'Copiar';
    }

    // VAlidaciones
    // Variable que usaremos para determinar si el input es valido
    let isValid = true;

    // El input que queremos validar
    const input = document.getElementById("texto");
    input.value = texto1.toLowerCase();

    //El div con el mensaje de advertencia:
    const message = document.getElementById('ErrorMsg');

    // El pattern que vamos a comprobar
    const pattern = new RegExp('^[a-z\u00f1\u00d10-9 ]+$', 'i');

    // input.classList.add('is-invalid');
    if (input.value.length >= 1) {
        if(pattern.test(input.value)){
            isValid = true;
        }
        else isValid = false;
    }
    //Pinta input
    if(isValid) {
        message.style.transition = '300ms'
        message.style.transform = "scale(1)";
        message.style.color = "#495057";
        document.getElementById('encriptar').disabled = false;
        document.getElementById('Desencriptar').disabled = false;
    } else {
        message.style.transition = '300ms'
        message.style.transform = "scale(1.1)";
        message.style.color = "red";
        document.getElementById('encriptar').disabled = true
        document.getElementById('Desencriptar').disabled = true
    }

    return isValid;
}

// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"