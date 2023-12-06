var input = ""
var numberInput = []
const MAX_OFFSET = 55000
var offset = 0
var encodedMessage = []
const passwordField = document.getElementById("key")
const passwordButton = document.getElementById("sendKey")
const encodeField = document.getElementById("encode")
const encodeButton = document.getElementById("sendEncode")
const encodeOutput = document.getElementById("encodeOutput")
const decodeField = document.getElementById("decode")
const decodeButton = document.getElementById("sendDecode")
const decodeOutput = document.getElementById("decodeOutput")
var numberInput2 = []


function encode(){
    input = encodeField.value
    var inputLength = input.length
    i=0
    while(i<inputLength){
        numberInput.push(input.charCodeAt(i))
        i=i+1
    }

    console.log(numberInput)
    i=0

    encodedMessage = numberInput.map((element)=>{
        return element+offset
    })

    console.log(encodedMessage)
    encodeOutput.textContent = String.fromCharCode(...encodedMessage)
    numberInput = []
    encodedMessage = []
}
function decode(){
    numberInput2 = []
    decodeInput = decodeField.value
    i=0
    while(i<decodeInput.length){
        numberInput2.push(decodeInput.charCodeAt(i))
        i=i+1
    }
    var decodedMessage = numberInput2.map((element)=>{
        return element-offset
    })
    
    console.log(decodedMessage)
    console.log(String.fromCharCode(...decodedMessage))
    decodeOutput.textContent = String.fromCharCode(...decodedMessage)
}


passwordButton.addEventListener("click", ()=>{
    offset = parseInt(passwordField.value)
    if(offset>MAX_OFFSET){
        offset = 55000
    }
})

encodeButton.addEventListener("click", ()=>{
    encode()
})

decodeButton.addEventListener("click", ()=>{
    decode()
})
