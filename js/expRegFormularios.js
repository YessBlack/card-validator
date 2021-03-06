export const validarCampos = {
    expRegNombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    expRegNumero : /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}$/,
    expRegMMAAAA : /\d{1,2}[12]\/\d{2,4}$/,
    expRegCVV : /^[0-9]{3,4}$/,
    visa : /(4\d{12}(?:\d{3})?)/,
    amex : /(3[47]\d{13})/,
    jcb : /(35[2-8][89]\d\d\d{10})/,
    maestro : /((?:5020|5038|6304|6579|6761)\d{12}(?:\d\d)?)/,
    solo : /((?:6334|6767)\d{12}(?:\d\d)?\d?)/,
    mastercard : /(5[1-5]\d{14})/,
    switch : /(?:(?:(?:4903|4905|4911|4936|6333|6759)\d{12})|(?:(?:564182|633110)\d{10})(\d\d)?\d?)/,
}