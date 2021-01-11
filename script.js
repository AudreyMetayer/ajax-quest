
function fetchSimpsonJSON() {
    const simpsonId = 1;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=${simpsonId}`;
    axios.get(url)
        .then(function(response) {
            return response.data['0']; // response.data instead of response.json() with fetch
        })
        .then(function(simpson) {
            console.log('data decoded from JSON:', simpson);

            // Build a block of HTML
            const simpsonHtml = `
        <p><strong>${simpson.character}</strong></p>
        <p><i>${simpson.quote}</i></p>
        <img src="${simpson.image}" />
      `;
            document.querySelector('#simpson').innerHTML = simpsonHtml;
        });

}
fetchSimpsonJSON();

document.getElementById("otherQuote").addEventListener("click", function() {
    document.getElementById("simpson").innerHTML = fetchSimpsonJSON() ;
});

