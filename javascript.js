

const generateMusician = async () => {
    const content = document.getElementById('content')
    content.innerHTML = await loadPage('musician.html')
}

const generateDeveloper = async () => {
    const content = document.getElementById('content')
    content.innerHTML = await loadPage('developer.html')
}


const loadPage = async (page) => {
    const content = await (await fetch(page)).text()
    return content
}

const musicianButton = document.getElementById('musician-button')
musicianButton.addEventListener('click', generateMusician)

const developerButton = document.getElementById('developer-button')
developerButton.addEventListener('click', generateDeveloper)

generateMusician()