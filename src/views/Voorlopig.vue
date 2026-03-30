<script setup>
    import PageWrapper from '../components/PageWrapper.vue'
    import SimpleCard from '../components/SimpleCard.vue'

    import headerimage_sm from '../assets/voorlopig/voorlopig_header.png?width=400&format=webp'
    import headerimage_md from '../assets/voorlopig/voorlopig_header.png?width=800&format=webp'
    import headerimage_lg from '../assets/voorlopig/voorlopig_header.png?width=1200&format=webp'
    import headerimage_xl from '../assets/voorlopig/voorlopig_header.png?width=1800&format=webp'

    import logoimage from '../assets/voorlopig/voorlopig_logo.png'
    import old1image from '../assets/voorlopig/voorlopig_old1.png'
    import old2image from '../assets/voorlopig/voorlopig_old2.png'
    import newimage from '../assets/voorlopig/voorlopig_new.png'

    const headerimages = {
        sm: headerimage_sm,
        md: headerimage_md,
        lg: headerimage_lg,
        xl: headerimage_xl,
    }

</script>


<template>
    <PageWrapper :images="headerimages" :logo="logoimage" organisation="Voorlopig" work="Website-ontwerp"
        side_description="Voorlopig is een excentrieke winkel waar je in elke hoek verrast wordt door de kleurrijke unieke producten die ze verkopen. Het assortiment bestaat uit creatieve en eigenzinnige producten, waardoor de winkel een inspirerende en kleurrijke sfeer uitstraalt."
        description="Hoewel de winkel Voorlopig juist gekenmerkt wordt door kleur, creativiteit en een speelse uitstraling, komt dit nauwelijks terug in de huidige website. Deze is voornamelijk wit en informatief ingericht. Hierdoor komt de unieke identiteit van de winkel niet naar voren. Vanuit eigen initiatief ben ik aan de slag gegaan met het ontwerpen van een nieuwe website waarin kleur, dynamiek en visuele prikkels centraal staan. Mijn doel was om de online beleving meer aan te laten sluiten bij de sfeer van de winkel. ">

        <div class="grid grid-cols-2 gap-10">
            <SimpleCard title="Before">
                <img :src="old1image" class="mx-auto shadow mb-5 w-full" loading="lazy">
                <img :src="old2image" class="mx-auto shadow w-full" loading="lazy">
            </SimpleCard>

            <SimpleCard title="After">
                <img :src="newimage" class="mx-auto shadow w-full" loading="lazy">
            </SimpleCard>
        </div>

    </PageWrapper>
</template>