let noClicks = 1;
let noScale = 1;
let yesScale = 1;

document.getElementById("no").addEventListener("click", () => {

        yesScale += 1.2;
        yes.style.transform = `scale(${yesScale})`;

        noScale -= 0.05;
        no.style.transform = `scale(${noScale})`;

        let moveNDistance = noClicks * 42;
        no.style.position = 'relative';
        no.style.left = `${moveNDistance}px`;

        let moveYDistance = noClicks * -25;
        yes.style.position = 'relative';
        yes.style.top = `${moveYDistance}px`;

        noClicks++;
        
});

function checkName(){
    const userName = document.querySelector("textarea").value;
    const correctNames = ["Matthias", "matthias", "baby", "mattsi", "Mattsi", "Baby"]

    if (correctNames.includes(userName)){
        window.location.href="index.html";
    } else{
        alert("INTRUDER ALERT!!!! Try again.")
    }
}