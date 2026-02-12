function factorial(n) {
    if(n === 0) return 1;
    return n * factorial(n - 1);
}
function calculatePermutation() {
    let n = Number(document.getElementById("n").value);
    let r = Number(document.getElementById("r").value);
    if(r > n) {
        document.getElementById("result").innerText = "Error";
        return;
    }
    let result = factorial(n) / factorial(n-r);
    document.getElementById("result").innerText = result;

}
function calculateCombination() {
    let n = Number(document.getElementById("n").value);
    let r = Number(document.getElementById("r").value);
    if(r > n) {
        document.getElementById("result").innerText = "Error";
        return;
    }
    let result = factorial(n) / (factorial(r) * factorial(n-r));
    document.getElementById("result").innerText = result;
}