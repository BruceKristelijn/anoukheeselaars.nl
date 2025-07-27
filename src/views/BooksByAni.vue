<script setup>
    import PageWrapper from '../components/PageWrapper.vue'
    import SimpleCard from '../components/SimpleCard.vue'
    import headerimage from '../assets/booksbyani/booksbyani_header.png'

    import screens from '../assets/zab/zal_screens.png'
    import screen1 from '../assets/zab/zab_welcomescreen.png'

    // Logo
    import mijn_werk_booksbyani_logo from '../assets/mijn_werk_booksbyani_logo.png'

    // Showcases
    import showcase1 from '../assets/booksbyani/booksbyani_showcase1.png'
    import showcase2 from '../assets/booksbyani/booksbyani_showcase2.png'
    import showcase3 from '../assets/booksbyani/booksbyani_showcase3.png'
</script>


<template>
    <PageWrapper :image="headerimage" :logo="mijn_werk_booksbyani_logo" organisation="Books by Ani"
        work="Concept voorstel"
        side_description="Books by Ani is een bedrijf waar vooral moeders een maandelijks abbonnement kunnen aanschaffen om elke drie maanden een pakket met 3 voorleesboeken in de brievenbus te ontvangen voor hun kind(eren). "
        description="Het is aan ons de taak om een multimedia plan te bedenken wat voor meer zichtbaarheid/naamsbekendheid zorgt, zodat Books By Ani meer leden krijgt en dus meer boekenpakketten verkoopt. Hierbij is een grote wens dat de (ervaringen van) bestaande klanten bijdragen aan de promotie. Daarnaast wil Books By Ani haar community versterken door het mogelijk maken van meer interactie.">


        <SimpleCard title="Concept">
            <p>
                Het concept genaamd Ani's Adventure neemt kinderen mee op een leuke en leerzame reis naar verschillende
                landen en culturen. Elke maand staat een ander land centraal, waardoor kinderen een jaar lang kennis
                kunnen maken met verschillende delen van de wereld. Ani, de hoofdpersoon, is degene die de communicatie
                tussen Books By Ani en het kind verzorgt en daardoor een gezicht is voor de kinderen tijdens de reis.
                Als het concept een succes blijkt te zijn, kan de formule opnieuw worden ingezet met 12 andere landen.
            </p>
            <p class="my-10">
                Ani speelt een belangrijke rol in het concept en dient daarom prominent in beeld te worden gebracht.
                Door haar als communicatiemiddel in te zetten tussen Books By Ani en de kinderen, wordt de interactie
                tussen de twee partijen vergemakkelijkt en verlevendigd. Hierdoor is het voor een kind prettiger om naar
                een bekend gezicht te luisteren wanneer er bijvoorbeeld een opdracht of nieuwsbrief wordt
                gepresenteerd.​
            </p>
            <div class="flex flex-col gap-10">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="md:pr-20">
                        <img :src="showcase1" class="rounded-xl">
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-[17px] mb-2">
                            <strong>Books by Ani Box</strong>
                        </p>
                        <p>
                            Naast dat de boxen dienen als opberg doos kunnen kinderen er ook voor sparen. Op de achterkant van elke box zit namelijk een deel van een puzzel. Zodra kinderen elke naeen komende maand een box ontvangen, vormt dat uiteindelijk een complete puzzel van Ani met haar vriendjes.
                        </p>
                    </div>
                </div>
            </div>
        </SimpleCard>

        <SimpleCard title="Vernieuwde Instagram feed">
            <div class="flex flex-col gap-10">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="md:pr-20">
                        <img :src="showcase2" class="rounded-xl">
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-[17px] mb-2">
                            <strong>Door ons aanbevolen</strong>
                        </p>
                        <p class="mb-2">
                            De oude Instagram feed had een gebrek aan visuele consistentie door het gebruik van verschillende lettertypes. Bovendien werd slechts één kleur gebruikt, waardoor de feed niet aantrekkelijk was voor de doelgroep. 
                        </p>
                        <p>
                            Het nieuwe ontwerp maakt gebruik van een consistent lettertype en een breder kleurenpalet, om de feed aantrekkelijker te maken voor de doelgroep en zodoende een grotere aantrekkingskracht te hebben.
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="md:pr-20">
                        <img :src="showcase3" class="rounded-xl">
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-[17px] mb-2">
                            <strong>Hoe Books By Ani de feed zelf heeft toegepast</strong>
                        </p>
                        <p class="mb-2">
                            Het is positief om te zien dat Books By Ani onze aanbevelingen heeft meegenomen in hun nieuwe Instagram feed. Het is positief om te zien dat Books by Ani onze aanbevelingen heeft meegenomen in hun nieuwe Instagram feed. Het geeft aan dat ze de aanbevelingen van het team waarderen zodat ze een aantrekkelijke feed kunnen creëren voor de doelgroep. Het zou ook interessant zijn om te weten of er specifieke verbeteringen zijn waargenomen door de doelgroep als gevolg van de aangepaste Instagram feed.
                        </p>
                    </div>
                </div>
            </div>
        </SimpleCard>

    </PageWrapper>
</template>