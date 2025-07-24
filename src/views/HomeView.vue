<script setup>
    import anouk_heeselaars_home_foto from '../assets/anouk_heeselaars_home_foto.png'

</script>

<template>
    <header class="grid grid-cols-5 p-20 gap-5">
        <div class="w-full col-span-3 flex content-around justify-evenly">
            <h2>Hey! Ik ben</h2>
            <h1>Anouk</h1>
            <p>Door mijn specialisatie Human-Centered Design ben ik gedoken in de wereld van Visual Design. Ik vind het heel interessant om bezig te zijn met het User interface design van zowel online platformen als apps. </p>
            <button class="btn">Contact</button>
        </div>
        <div class="w-full col-span-2">
            <img :src="anouk_heeselaars_home_foto">
        </div>
    </header>
</template>

<style scoped>
header {
    backdrop-filter: blur(15.407272338867188px);
    box-shadow: 0px 0px 18.65px 4.05px #0000000F;
    background: #FFFFFF1F;
    border-radius: 13px;
}

h1, h2{
    
  font-family: 'Poppins';
}
</style>