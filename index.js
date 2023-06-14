function initialize() {
    cipherText = ""
    privateKey = ""
    form = document.getElementById("userForm")
    output = document.getElementById("encryptedOutput")
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
}

function normalize(str) {
    str = str.toLowerCase()
    str = str.replace(/\s/g, '');
    return str
}

function caesarCipher() {
    str = form.value
    console.log(str)
    shift = parseInt(prompt("Please enter a shift for the cipher. Ex. A shift 2 = C"))
    str = normalize(str)
    encodedStr = ""
    for (let i = 0; i < str.length; i++) {
        console.log("letter = " + str.charAt(i))
        var tempIndex = alphabet.indexOf(str.charAt(i))
        console.log("tempIndex = " + tempIndex)
        if (tempIndex < 0) {
            i++;
            console.log("skipping")
        }
        else {
            encodedStr += alphabet[(tempIndex + shift) % 26]
            console.log("adding alphabet # " + (tempIndex + shift) + " to encodedStr " + encodedStr);
        }
    }
    console.log(encodedStr);
    update(encodedStr)
}

function strToNum(str) {
    str = form.value
    str = normalize(str)
    encodedStr = ""
    for (let i = 0; i < str.length; i++) {
        let tempIndex = alphabet.indexOf(str.charAt(i))
        if (tempIndex < 0) {
            if (Number.isInteger(parseInt(str.charAt(i))) && str.charAt(i) < 27 && str.charAt(i) > 0) {
                console.log("Activated. Appending " + str.charAt(i) + "...")
                encodedStr += str.charAt(i) + " ";
            }
            else {
                i++;
            }
        }
        else {
            encodedStr += tempIndex + 1 + " ";
        }
    }
    console.log(encodedStr);
    update(encodedStr);
}

function strToBase64(str) {
    str = form.value
    str = normalize(str)
    console.log(btoa(str));
    update(btoa(str));
}

function reverseStr(str) {
    str = form.value
    str = normalize(str)
    encodedStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        encodedStr += str.charAt(i);
    }
    console.log(encodedStr);
    update(encodedStr);
}

function update(encodedStr) {
    output.innerHTML = encodedStr;
}