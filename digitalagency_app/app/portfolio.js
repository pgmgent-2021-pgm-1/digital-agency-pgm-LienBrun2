/* portfolio
 *
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Developed by: Lien Bruneel
 * Last updated: 21/10/2020
 */

const app = {

   output: "",
   projects: [],

   initialize: function () {

      let firstProject = new makeProject("SKIVE", "Skive is een platform waar muziekfanaten hun favoriete muziek kunnen delen", "https://dl.airtable.com/.attachments/701dd616bd7a4a4298b077b9c79ffe56/15aeeb50/Schermafbeelding2020-05-16om09.47.11.png", 45, 344, "10/05/2019", "11/07/2019")
      let secondProject = new makeProject("SHARETEVELDE", "Hoe kunnen we in tijden van corona aan de hand van een webapplicatie toch", "https://dl.airtable.com/.attachments/2e7bdd9a37dc4a4242ecc8e1f35b0ddc/fdd1ad46/Screenshot_2020-05-24ReactApp4.png", 66, 600, "5/05/2019", "16/08/2019")
      // function to make objects
      function makeProject(tittle, synopsis, tumbnailURL, numbLikes, numbViews, dateOri, dateModi) {
         let project = {
            tittle: tittle,
            synopsis: synopsis,
            tumbnailURL: tumbnailURL,
            assets: [],
            numbLikes: numbLikes,
            numbViews: numbViews,
            dateOri: dateOri,
            dateModi: dateModi,
            //function adds objects in "assets"
            addingAssets: function (...asset) {
               this.assets = asset //misshcine veranderen naar argumetns
            }
         }
         //returns an object
         return project

      }
      //adding assets to first project
      firstProject.addingAssets({
         project_picture: "https://dl.airtable.com/.attachments/701dd616bd7a4a4298b077b9c79ffe56/15aeeb50/Schermafbeelding2020-05-16om09.47.11.png"
      }, {
         project_picture: "https://dl.airtable.com/.attachments/701dd616bd7a4a4298b077b9c79ffe56/15aeeb50/Schermafbeelding2020-05-16om09.47.11.png"
      })
      //adding assets to second project
      secondProject.addingAssets({
         project_picture: "https://dl.airtable.com/.attachments/2e7bdd9a37dc4a4242ecc8e1f35b0ddc/fdd1ad46/Screenshot_2020-05-24ReactApp4.png"
      }, {
         project_picture: "https://dl.airtable.com/.attachments/fa66c8d53b164e4af522735232d136de/4631ce0c/Screenshot_2020-05-24ReactApp1.jpg"
      }, {
         project_picture: "https://dl.airtable.com/.attachments/2192169842e228f91f298073121e4f27/5918b53a/Screenshot_2020-05-24ReactApp8.png"
      })
      //pushing projects in array "projects"
      this.projects.push(firstProject, secondProject)

      //outputfunction

      function makeOutput(projects) {
         let aString = "\t\t\t\tPORTFOLIO";

         projects.forEach(project => {

            aString += `
            ===================================================
            Project ${projects.indexOf(project)+1}:\t\t${project.tittle}
            ===================================================
            
            synopsis:\t\t\t${project.synopsis}
            tumbnail:\t\t\t${project.tumbnailURL}
            Likes:\t\t\t${project.numbLikes}
            Vieuws:\t\t\t${project.numbViews}
            Created at:\t\t\t${project.dateOri}
            Modified at:\t\t${project.dateModi}
            ---------------------------------------------------
            Assets
            ---------------------------------------------------
            `
            if (project.assets) {
               aString += arrayLoop(project.assets);
            }
         });

         return aString

      }
      this.output += makeOutput(this.projects)


      function arrayLoop(projectAssets) {
         let outputAsset = ""

         projectAssets.forEach(asset =>
            outputAsset += `asset ${projectAssets.indexOf(asset)+1}: \t\t\t ${asset.project_picture}
            `)
         return outputAsset
      }
   },

}

app.initialize()
console.log(app.output)