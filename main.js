//celcius
//input
let celciusInput = 0;

//clac
function convertCtoF(celcius)
{
    return (celcius * 9) / 5 +32;
}
//output
let outputF = convertCtoF(celciusInput);

//farenhiet
let farenhietInput = 0;

//calc
function convertFtoC(farenhiet)
{
    return ((farenhiet - 32) * 5) / 9;
}

//output
let outputC = convertFtoC(farenhietInput);

//formatter
function formatTemperature(value, unit)
{
    return `${value} ${unit}`
}

//format output 
let outputFormatC = formatTemperature(outputC, `C`);
let outputFormatF = formatTemperature(outputF, `F`);


//console log final
console.log(`${farenhietInput} F is ${outputFormatC}`);
console.log(`${celciusInput} C is ${outputFormatF}`);

