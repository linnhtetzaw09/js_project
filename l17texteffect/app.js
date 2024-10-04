const languages = ["Nodejs", "Reactjs", "Vuejs", "Laravel"];
const colors = ["red", "steelblue", "skyblue", "yellow"];
const gettextanime = document.querySelector(".textanime");
const gettextlights = document.querySelectorAll(".text-light");  //nodelist


function* generator() {
    var idx = 0;

    while (true) {
        yield idx++;

        if (idx > 3) {
            idx = 0;
        }
    }
}

const testnumber = generator();

function showwords(word) {
    let x = 0;
    gettextanime.innerHTML = "";
    gettextanime.classList.add(colors[languages.indexOf(word)]);

    let showinterval = setInterval(function () {
        if (x >= word.length) {
            clearInterval(showinterval);
            deletewords();
        } else {
            gettextanime.innerHTML += word[x];
            x++;
        }
    }, 200);
}

function deletewords() {
    let getword = gettextanime.innerHTML;
    let getlastidx = getword.length - 1;

    let delinterval = setInterval(function () {
        if (getlastidx >= 0) {
            gettextanime.innerHTML = gettextanime.innerHTML.substring(0, gettextanime.innerHTML.length - 1);
            getlastidx--;
        } else {
            gettextanime.classList.remove(colors[languages.indexOf(getword)]);
            showwords(languages[testnumber.next().value]);
            clearInterval(delinterval);
        }
    }, 200);
}

showwords(languages[testnumber.next().value]);


gettextlights.forEach(function(textlight) {
    let arrayTexts = textlight.textContent.split(""); // Split the text content of each element
    console.log(arrayTexts);

    textlight.textContent = ""; // Clear the text content of the current element

    arrayTexts.forEach(function(text, idx) {
        let newEm = document.createElement('em');
        newEm.textContent = text;

        // Add animation delay
        newEm.style.animationDelay = `${idx * 0.5}s`;

        // Append the newly created <em> element to the current element
        textlight.append(newEm);
    });
});
