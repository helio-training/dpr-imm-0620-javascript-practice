let value = 5;
function incrementValue (val) {
    val++;
    return val;
}
console.log('val', incrementValue(value));
console.log('value', value);

let reference = { num: 10 }
function incrementReference (ref) {
    ref.num++;
    return ref;
}
console.log('reference', reference)
console.log('ref', incrementReference(reference))
console.log('reference', reference)