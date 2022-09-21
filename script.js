
function textProcessor()
{
    let rawStr = document.getElementById('entry').value;
    let encodedStr = duplicateEncode(rawStr);
    document.getElementById('entered').innerHTML = rawStr;
    document.getElementById('result').innerHTML = encodedStr;
}
function duplicateEncode(word)
{
    return word
    .toLowerCase()
    .split('')
    .map
    (
        function (a, i, w)
        {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
        }
    )
    .join('');
}

/* FIRST ITERATION
function duplicateEncode(word)
{
    let charArray = word.toUpperCase().split('');
    var enArray = [];
    for (var i = 0; i < charArray.length; i++)
    {
        var demo = charArray[i];
        var result = false;
        for (var j = 0; j < charArray.length; j++)
        {
            if (demo == charArray[j] && i != j)
                result = true;
        }
        if (result == true)
            enArray.push(')');
        else
            enArray.push('(');
    }
    enArray = enArray.join('');
    return enArray;
}
*/




