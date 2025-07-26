<script setup>
import PageWrapper from '../components/PageWrapper.vue'
import SimpleCard from '../components/SimpleCard.vue'
import headerimage from '../assets/zab/zab_header.png'

import screens from '../assets/zab/zal_screens.png'
import screen1 from '../assets/zab/zab_welcomescreen.png'

// Logo
import mijn_werk_zab_logo from '../assets/mijn_werk_zab_logo.png'

const description = ["Tijdens de specialisatie Human-Centered Design kregen wij de opdracht om voor ZAB. een digitale touchpoint te creëren op basis van de user needs die gegeven zijn. Ik richt mij op het creëren van een gebruiksvriendelijke en waardevolle ervaring voor de gebruikers van ZAB. diensten.", "ZAB. heeft als belangrijkste doel om klanten op een zeer persoonlijke manier te helpen. Mede doordat alles digitaal is, zijn er geen klantcontacten via face to face of telefoongesprekken mogelijk. Maar ZAB. wil juist het persoonlijke terugbrengen in hun digitale omgeving ZAB. richt zich op de jong volwassenen, millennials, die eigenlijk alles al digitaal regelen."];

const table_entries = [
    "Mindmapping", "Een visueel diagram of kaart dat wordt gebruikt om ideeën, concepten en informatie te organiseren en te visualiseren.",
    "Persona's", "Fictieve personen die representatief zijn voor een doelgroep.",
    "Concurrentieanalyse", "Informatie verzamelen over de sterktes en zwaktes van de concurrentie over eigen producten of diensten en om te bepalen hoe het bedrijf zich kan onderscheiden van de concurrentie.",
    "Customer journey map", "Een visualisatie van de stappen die een klant doorloopt tijdens het gebruik van een product of dienst.",
    "Crazy 8", "Een snelle manier om veel verschillende ideeën te genereren voor een bepaald ontwerp probleem."
]

</script>


<template>
    <PageWrapper :image="headerimage" :logo="mijn_werk_zab_logo" organisation="ZAB." work="App-ontwerp" 
        side_description="Tijdens de specialisatie Human-Centered Design kregen wij de opdracht om voor ZAB. een digitale touchpoint te creëren op basis van de user needs die gegeven zijn. Ik richt mij op het creëren van een gebruiksvriendelijke en waardevolle ervaring voor de gebruikers van ZAB. diensten." 
        :description="description">

        <SimpleCard>
            <div class="w-full flex flex-row">
                <img  class="flex-grow" :src="screens">
                <img :src="screen1">
            </div>
        </SimpleCard>

        <SimpleCard title="Toelichting en onderzoek">
            <p class="mb-5">
                Door Sep toe te voegen, biedt ZAB aangepaste hulp aan klanten die de hulp nodig hebben, wat de indruk geeft dat de hulp wordt verleend door een echte medewerker van het bedrijf. Sep is een chatbot en een vorm van kunstmatige intelligentie die is ontwikkeld om klanten te helpen op een persoonlijke manier.
            </p>
            <p class="mb-5">
                We hebben ook verschillende prototypes ontwikkeld om te testen hoe Sep zou functioneren en om te zien hoe deze zou aansluiten bij de behoeften van klanten. Door de onderstaande methoden en technieken te gebruiken, hebben wij voor ZAB een prototype kunnen ontwikkelen die persoonlijke hulp biedt aan klanten op een effectieve en efficiënte manier.
            </p>
            <p class="mb-5">
                Om tot deze oplossing te komen, heb ik samen met mijn projectpartner een aantal verschillende ontwerpmethoden en -technieken gebruikt, die zijn hieronder te vinden:
            </p>
            <div class="bg-[#F8F8F8] p-10 rounded-xl grid grid-cols-3">
                <div v-for="(entry, index) in table_entries" class="mb-2" :class="{ 'col-span-2': index % 2 === 1 }">
                    <div>
                        <p v-if="index % 2 === 0">
                            <strong>{{ entry }}</strong>
                        </p>
                        <p v-else>
                            {{ entry }}
                        </p>
                    </div>
                </div>
            </div>
        </SimpleCard>

    </PageWrapper>
</template>