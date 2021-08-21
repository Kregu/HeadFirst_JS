function changeHTML () {
    var planet = document.getElementById("redplanet");
    console.log(planet.innerHTML)
    console.log(planet.outerHTML)
    planet.innerHTML = "Что то стало 2"

    planet.setAttribute ("class", "redtext")
    console.log(planet.innerHTML)
    console.log(planet.outerHTML)
}
changeHTML()

