<script setup>
import PageWrapper from '../components/PageWrapper.vue'
import SimpleCard from '../components/SimpleCard.vue'
import headerimage from '../assets/irislearningsolutions/irislearningsolutions_header.png'
import logoimage from '../assets/irislearningsolutions/irislearningsolutions_logo.png'

import landingpage from '../assets/irislearningsolutions/irislearningsolutions_home.png'
import projectspage from '../assets/irislearningsolutions/irislearningsolutions_projects.png'

</script>


<template>
    <PageWrapper :image="headerimage" :logo="logoimage" organisation="Iris Learning solutions" work="Website-ontwerp" 
        side_description="Voor Iris Learning Solutions ontwierp ik een portfolio website die haar expertise als Adviseur Leren en Ontwikkelen helder, professioneel en persoonlijk presenteert. De site is opgebouwd rond haar visie op groei met een rustige, moderne vormgeving." 
        description="Naast een overzichtelijk dienstenaanbod biedt de website ruimte voor projecten, zodat bezoekers in één oogopslag zien welke trajecten Iris heeft begeleid en welke impact zij heeft gemaakt. Het resultaat is een gebruiksvriendelijke, toekomstbestendige portfolio­site die haar professionaliteit versterkt en haar helpt om nieuwe opdrachtgevers aan te trekken.">

        <div class="grid grid-cols-2 gap-10">
            <SimpleCard title="Landings pagina">
                <img :src="landingpage" class="mx-auto shadow w-full" loading="lazy">
            </SimpleCard>

            <SimpleCard title="Project pagina">
                <img :src="projectspage" class="mx-auto shadow w-full" loading="lazy">
            </SimpleCard>
        </div>

    </PageWrapper>
</template>