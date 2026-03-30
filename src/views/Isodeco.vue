<script setup>
    import PageWrapper from '../components/PageWrapper.vue'
    import SimpleCard from '../components/SimpleCard.vue'

    import headerimage from '../assets/isodeco/isodeco_header.png'
    import isodeco_logo from '../assets/isodeco/isodeco_logo.png'

    import website_old from '../assets/isodeco/isodeco_website_old.png'
    import website_new from '../assets/isodeco/isodeco_website_new.png'

    const description = ["Mijn aanpak is gebaseerd op visuele ontwerp principes. Door deze principes strategisch toe te passen, heb ik een duidelijke structuur, consistente vormgeving en een optimale gebruikerservaring ontwikkeld. Het uiteindelijke concept is niet alleen visueel sterker, maar sluit ook beter aan op de behoeften van de gebruiker."];

    const additional_cards = [
        {
            title: "Header",
            body: "De huidige header bevat veel elementen die om aandacht van de klant vragen. Hierdoor mist de eerste indruk een duidelijke focus.",
            suggestions: [
                "De header over de volledige breedte plaatsen voor meer visuele impact.",
                "Een krachtige headline toevoegen die direct vertelt wat IsoDeco doet.",
                "Een duidelijke call‑to‑action toepassen, zoals “Ontdek onze wandpanelen” of “Vraag samples aan”."
            ]
        },
        {
            title: "Nieuwsbrief inschrijving",
            body: "De nieuwsbrief stond op twee plekken, waarvan één nauwelijks opviel. Dit zorgde voor inconsistentie en onnodige stappen.",
            suggestions: [
                "Eén duidelijke, prominente inschrijfsectie creëren.",
                "Eventueel een pop-up tonen bij het openen van de website om inschrijvingen te stimuleren.",
                "Een invoerbalk toevoegen zodat gebruikers direct hun e-mailadres kunnen invullen zonder extra te klikken"
            ]
        },
        {
            title: "USP’s",
            body: "Tijdens de analyse ontdekte ik dat IsoDeco op verschillende plekken verschillende USP’s communiceert. Dit zorgt voor verwarring en een minder sterke merkidentiteit.",
            suggestions: [
                "Eén set kern‑USP’s bepalen en deze consistent op de landingspagina tonen.",
                "USP’s kort, krachtig en visueel ondersteunen (bijv. iconen).",
                "Een duidelijke call‑to‑action toepassen, zoals “Ontdek onze wandpanelen” of “Vraag samples aan”."
            ]
        },
        {
            title: "Sectie ‘Mooie wandpanelen’",
            body: "Deze sectie bevat veel informatie en neemt een groot deel van de landingspagina in beslag waardoor gebruikers veel moeten scrollen.",
            suggestions: [
                "Tekst opdelen in kleinere blokken die gebruikers snel kunnen scannen.",
                "De product eigenschappen verwerken in drop down button.",
                "Maak van het inspiratie blok een aparte sectie."
            ]
        },
        {
            title: "Klanten laten inspireren",
            body: "De landingspagina toont pas inspiratie nadat de gebruiker ergens op klikt, waarna de inspiratie helemaal onderaan de pagina pas te zien is.",
            suggestions: [
                "Inspiratie direct zichtbaar maken zonder dat de gebruiker eerst hoeft te klikken.",
                "Een slide show of galerij tonen met voorbeelden van klant projecten.",
                "Laat voorbeelden zien van hoe klanten de wanddecoratie hebben toegepast."
            ]
        }
    ]


</script>


<template>
    <PageWrapper :image="headerimage" :logo="isodeco_logo" organisation="IsoDeco" work="Website-ontwerp"
        side_description="IsoDeco vroeg om advies voor het optimaliseren van hun landingspagina. Tijdens mijn analyse heb ik gekeken naar de structuur, content-hiërarchie, visuele rust en conversie‑elementen. Op basis van deze bevindingen heb ik een nieuw ontwerp gemaakt dat de merkidentiteit versterkt en de gebruiker sneller naar de juiste actie leidt."
        :description="description">

        <div class="grid grid-cols-2 gap-10">
            <SimpleCard title="Huidige website">
                <img :src="website_old" class="mx-auto shadow" loading="lazy">
            </SimpleCard>

            <SimpleCard title="Mijn ontwerp">
                <img :src="website_new" class="mx-auto shadow" loading="lazy">
            </SimpleCard>
        </div>

        <div class="grid grid-cols-2 gap-10">
            <SimpleCard v-for="entry in additional_cards" :title="entry.title">
                <p>
                    {{entry.body}}
                </p>
                <p class="mt-4">
                    <b>Aanbevelingen:</b>
                </p>
                <ul class="list-none pl-2 mt-0">
                    <li v-for="suggestion in entry.suggestions" class="flex before:content-['·'] before:mr-2 before:shrink-0">
                        {{suggestion}}
                    </li>
                </ul>
            </SimpleCard>

        </div>
    </PageWrapper>
</template>