const update = (() => {
    if(!solved){
        solved = true
        document.getElementById("puzzle").style.gridTemplateAreas =
        `"hexagon${currentOrder[0]} hexagon${currentOrder[1]}"
        "turn1 turn1"
        "hexagon${currentOrder[2]} hexagon${currentOrder[3]}"
        "turn2 turn2"
        "hexagon${currentOrder[4]} hexagon${currentOrder[5]}"`
        for(let i = 0; i < 6; i++){
            let el = document.querySelector("#puzzle #project" + (i + 1));
            if(currentOrder[i] == i + 1){
                el.style.color = "var(--highlight)";
            } else {
                el.style.color = "red";
                solved = false;
            }
        }
        if(solved){
            console.log("YAYAYA");
        }
    }
})

module.exports = {update};