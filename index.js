function introduction(string)
{
    return(`Hi, my name is ${string}.`)
}
function introductionWithLanguage(name,Language)
{
    return(`Hi, my name is ${name} and I am learning to program in ${Language}.`)
}
function introductionWithLanguageOptional(name, Language)
{
    if(!Language)
    {
    return(`Hi, my name is ${name} and I am learning to program in JavaScript.`);
    }else
    {
        return(`Hi, my name is ${name} and I am learning to program in ${Language}.`)
    }
}

