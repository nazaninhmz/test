

async function search(){
    let resault = ""
    let javab ;

    const sentence = usrInput.value.split(" ")
    // console.log(sentence)
    for ( word of sentence ){

        javab = await fetchWord(word)
        // console.log(typeof(response))
        // console.log(response)
        resault += ` ${javab}`

        
    }

    currentResultOutput.innerHTML = resault;

} 

async function fetchWord (word){

    let res = ""
    
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", word);
    encodedParams.append("target", "fa");
    encodedParams.append("source", "en");
    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
            'X-RapidAPI-Key': 'fb92329178mshdd08acf58ec52a4p1179cfjsn0b4832874f13'
        },
        body: encodedParams
    };
    
    await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => {console.log(response.data.translations[0].translatedText) 
                res = response.data.translations[0].translatedText})
        .catch(err => console.error(err));

    return res

}

addBtn.addEventListener('click', search);

