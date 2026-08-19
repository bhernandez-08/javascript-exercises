function add7(number) {
    return number + 7;
}   

function multiply(num1, num2){
    return num1*num2;
}

const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

async function runCalc(){
    const choice = await r1.question("Do you want to add by 7 or multiply");
    if (choice ==="add7"){
        const answer = await r1.question('What number do you wish to add? ');
        console.log(`Result is: ${add7(answer)}`);
    }
    else if (choice==="multiply"){

        const num1= await r1.question('What is the first number you want to multipy');
        const num2= await r1.question('What is the second number you want to multipy');   

        console.log(`Result: ${multiply(num1,num2)}`); 
    }
    else {
        console.log("Your answer is not valid please choose add7 or multiply");
    }

    r1.close();
}

runCalc();


