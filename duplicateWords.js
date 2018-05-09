var res = 'aaaabbbbaaacccbbb'
.replace(/(.)\1*/g, function(m, $1){
    return $1 = m.length;
});
console.log(res);

// (.)\1* will match a single non-line-break character and
// check if that is followed by the same character any number of time
//m here is the complete match and $1 is the first chaptured group value
