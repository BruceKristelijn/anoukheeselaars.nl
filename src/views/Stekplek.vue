<script setup>
    import PageWrapper from '../components/PageWrapper.vue'
    import SimpleCard from '../components/SimpleCard.vue'
    import headerimage from '../assets/nrv/nrv_header.png'

    import screens from '../assets/zab/zal_screens.png'
    import screen1 from '../assets/zab/zab_welcomescreen.png'

    // Logo
    import mijn_werk_stekplek_logo from '../assets/mijn_werk_ui_ux_stepplek_logo.png'

    // Prototypes
    import prototype1 from '../assets/stekplek/stekplek_prototype1.png'
    import prototype2 from '../assets/stekplek/stekplek_prototype2.png'

    // Final prototype
    import final1 from '../assets/stekplek/stekplek_finalprototype1.mp4'
    import final2 from '../assets/stekplek/stekplek_finalprototype2.mp4'
    import final3 from '../assets/stekplek/stekplek_finalprototype3.mp4'

    const description = ["StekPlek wil freelancers graag een handje helpen want als freelancer kan het nogal moeilijk zijn om grote opdrachten aan te nemen. Niet iedereen heeft de kennis om het gehele spectrum van een opdracht uit te voeren. Stel de freelancer neemt de opdracht wel aan, dan moet een opdrachtgever zelf nog opzoek naar bijvoorbeeld een developer om het ontwerp van de freelancer te bouwen.", "Dit kan een hoop hoofdpijn en miscommunicatie veroorzaken voor zowel de freelancer als de opdrachtgever. StekPlek wil daarom graag een platform bouwen waar freelancers kunnen netwerken, hun opdrachten kunnen delen en de kennis kunnen overbrengen die anderen wellicht niet hebben. Op die manier kan je als freelancer goede kwaliteit leveren die je wilt leveren en andere freelancers leren kennen die jou ook kunnen helpen bij toekomstige opdrachten. De opdracht was om het eerste concept op te leveren van dit netwerkplatform waar freelancers samen kunnen werken, kunnen netwerken en hun kennis over te kunnen brengen."]
    const final_prototypes = [
        {
            video: final1,
            title: "Landingspagina",
            text: [
                "Dit is de pagina waar de gebruiker terechtkomt als hij of zij niet is ingelogd. Rechts bovenin bevindt zich een optie om aan te melden. Op de landingspagina is ook te zien hoe het platform eruitziet wanneer je bent ingelogd.",
                "Gebruikers kunnen gratis een account aanmaken. We hebben de beslissing over de betaalstructuur open gelaten voor de opdrachtgever. Een mogelijkheid is bijvoorbeeld om extra kosten te vragen voor bepaalde functies, zoals de Teams-optie die hieronder wordt weergegeven."
            ]
        },
        {
        
            video: final2,
            title: "Teams pagina",
            text: [
                "Dit is de pagina waar freelancers met elkaar kunnen communiceren, bestanden kunnen delen, agenda-items per team kunnen aanmaken en videobellen.",
                "Elk aangemaakt team krijgt een eigen kleur, waardoor de verschillende teams gemakkelijk te onderscheiden zijn. Dit is vooral handig in het meldingen venster en in de agenda."
            ]
        },
        {
            video: final3,
            title: "Portfolio",
            text: "Hier zie je hoe je als freelancer werk kunt uploaden op je profiel. Op je profiel kun je aangeven of je beschikbaar bent voor werk, welke programma’s je gebruikt, je vaardigheden en een uitleg over je werkwijze."
        }
    ]
</script>


<template>
    <PageWrapper :image="headerimage" :logo="mijn_werk_stekplek_logo" organisation="NRV" work="Afstudeer opdracht"
        side_description="StekPlek is een creatief media, communicatie & ontwerpbureau die eigen kennis en passie combineert, om ideeën te realiseren. Voor dit bedrijf hebben mijn team en ik door middel van onderzoek een prototype ontwikkeld."
        :description='description'>

        <SimpleCard title="Prototypes">
            <div class="flex flex-col gap-10">
                <p>
                    Samen met het team hebben we verschillende prototypes ontwikkeld, waarvan er twee zijn getest bij de
                    doelgroep door middel van een co-creatie. Uit de tests bleek dat de voorkeur van de doelgroep
                    uitging naar een website met een navigatiebalk aan de linkerkant van het scherm in plaats van
                    bovenaan. De doelgroep gaf aan dat op deze manier alle opties gemakkelijk binnen handbereik zijn.
                    Een nadeel van een navigatiebalk bovenaan het scherm is dat niet alle opties kunnen worden
                    weergegeven vanwege de beperkte ruimte. Een navigatiebalk aan de linkerkant biedt meer ruimte en is
                    gemakkelijker in gebruik. Vanuit dit onderzoek zijn we de rechter variant hier onder verder gaan
                    uitwerken.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-20 p-4">
                    <img :src="prototype1" class="shadow">
                    <img :src="prototype2" class="shadow">
                </div>
            </div>
        </SimpleCard>

        <SimpleCard title="Uiteindelijk prototype">
            <div class="flex flex-col gap-10">
                <div v-for="prototype in final_prototypes" class="grid grid-cols-1 lg:grid-cols-2">
                    <div class="lg:pr-20">
                        <video :src="prototype.video" class="rounded-xl shadow" autoplay></video>
                    </div>
                    <div class="flex flex-col justify-center mt-10 lg:mt-0">
                        <p class="text-[17px] mb-2">
                            <strong>{{ prototype.title }}</strong>
                        </p>
                        <p v-if="Array.isArray(prototype.text)" v-for="text in prototype.text" class="mb-3">
                            {{ text }}
                        </p>
                        <p v-else>
                            {{ prototype.text }}
                        </p>
                    </div>                    
                </div>
            </div>
        </SimpleCard>

        <SimpleCard title="Concept">
            <div class="flex flex-col gap-10">
                <p>
                    Als team hebben wij het volgende concept bedacht. De opdrachtgever wil een platform waar freelancers samen kunnen komen en alles binnen handbereik hebben. Stel je bent een UI-designer en je vindt een opdracht voor het maken van een website. Het ontwerp maken lukt je wel, maar het zou handig zijn als een developer de website werkend kan maken. Op dat moment kun je via dit platform op zoek gaan naar een webdeveloper die samen met jou de opdracht wil oppakken. Op deze manier creëer je een team en werk je samen met andere freelancers.
                </p>
                <p>
                    Opdrachtgevers kunnen hun opdrachten eenvoudig op het platform plaatsen. Daarnaast kunnen zij zelf op zoek gaan naar geschikte freelancers om de opdracht uit te voeren. Het platform werkt dus in beide richtingen, waardoor zowel opdrachtgevers als freelancers elkaar gemakkelijk kunnen vinden.
                </p>
            </div>
        </SimpleCard>

    </PageWrapper>
</template>

<style scoped>
    .shadow {
        box-shadow: 0px 3.45px 3.45px 0px #0000000D;
    }
</style>