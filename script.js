const gridSize = document.querySelector(".gridSize")

gridSize.addEventListener("click", (e) => { 

    const container = document.querySelector("#container");
    container.innerHTML = "";

    let userInput = Number(prompt("Entrer une taille de grille : "));
    console.log(`userinput: ${userInput}`);

    let taille = `${userInput * 20}px`;
    console.log(`taille = ${taille}`);

    container.style.width = taille
    container.style.height = taille

    for (let i = userInput * userInput; i > 0; i--) {
        console.log(`userInput dans boucle while: ${i}`);

        const carre = document.createElement("div");
        carre.classList.add("test");
        carre.addEventListener("mouseenter", (e) => { e.target.style.filter += "brightness(90%)"});

        container.appendChild(carre);
    };

});