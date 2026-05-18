

function generatePassword() {

    //chars rakho pihly
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
    //sarai boxes selcet karo
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        //random charsnikalo 
        let randomChars = chars[Math.floor(Math.random() * chars.length)];

        //ab box mai show karna k lia yea karein
        box.innerText = randomChars

        //kia matlab class remove karo
        box.classList.remove('correct', 'wrong')
    })

    if (
        randomChars.math(/[A-Z]/) ||
        randomChars.math(/[a-z]/) ||
        randomChars.math(/[@#$]/)
    ) {
        box.classList.add('correct')
    } else {
        box.classList.remove('wrong')
    }
}


// function generatePassword() {

//     // Password characters
//     let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

//     // Sare boxes select karo
//     let boxes = document.querySelectorAll(".box");

//     boxes.forEach(box => {

//         // Random character nikalo
//         let randomChar = chars[Math.floor(Math.random() * chars.length)];

//         // Box me show karo
//         box.innerText = randomChar;

//         // Pehle classes remove karo
//         box.classList.remove("correct", "wrong");

//         // Strong check
//         if (
//             randomChar.match(/[A-Z]/) ||
//             randomChar.match(/[0-9]/) ||
//             randomChar.match(/[@#$]/)
//         ) {
//             box.classList.add("correct");
//         }
//         else {
//             box.classList.add("wrong");
//         }

//     });

// }
