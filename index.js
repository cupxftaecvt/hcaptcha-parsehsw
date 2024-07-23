const token = process.argv[2];

const json = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());

const parsed = {
    fingerprint_type: json.f,
    difficulty: json.s,
    vm_type: json.t,
    pow_data: json.d,
    location: json.l,
    signature: json.i,
    timestamp: json.e,
    n: json.n,
    timeout_value: json.c
}

console.log(parsed);
