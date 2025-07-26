<script setup>
    import PageWrapper from '../components/PageWrapper.vue'
    import SimpleCard from '../components/SimpleCard.vue'
    import headerimage from '../assets/nrv/nrv_header.png'

    import screens from '../assets/zab/zal_screens.png'
    import screen1 from '../assets/zab/zab_welcomescreen.png'

    // Logo
    import mijn_werk_nrv_logo from '../assets/mijn_werk_nrv_logo.png'

    // Showcases
    import prototype1 from '../assets/nrv/nrv_prototype1.mp4'
    import prototype2 from '../assets/nrv/nrv_prototype2.mp4'
    import prototype3 from '../assets/nrv/nrv_prototype3.mp4'

    // Old
    import old1 from '../assets/nrv/nrv_old1.mp4'
    import old2 from '../assets/nrv/nrv_old2.png'

</script>


<template>
    <PageWrapper :image="headerimage" :logo="mijn_werk_nrv_logo" organisation="NRV" work="Afstudeer opdracht"
        side_description="Voor mijn afstudeerproject werkte ik aan de optimalisatie van het boekingsproces van de privéreizen-pagina’s. Dit is een proces dat wat meer aandacht vereist, omdat je als klant bij het boeken van een privéreis veel keuzes moet maken en voorkeuren kunt uitkiezen."
        description="Bij NRV begrijpen ze dat het soms lastig kan zijn om de juiste reis te vinden die aansluit bij de specifieke wensen van hun potentiële klanten. Met hun uitgebreide reisaanbod willen ze hun klanten helpen eenvoudig te oriënteren op hun ideale reiservaring. Daarom is een logische flow op de website en een duidelijk soepel boekingsproces absoluut essentieel voor het succes van NRV. Ze zijn hun site in fases aan het vernieuwen, zo hebben ze al een deel van de pagina’s van de groepsreizen omgebouwd naar een nieuw en mobile-friendly design.">

        <SimpleCard title="Uiteindelijk prototype">
            <div class="flex flex-col gap-10">
                <div class="grid grid-cols-2">
                    <div class="pr-20 flex flex-col justify-center">
                        <video class="rounded-xl" :src="prototype1" autoplay></video>
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-[17px] mb-2">
                            <strong>Transparantie</strong>
                        </p>
                        <p>
                            Binnen de communicatie en interacties met de doelgroep staat transparantie centraal. Klanten
                            krijgen eerlijke, duidelijke en overzichtelijke informatie over onder andere de prijzen,
                            opties en voorwaarden.
                        </p>
                        <p class="mt-2">
                            Dit principe moet ervoor zorgen dat gebruikers vertrouwen hebben in het bedrijf, zodat ze
                            weten waar ze voor kiezen en wat ze kunnen verwachten van de reis die ze willen boeken.
                            Hiernaast is te zien hoe dit er in de praktijk uit zou zien.
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="pr-20 flex flex-col justify-center">
                        <video class="rounded-xl" :src="prototype2" autoplay></video>
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-[17px] mb-2">
                            <strong>Gepersonaliseerd gemak</strong>
                        </p>
                        <p>
                            In combinatie met de mogelijkheden binnen het boekingsproces en de unieke wensen van de
                            klant, is dit een belangrijk principe. Door persoonlijke voorkeuren centraal te stellen,
                            kunnen klanten zelf hun reis aanpassen naar hun behoeften. 
                        </p>
                        <p class="mt-2">
                            Hiernaast is te zien hoe de klanten hun vlucht kunnen personaliseren. Zo kunnen ze hun
                            voorkeuren uitkiezen en zien ze gelijk wat voor invloed dit heeft op de totaalprijs van de
                            reis.
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="pr-20 flex flex-col justify-center">
                        <video class="rounded-xl" :src="prototype3" autoplay></video>
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-[17px] mb-2">
                            <strong>Focus gemak</strong>
                        </p>
                        <p>
                            Alle content, visuals en interacties moeten direct bijdragen aan het behalen van het doel
                            waar de pagina voor dient. Vermijd content die van dit doel kunnen afleiden. In dit geval
                            als voorbeeld de bon, die pas zichtbaar wordt zodra je erop klikt.
                        </p>
                        <p class="mt-2">
                            In het oude design liep de bon enorm op en dit nam ook veel ruimte in beslag op de pagina.
                            Hierdoor werd de pagina al snel overweldigend.
                        </p>
                    </div>
                </div>
            </div>
        </SimpleCard>

        <SimpleCard title="Oude user interface">
            <p class="mb-5">
                Alle content, visuals en interacties moeten direct bijdragen aan het behalen van het doel waar de pagina
                voor dient. Vermijd content die van dit doel kunnen afleiden. In dit geval als voorbeeld de bon, die pas
                zichtbaar wordt zodra je erop klikt.
            </p>
            <div class="flex flex-col gap-10">
                <div class="grid grid-cols-2">
                    <div class="pr-20">
                        <video class="rounded-xl" :src="old1" autoplay></video>
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-[17px] mb-2">
                            <strong>Door ons aanbevolen</strong>
                        </p>
                        <p class="mb-2">
                            De hoeveelheid informatie in de eerste stap van de boeking wizard wordt als overweldigend
                            ervaren. Gebruikers besteden hier rond de 10 minuten aan het doorlezen van de extra
                            informatie die onder de keuzes wordt weergegeven, wat het boekingsproces aanzienlijk
                            vertraagt. De reden dat zij deze informatie doornemen, is om er zeker van te zijn dat ze
                            alle mogelijke keuzes op deze pagina hebben gemaakt. Dit wijst op behoefte aan een beter
                            gestructureerde en minder overweldigende interface. 
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-2">
                    <div class="pr-20">
                        <img :src="old2" class="rounded-xl">
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-[17px] mb-2">
                            <strong>Vorige pagina</strong>
                        </p>
                        <p class="mb-2">
                            Elke stap in het proces, bevindt zich op een aparte pagina. Wanneer ze bijvoorbeeld na het
                            kiezen van een auto alsnog een andere vertrekdatum willen selecteren, moeten ze het hele
                            proces opnieuw doorlopen. Dit zorgt voor frustratie.
                        </p>
                        <p>
                            Elke stap in het proces, bevindt zich op een aparte pagina. Wanneer ze bijvoorbeeld na het
                            kiezen van een auto alsnog een andere vertrekdatum willen selecteren, moeten ze het hele
                            proces opnieuw doorlopen. Dit zorgt voor frustratie.
                        </p>
                    </div>
                </div>
            </div>
        </SimpleCard>

    </PageWrapper>
</template>

<style scoped>
img, video {
    box-shadow: 0px 3.45px 3.45px 0px #0000000D;
}
</style>