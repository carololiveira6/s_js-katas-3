const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let count = [];
    let resultado = document.getElementById("kata1");

    for (let i = 1; i <=25; i++) {
        count.push(i);
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);
    
    return count;
}

kata1(); /* chamando a função */

function kata2() {
    let count = [];
    let resultado = document.getElementById("kata2");

    for (let i = 26 -1; i > 0; i--) {
        count.push(i);
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);

    return count;
}

kata2();

function kata3() {
    let count = [];
    let resultado = document.getElementById("kata3");

    for (let i = 1; i <=25; i++) {
        count.push(i * (-1))
    
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);
    
    return count;
}

kata3()

function kata4() {
    let count = [];
    let resultado = document.getElementById("kata4");

    for (let i = 26 -1; i > 0; i--) {
        count.push(i * (-1));
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);

    return count;
}

kata4()

function kata5() {
    let count = [];
    let resultado = document.getElementById("kata5");

    for (let i = 26 -1; i > 0; i--) {
        if (i % 2 !== 0) {
            count.push(i);
        }
    }
    for (let i = 0; i < 26; i++) {
        if (i % 2 !== 0) {
            count.push(i * (-1));
        }
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);

    return count;
}

kata5()

function kata6() {
    let count = [];
    let resultado = document.getElementById("kata6");

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0){
            count.push(i);
        }
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);
    
    return count;
}

kata6()

function kata7() {
    let count = [];
    let resultado = document.getElementById("kata7");

    for (let i = 1; i <= 100; i++) {
        if (i % 7 ===0) {
            count.push(i);
        }
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);
    
    return count;
}

kata7()

function kata8() {
    let count = [];
    let resultado = document.getElementById("kata8");

    for (let i = 101 - 1; i > 1; i--) {
        if (i % 3 === 0 || i % 7 === 0) {
            count.push(i);
        }
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);
    
    return count;
}

kata8()

function kata9() {
    let count = [];
    let resultado = document.getElementById("kata9");

    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            count.push(i);
        }
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);
    
    return count;
}

kata9()

function kata10() {
    let resultado = document.getElementById("kata10");
    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${sampleArray})`;
    resultado.appendChild(novaDiv);
    
    return sampleArray;

}

kata10()

function kata11() {
    let count = [];
    let resultado = document.getElementById("kata11");

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            count = sampleArray[i] + count;
        }
    }
    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);
    
    return count;

}

kata11()

function kata12() {
    let count = [];
    let resultado = document.getElementById("kata12");

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            count = sampleArray[i] + "," + count;
        }
        count
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);
    
    return count;
}

kata12()

function kata13() {
    let count = [];
    let resultado = document.getElementById("kata13");

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            count = sampleArray[i] + "," + count;
        }
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);
    
    return count;
}

kata13()

function kata14() {
    let count = [];
    let resultado = document.getElementById("kata14");

    for (let i = 0; i < sampleArray.length; i++) {
        count += sampleArray[i] * sampleArray[i] + ","
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${count})`;
    resultado.appendChild(novaDiv);
    
    return count;

}

kata14()

function kata15() {
    let resultado = document.getElementById("kata15");
    let soma = 0;

    for (let i = 0; i < 21; i++) {
        soma += i;
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${soma})`;
    resultado.appendChild(novaDiv);
    
    return soma;
}

kata15()

function kata16() {
    let resultado = document.getElementById("kata16");
    let soma = 0;

    for (let i = 0; i < sampleArray.length; i++) {
        soma += sampleArray[i];
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${soma})`;
    resultado.appendChild(novaDiv);
    
    return soma;
}

kata16()

function kata17() {
    let resultado = document.getElementById("kata17");
    let menorNumero = sampleArray[0];

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] < menorNumero) {
            menorNumero = sampleArray[i];
        }
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${menorNumero})`;
    resultado.appendChild(novaDiv);

    return menorNumero;
}

kata17()

function kata18() {
    let resultado = document.getElementById("kata18");
    let maiorNumero = sampleArray[0];

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > maiorNumero) {
            maiorNumero = sampleArray[i];
        }
    }

    let novaDiv = document.createElement("div");
    novaDiv.innerHTML = `(${maiorNumero})`;
    resultado.appendChild(novaDiv);

    return maiorNumero;
}

kata18()


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
