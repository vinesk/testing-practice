import Header from './components/header'
import Main from './components/main'
import Aside from './components/aside'
import Section from './components/section'
import Footer from './components/footer'
import './styles/main.css'

// Création du conteneur principal
const app = document.createElement('div')
app.id = 'app'

// Ajout des composants à l'application
app.appendChild(Header())

// Création et ajout de la section principale
const mainContent = Main()
const mainSection = Section()
mainSection.innerText = 'Contenu principal de la section' // Texte exemple pour la section dans main
mainContent.appendChild(mainSection) // Ajoute la section au contenu principal
app.appendChild(mainContent)

// Création et ajout de la section secondaire
const asideContent = Aside()
const asideSection = Section()
asideSection.innerText = 'Contenu secondaire de la section' // Texte exemple pour la section dans aside
asideContent.appendChild(asideSection) // Ajoute la section au contenu secondaire
app.appendChild(asideContent)

app.appendChild(Footer())

// Ajout de l'application au corps de la page
document.body.prepend(app)
