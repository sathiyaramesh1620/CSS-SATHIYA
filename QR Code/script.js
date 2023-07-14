const frm = document.querySelector('#frm');
const output = document.querySelector('#output')
const spinner = document.querySelector('#loading');
// const qrcodeElement = document.querySelector('#qrcode')
// const btnSave = document.querySelector('#btn-save')
function generateQRCode(e) {
    e.preventDefault()
    const url = document.querySelector('#url').value
    const size = document.querySelector('#size').value
    const cDark = document.querySelector('#colorDark').value
    const cLight = document.querySelector('#colorLight').value
    // console.log(url,size,clrDark,clrLight);
}
if (url === "") {
    alert("please Enter Your Website Link");
}
else {
    //show Spinner
    spinner.style.display = 'flex'
}
setTimeout(() => {
    //Hide Spinner
    spinner.style.display = 'none';
    const qrc = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
        colorDark: cDark,
        colorLight: cLight,
        correctLevel: QRCode.CorrectLevel.H

    })
    console.log("qrcode")
}, 1000)
frm.addEventListener('submit', generateQRCode)