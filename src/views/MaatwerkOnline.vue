<script setup>
import PageWrapper from '../components/PageWrapper.vue'
import SimpleCard from '../components/SimpleCard.vue'
import headerimage from '../assets/maatwerkonline/maatwerkonline_headerimage.png'

// Abri's
import abri1 from '../assets/maatwerkonline/abris/maatwerkonline_abri_1.png'
import abri2 from '../assets/maatwerkonline/abris/maatwerkonline_abri_2.png'
import abri3 from '../assets/maatwerkonline/abris/maatwerkonline_abri_3.png'
import abri4 from '../assets/maatwerkonline/abris/maatwerkonline_abri_4.png'
import abri5 from '../assets/maatwerkonline/abris/maatwerkonline_abri_5.png'

// Slides
import slide1 from '../assets/maatwerkonline/slides/maatwerkonline_slides_1.png'
import slide2 from '../assets/maatwerkonline/slides/maatwerkonline_slides_2.png'
import slide3 from '../assets/maatwerkonline/slides/maatwerkonline_slides_3.png'
import slide4 from '../assets/maatwerkonline/slides/maatwerkonline_slides_4.png'
import slide5 from '../assets/maatwerkonline/slides/maatwerkonline_slides_5.png'
import slide6 from '../assets/maatwerkonline/slides/maatwerkonline_slides_6.png'
import slide7 from '../assets/maatwerkonline/slides/maatwerkonline_slides_7.png'
import slide8 from '../assets/maatwerkonline/slides/maatwerkonline_slides_8.png'
import slide9 from '../assets/maatwerkonline/slides/maatwerkonline_slides_9.png'

const loadShowcaseImage = async (imageName) => {
  try {
    const module = await import(`../assets/maatwerkonline/${imageName}?inline /* @vite-ignore */`)
    return module.default
  } catch (error) {
    console.warn(`Failed to load image: ${imageName}: ${error}`)
    return null
  }
}

const showcase1 = await loadShowcaseImage('Maatjes+logo+tekst_160x600.png?inline') /* @vite-ignore */
const showcase2 = await loadShowcaseImage('Maatjes+logo+tekst_300x600.png?inline') /* @vite-ignore */
const showcase3 = await loadShowcaseImage('Maatjes+logo+tekst_300x600-1.png?inline') /* @vite-ignore */
const showcase4 = await loadShowcaseImage('Maatjes+logo+tekst_300x250.png?inline') /* @vite-ignore */
const showcase5 = await loadShowcaseImage('Maatjes+logo+tekst_300x250-1.png?inline') /* @vite-ignore */
const showcase6 = await loadShowcaseImage('Maatjes+logo+tekst_728x90.png?inline') /* @vite-ignore */

// Logo
import mijn_werk_maatwerkonline_logo from '../assets/mijn_werk_maatwerkonline_logo.png'

const abris = [abri1, abri2, abri3, abri4, abri5];
const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9]
</script>


<template>
    <PageWrapper :image="headerimage" :logo="mijn_werk_maatwerkonline_logo" organisation="Maatwerk Online" work="Visual & UI/UX design" side_description="Maatwerk Online is gericht op alle aspecten van online marketing. Naast het ontwerpen van websites die perfect aansluiten bij de specifieke wensen van de klanten, zorgen ze voor een goede vindbaarheid van websites en optimaliseren ze voortdurend de conversieratio." description="Ook zijn ze betrokken bij het opzetten, beheren en optimaliseren van advertentiecampagnes, zoals Google AdWords en Facebook-campagnes. Daarnaast verlenen zij diensten met betrekking tot zoekmachine adverteren, zoekmachine optimalisatie, social media adverteren, conversieoptimalisatie, webdevelopment en Amazon marketing.">

        <SimpleCard title="Abri's">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row  justify-between">
                <img v-for="abri in abris" :src="abri" class="shadow">
            </div>
        </SimpleCard>

        <SimpleCard title="Re-design presentatie template">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
                <img v-for="slide in slides" :src="slide" class="slide shadow">
            </div>
        </SimpleCard>

        <SimpleCard title="Advertenties">
            <p v-if="showcase1 == null && showcase2 == null && showcase3 == null && showcase4 == null && showcase5 == null">
                De advertenties kunnen niet geladen worden. Dit kan komen door een eventuele adblocker.
            </p>
            <div class="flex flex-col md:grid md:grid-cols-10 justify-between gap-5">
                <div class="col-span-1 md:col-span-7 flex flex-col md:flex-row">
                    <img class="h-full object-cover p-1" :src="showcase1" />
                    <img class="h-full object-cover p-1" :src="showcase2" />
                    <img class="h-full object-cover p-1" :src="showcase3" />
                </div>
                <div class="md:ml-20 col-span-3">
                    <img class="object-cover p-1" :src="showcase4" />
                    <img class="object-cover p-1" :src="showcase5" />
                </div>
            </div>
            <img class="p-1" :src="showcase6">
        </SimpleCard>
    </PageWrapper>
</template>

<style scoped>
.slide {
    box-shadow: 0px 2.58px 11.2px 0px #0000001A;
}
</style>