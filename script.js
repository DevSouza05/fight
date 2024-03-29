// let log = new log (document.querySelector(".log"));
let char = new Knight("Peterson")
let Monster = new LittleMonster();

let stage =new Stage (
    char,
    Monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    
)

stage.start();