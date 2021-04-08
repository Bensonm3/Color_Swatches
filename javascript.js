// Declaring variables, two display containers, random color button, and search text box
const swatchContainer = document.getElementById("swatchContainer");
const lowerContainer = document.getElementById("lowerContainer");
const randomBtn = document.getElementById("randomBtn");
const searchText = document.getElementById("searchText");
// Array of named colors, contains most named colors in HTML
colorList=['#FFC0CB','#FFB6C1','#FF69B4','#FF1493','#DB7093','#C71585','#E6E6FA','#D8BFD8','#DDA0DD','#DA70D6','#EE82EE','#FF00FF','#FF00FF','#BA55D3','#9932CC','#9400D3','#8A2BE2','#8B008B','#800080','#9370DB','#7B68EE','#6A5ACD','#483D8B','#663399','#4B0082','#FFA07A','#FA8072','#E9967A','#F08080','#CD5C5C','#DC143C','#FF0000','#B22222','#8B0000','#FFA500','#FF8C00','#FF7F50','#FF6347','#FF4500','#FFD700','#FFFF00','#FFFFE0','#FFFACD','#FAFAD2','#FFEFD5','#FFE4B5','#FFDAB9','#EEE8AA','#F0E68C','#BDB76B','#ADFF2F','#7FFF00','#7CFC00','#00FF00','#32CD32','#98FB98','#90EE90','#00FA9A','#00FF7F','#3CB371','#2E8B57','#228B22','#008000','#006400','#9ACD32','#6B8E23','#556B2F','#66CDAA','#8FBC8F','#20B2AA','#008B8B','#008080','#00FFFF','#00FFFF','#E0FFFF','#AFEEEE','#7FFFD4','#40E0D0','#48D1CC','#00CED1','#5F9EA0','#4682B4','#B0C4DE','#ADD8E6','#B0E0E6','#87CEFA','#87CEEB','#6495ED','#00BFFF','#1E90FF','#4169E1','#0000FF','#0000CD','#00008B','#000080','#191970','#FFF8DC','#FFEBCD','#FFE4C4','#FFDEAD','#F5DEB3','#DEB887','#D2B48C','#BC8F8F','#F4A460','#DAA520','#B8860B','#CD853F','#D2691E','#808000','#8B4513','#A0522D','#A52A2A','#800000','#FFFAFA','#F0FFF0','#F5FFFA','#F0FFFF','#F0F8FF','#F8F8FF','#F5F5F5','#FFF5EE','#F5F5DC','#FDF5E6','#FFFAF0','#FFFFF0','#FAEBD7','#FAF0E6','#FFF0F5','#FFE4E1','#DCDCDC']
// Loads initial swatch page on page load
$(document).ready(generateswatchHtml());
// Generates initial swatch container display, checks for page index to display correct colors
function generateswatchHtml(pageIndex){
    let i = 0;
    if(pageIndex > 0){
        i = (12 * pageIndex)-1
    }
    $("#swatchContainer").empty();
    $("#swatchContainer").append(
        `<div class="col-md-12 listView">
            <div class="row swatchRow">
                <div class="col-md-3">
                    <div id = "`+colorList[i]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i]+`">
                        </div>
                        <div class="colorName">`+colorList[i]+`
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id = "`+colorList[i+1]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i+1]+`">
                        </div>
                        <div class="colorName">`+colorList[i+1]+`
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id = "`+colorList[i+2]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i+2]+`">
                        </div>
                        <div class="colorName">`+colorList[i+2]+`
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id = "`+colorList[i+3]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i+3]+`">
                        </div>
                        <div class="colorName">`+colorList[i+3]+`
                        </div>
                    </div>
                </div>
            </div>
            <div class="row swatchRow">
                <div class="col-md-3">
                    <div id = "`+colorList[i+4]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i+4]+`">
                        </div>
                        <div class="colorName">`+colorList[i+4]+`
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id = "`+colorList[i+5]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i+5]+`">
                        </div>
                        <div class="colorName">`+colorList[i+5]+`
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id = "`+colorList[i+6]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i+6]+`">
                        </div>
                        <div class="colorName">`+colorList[i+6]+`
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id = "`+colorList[i+7]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i+7]+`">
                        </div>
                        <div class="colorName">`+colorList[i+7]+`
                        </div>
                    </div>
                </div>
            </div>
            <div class="row swatchRow">
                <div class="col-md-3">
                    <div id = "`+colorList[i+8]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i+8]+`">
                        </div>
                        <div class="colorName">`+colorList[i+8]+`
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id = "`+colorList[i+9]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i+9]+`">
                        </div>
                        <div class="colorName">`+colorList[i+9]+`
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id = "`+colorList[i+10]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i+10]+`">
                        </div>
                        <div class="colorName">`+colorList[i+10]+`
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id = "`+colorList[i+11]+`" onclick="detailView(this.id)" class="colorSwatch">
                        <div class="colorBox" style="background-color:`+colorList[i+11]+`">
                        </div>
                        <div class="colorName">`+colorList[i+11]+`
                        </div>
                    </div>
                </div>
            </div>
        </div>`        
    )
        $("#lowerContainer").empty();
        $("#lowerContainer").append(
            `<div class= "row indexRow">
                <div id="0" onclick="generateswatchHtml(this.id)" class="indexList col-md-1">1
                </div>
                <div id="1" onclick="generateswatchHtml(this.id)" class="indexList col-md-1">2
                </div>
                <div id="2" onclick="generateswatchHtml(this.id)" class="indexList col-md-1">3
                </div>
                <div id="3" onclick="generateswatchHtml(this.id)" class="indexList col-md-1">4
                </div>
                <div id="4" onclick="generateswatchHtml(this.id)" class="indexList col-md-1">5
                </div>
                <div id="5" onclick="generateswatchHtml(this.id)" class="indexList col-md-1">6
                </div>
                <div id="6" onclick="generateswatchHtml(this.id)" class="indexList col-md-1">7
                </div>
                <div id="7" onclick="generateswatchHtml(this.id)" class="indexList col-md-1">8
                </div>
                <div id="8" onclick="generateswatchHtml(this.id)" class="indexList col-md-1">9
                </div>
                <div id="9" onclick="generateswatchHtml(this.id)" class="indexList col-md-1">10
                </div>
                <div id="10" onclick="generateswatchHtml(this.id)" class="indexList col-md-1">11
                </div>
            </div>`
        );
    }
// Handles enter key on search bar, as there is no search button the user must press enter to submit their search query
$("#searchText").keyup(function(event) {
    if (event.keyCode === 13) {
        isValidColor(searchText.value);
    }
});
// Checks to see if the entered text in the search form is a valid color, if not the user gets an error message
function isValidColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
    if(s.color == strColor.toLowerCase()){
        getHexColor(strColor.toLowerCase())
    } else{
        alert("Not a valid color, try again!")
    }
  }
// Converts confirmed search color to hex string and sends the result to the detailView function
function getHexColor(colorStr) {
    var a = document.createElement('div');
    a.style.color = colorStr;
    var colors = window.getComputedStyle( document.body.appendChild(a) ).color.match(/\d+/g).map(function(a){ return parseInt(a,10); });
    document.body.removeChild(a);
    detailView((colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : false)
}

// Generates html for smaller shade boxes in detail view
function generateShades(rgb){
    $("#lowerContainer").append(`
        <div class="col-md-2">
            <div class="colorSwatch" id="`+rgb+`" onclick="detailView(this.id)">
                <div class="shadeBox" style="background-color:`+rgb+`">
                </div>
                <div class="colorName">`+rgb+`
                </div>
            </div>
        </div>`
    )
}
// Generates padding div to the end of the swatch row, and the clear button in the detail view,
function generateClearbtn(){
    $("#lowerContainer").append(
        `<div class = "col-md-1">
        </div>
    </div>
    <div class = "row buttonRow">
                <div class="col-md-12">
                    <div class = "buttonContainer">
                        <button type="submit" onclick="generateswatchHtml(0)" id="clearBtn">Clear
                        </button>
                    </div>
                </div>
            </div>`
    )
}
// Generates padding columns to create page consistency
function generatePaddingCol(){
    $("#lowerContainer").append(
        `<div class = "col-md-1">
        </div>`
    )
}
//  Function used to gather shades for Detail view, uses luminosity variations from main color to generate shades. Also creates a shades array to filter out duplicate shades
function getShades(mainColor){
    $("#lowerContainer").empty();
    let lums = [-.2, -.1, 0, .1, .2]
    let shadehexes = []
    generatePaddingCol();
    for(i=0; i < 5; i++){
        ColorLuminance(mainColor, lums[i], shadehexes)
    }
    generateClearbtn();
}
// determines hex strings for shades
function ColorLuminance(hex, lum, shades) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;

    // convert to decimal, push to shades array for duplicate check
    var rgb = "#", c, i;
    
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i*2,2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00"+c).substr(c.length);
    }
    shades.push(rgb)
    // if current shade does not match previous shade, generate new shade swatch
    if(shades[shades.length-1] !== shades[shades.length-2]){
        generateShades(rgb);
    // if current shade does match previous shade, generate blank padding columns to fill the remaining row space
    } else if(shades[shades.length-1] == shades[shades.length-2]){
        for(i=0; i < 10 - (shades.length*2); i++){
            generatePaddingCol();
        }
    }
}
// Generates Detail View main color html based on user input, and passes main color to the getShades function
function detailView(mainColor) {
    $("#swatchContainer").empty();
    $("#swatchContainer").append(
        `<div class="col-md-12 detailView">
            <div class="row">
                <div class="col-md-1">
                </div>
                <div class = "col-md-10 mainSwatch">
                    <div class="mainColorBox" style="background-color:`+mainColor+`">
                    </div>
                    <div class="mainColorName">`+mainColor+`
                    </div>
                </div>
                <div class="col-md-1">
                </div>
            </div>
        </div>`
        )
        getShades(mainColor);
}
// Handles Random Color Button Click, selecting a random color from the colorList array to send to the detailView function
$("#randomBtn").on("click", function(event) {
    event.preventDefault();
    let mainColor = colorList[Math.floor(Math.random() * colorList.length)]
    detailView(mainColor);    
})

