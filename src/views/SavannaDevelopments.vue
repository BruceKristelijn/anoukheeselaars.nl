<script setup>
import PageWrapper from '../components/PageWrapper.vue'
import SimpleCard from '../components/SimpleCard.vue'
import headerimage from '../assets/savannadevelopments/savannadevelopments_header.png'

// Ads
import showcase1 from '../assets/savannadevelopments/savannadevelopments_showcase1.png'
import showcase2 from '../assets/savannadevelopments/savannadevelopments_showcase2.png'
import showcase3 from '../assets/savannadevelopments/savannadevelopments_showcase3.png'

// Logo
import mijn_werk_savannadevelopments_logo from '../assets/mijn_werk_savannadevelopments_logo.png'

const showcases = [{
    image: showcase1,
    title: "Logo design",
    organisation: "Savanna Developments",
    text: ["Het logo van Savanna Developments bestaat uit de tekst 'Savanna Developments' met daarnaast een afbeelding van een boom met kleurrijke bladeren in de kleur roze die overloopt naar de kleur paars.", "Het ontwerp is stijlvol en modern, met een opvallende en vrolijke kleurenschema. De boom kan een symbolische betekenis hebben en het logo weerspiegelt de identiteit en missie van het bedrijf."]
},
{
    image: showcase2,
    title: "Brochure",
    organisation: "Savanna Developments",
    text: "Savanna Developments richt zich naast het ontwikkelen van games ook op de virtuele realiteit (VR). Dit betekent dat ze ook VR-toepassingen en -ervaringen ontwikkelen en aanbieden. Als onderdeel hiervan kan Savanna Developments worden gevraagd om op beurzen te staan en te vertellen over hun VR-producten en -diensten aan potentiële klanten."
},
{
    image: showcase3,
    title: "Logo design",
    organisation: "Jungle Play",
    text: ["Jungle Play is een onderdeel van Savanna Developments dat zich richt op het ontwikkelen en uitbrengen van hyper casual games voor de Play Store en andere app-stores.", "Het logo van Jungle Play heeft een groen-oranje kleurenschema dat past bij het speelse van de games en het junglethema van het logo. "]
}]
</script>


<template>
    <PageWrapper :image="headerimage" :logo="mijn_werk_savannadevelopments_logo" organisation="Savanna Developments" work="Merkidentiteit" side_description="Savanna Development is een softwareontwikkelaar die games maakt voor een brede doelgroep. Ze gebruiken hun diepe kennis van techniek en design om games te creëren die aantrekkelijk, uitdagend en gebruiksvriendelijk zijn voor spelers van alle leeftijden en achtergronden. " description="Savanna Developments richt zich op het ontwikkelen van games voor verschillende platformen, waaronder pc, virtual reality en mobiel. Ze maken gebruik van de nieuwste technologieën om hun games visueel indrukwekkend en soepel te laten spelen. Savannah Developments streeft ernaar om games te maken die voldoen aan de hoogste kwaliteitsnormen en die spelers een onvergetelijke ervaring bieden.">

        <SimpleCard>
            <div class="flex flex-col gap-10">
                <div v-for="showcase in showcases" class="grid grid-cols-2">
                    <div class="pr-20">
                        <img :src="showcase.image" class="rounded-xl">
                    </div>
                    <div>
                        <p class="text-[17px] mb-2">
                            <strong>{{ showcase.title }}</strong> {{ showcase.organisation }}
                        </p>
                        <p v-if="Array.isArray(showcase.text)" v-for="text in showcase.text" class="mb-3">
                            {{ text }}
                        </p>
                        <p v-else>
                            {{ showcase.text }}
                        </p>
                    </div>                    
                </div>
            </div>
        </SimpleCard>

    </PageWrapper>
</template>