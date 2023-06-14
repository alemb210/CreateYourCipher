function initialize() {
    cipherText = ""
    privateKey = ""
    form = document.getElementById("userForm")
    output = document.getElementById("encryptedOutput")
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
}


function caesarCipher() {
    str = form.value
    console.log(str)
    shift = parseInt(prompt("Please enter a shift for the cipher. Ex. A shift 2 = C"))
    encodedStr = ""
    for (let i = 0; i < str.length; i++) {
        var tempIndex = alphabet.indexOf(str.charAt(i).toLowerCase())
        let isUpperCase = (str.charAt(i) != str.charAt(i).toLowerCase());
        if (tempIndex < 0) {
            i++;
        }
        else {
            if (isUpperCase) {
                encodedStr += alphabet[(tempIndex + shift) % 26].toUpperCase();
            }
            else {
                encodedStr += alphabet[(tempIndex + shift) % 26]
            }
        }
    }
    update(encodedStr)
}

function strToNum(str) {
    str = form.value
    encodedStr = ""
    for (let i = 0; i < str.length; i++) {
        let tempIndex = alphabet.indexOf(str.charAt(i).toLowerCase())
        if (tempIndex < 0) {
            if (Number.isInteger(parseInt(str.charAt(i))) && str.charAt(i) < 27 && str.charAt(i) > 0) {
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
    update(encodedStr);
}

function numToStr(nums) {
    nums = form.value
    nums = nums.split(" ");
    encodedStr = ""
    for (let i = 0; i < nums.length; i++) {
        if (parseInt(nums[i]) != NaN) {
            if (nums[i] > 0) {
                encodedStr += alphabet[(nums[i] - 1) % 26];
            }
            else {
                encodedStr += nums[i].toString()
            }
        }
        else {
            i++;
        }
    }
    update(encodedStr);
}

function strToBase64(str) {
    str = form.value
    update(btoa(str));
}

function reverseStr(str) {
    str = form.value
    encodedStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        encodedStr += str.charAt(i);
    }
    update(encodedStr);
}

function base64ToStr() {
    b64 = form.value
    update(atob(b64));
}

function update(encodedStr) {
    output.innerHTML = encodedStr;
    form.innerHTML = encodedStr;
    form.value = encodedStr;
}