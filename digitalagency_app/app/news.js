/* news
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Developed by: Lien Bruneel
 * Last updated: 21/10/2020
 */
const app = {

    output: "",
    articles: [],
    initialize: function () {

        let firstArticle = new makeArticle("HERLINDE DERYCKE WINT DE FEBELGRA-PRIJS 2019", "Herlinde Derycke wint de Febelgra-prijs 2019", "artikeltekst","https://dl.airtable.com/.attachments/44d28e423b0b92ea6433db31b10dbe2b/2d56ac9b/febelgra-IMG_1209kl_2.jpg", 10, 300, "12/05/2019", "3/07/2019")
        let secondArticle = new makeArticle("TENTOONSTELLING ‘CONCERTFOTOGRAFIE’ DOOR GEERT BONNE", "Geert, voormalig drummer bij Gorky, is een ‘gevoelsmens’. Zijn invalshoek bij het maken van de concertfoto’s.", "artikeltekst","https://dl.airtable.com/.attachments/701dd616bd7a4a4298b077b9c79ffe56/15aeeb50/Schermafbeelding2020-05-16om09.47.11.png", 20, 666, "25/05/2019", "5/08/2019")
        // function to make a article
        function makeArticle(tittle, synopsis, body, tumbnailURL, numbLikes, numbViews, dateOri, dateModi) {
            let project = {
                tittle: tittle,
                synopsis: synopsis,
                body: body,
                tumbnailURL: tumbnailURL,
                authors: [],
                comments: [],
                numbLikes: numbLikes,
                numbViews: numbViews,
                dateOri: dateOri,
                dateModi: dateModi,
                //function adds objects in assets
                addingAuthor: function (...newauthor) {
                    this.authors = newauthor
                },
                addingcomments: function (...newcomment) {
                    this.comments = newcomment
                }
            }

            return project

        }
//adding authors to the first article
        firstArticle.addingAuthor({
            naam: "lisa",
            achternaam: "dewilde",
            Url: "https://dl.airtable.com/.attachments/701dd616bd7a4a4298b077b9c79ffe56/15aeeb50/Schermafbeelding2020-05-16om09.47.11.png"
        })
        firstArticle.addingcomments({
            nickName: "anoniem",
            bericht: "proficiat",
            commentaren: {"second person": "inderdaad"}
        })
//adding authors to the second article
secondArticle.addingAuthor({
    naam: "lisa",
    achternaam: "dewilde",
    Url: "https://dl.airtable.com/.attachments/701dd616bd7a4a4298b077b9c79ffe56/15aeeb50/Schermafbeelding2020-05-16om09.47.11.png"
})
secondArticle.addingcomments({
    nickName: "anoniempje",
    bericht: "super",
    commentaren: {"second person": "id"}
})


//pushing the articles in the array 'articles'
        this.articles.push(firstArticle, secondArticle)

//printfunction
        function makeOutput(articles) {
            let aString = "\t\t\tNEWS";

            articles.forEach(article => {

                aString += `
             ============================================================================
             Post ${articles.indexOf(article)+1}:\t\t${article.tittle}
             ===========================================================================
             
             synopsis:\t\t\t${article.synopsis}
             tumbnail:\t\t\t${article.tumbnailURL}
             Likes:\t\t\t${article.numbLikes}
             Vieuws:\t\t\t${article.numbViews}
             Created at:\t\t${article.dateOri}
             Modified at:\t\t${article.dateModi}
             
             `
//putting authors in 'astring' if they are available
                if (article.authors) {
                    aString += arrayLoop(article.authors);
                } 
//putting comments in 'astring' if they are available
                 if (article.comments) {
                    aString += commentloop(article.comments)
                }
            });


//returning the string
            return aString

        }
//filling the output with te string that is made in 'makeoutput'
        this.output += makeOutput(this.articles)


        function arrayLoop(projectAuthor) {
            let outputAuthor = `-------------------------------------------------------
             Authors
             -------------------------------------------------------
            `
            projectAuthor.forEach(author =>
                outputAuthor += ` author ${projectAuthor.indexOf(author)+1}: \t\t\t ${author.naam} ${author.achternaam}

            `
            )

            return outputAuthor
        }
        
        function commentloop(projectComment) {
            let outputComment = ` -------------------------------------------------------
             Comments
             -------------------------------------------------------
            `

            projectComment.forEach(comment =>
                outputComment += ` commentaar ${projectComment.indexOf(comment)+1}: \t\t ${comment.nickName}: ${comment.bericht}
                \t\t\t\t${comment.commentaren}: ${comment.commentaren["second person"]}

            `
            )

            return outputComment
        }


    },






}

app.initialize()
console.log(app.output)