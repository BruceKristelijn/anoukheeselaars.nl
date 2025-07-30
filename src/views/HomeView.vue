<script setup>
import { ref } from 'vue'

import MyWorkCard from '../components/MyWorkCard.vue'

// Header image
import anouk_heeselaars_home_foto from '../assets/anouk_heeselaars_home_foto.png'

// Work images
import mijn_werk_stepplek_image from '../assets/mijn_werk_ui_ux_stepplek_image.png'
import mijn_werk_stepplek_logo from '../assets/mijn_werk_ui_ux_stepplek_logo.png'
import mijn_werk_maatwerkonline_image from '../assets/mijn_werk_maatwerkonline_image.png'
import mijn_werk_maatwerkonline_logo from '../assets/mijn_werk_maatwerkonline_logo.png'
import mijn_werk_nrv_image from '../assets/mijn_werk_nrv_image.png'
import mijn_werk_nrv_logo from '../assets/mijn_werk_nrv_logo.png'
import mijn_werk_savannadevelopments_image from '../assets/mijn_werk_savannadevelopments_image.png'
import mijn_werk_savannadevelopments_logo from '../assets/mijn_werk_savannadevelopments_logo.png'
import mijn_werk_zab_image from '../assets/mijn_werk_zab_image.png'
import mijn_werk_zab_logo from '../assets/mijn_werk_zab_logo.png'
import mijn_werk_booksbyani_image from '../assets/mijn_werk_booksbyani_image.png'
import mijn_werk_booksbyani_logo from '../assets/mijn_werk_booksbyani_logo.png'

const contactRef = ref(null)

const work = [{
    image: mijn_werk_stepplek_image,
    logo: mijn_werk_stepplek_logo,
    text: "UI/UX Design",
    route_link: "stekplek"
},{
    image: mijn_werk_maatwerkonline_image,
    logo: mijn_werk_maatwerkonline_logo,
    text: "Visual Design",
    route_link: "maatwerkonline"
},{
    image: mijn_werk_nrv_image,
    logo: mijn_werk_nrv_logo,
    text: "UI/UX Design",
    route_link: "nrv"
},{
    image: mijn_werk_savannadevelopments_image,
    logo: mijn_werk_savannadevelopments_logo,
    text: "Merkidentiteit",
    route_link: "savannadevelopments"
},{
    image: mijn_werk_zab_image,
    logo: mijn_werk_zab_logo,
    text: "APP-ontwerp",
    route_link: "zab"
},{
    image: mijn_werk_booksbyani_image,
    logo: mijn_werk_booksbyani_logo,
    text: "Concept Voorstel",
    route_link: "booksbyani"
}]

const scroll_down_contact = () => {
    if (contactRef.value) {
        contactRef.value.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

</script>

<template>
    <div class="flex flex-col gap-10 mt-10 mb-20">
        <header class="grid grid-cols-1 md:grid-cols-5 p-20 gap-5 m-5 md:m-0">
            <div class="w-full col-span-3 flex flex-col content-around justify-evenly items-start gap-5">
                <h2 class=" test-[20px] md:text-[44px] font-semibold">Hey! Ik ben</h2>
                <h1 class="text-[51px] font-bold">Anouk</h1>
                <p>Door mijn specialisatie Human-Centered Design ben ik gedoken in de wereld van Visual Design. Ik vind
                    het heel interessant om bezig te zijn met het User interface design van zowel online platformen als
                    apps. </p>
                <button class="text-[16px] btn cursor-pointer" @click="scroll_down_contact">Contact</button>
            </div>
            <div class="w-full col-span-2">
                <img :src="anouk_heeselaars_home_foto" class="shadow">
            </div>
        </header>

        <div>
            <h1 class="text-[51px] font-bold p-5">Mijn werk.</h1>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 p-1 gap-5">
            <MyWorkCard v-for="(entry, index) in work" :image="entry.image" :route_link="entry.route_link" :logo="entry.logo" :text="entry.text" :style="{ animationDelay: `${index * 0.1}s` }" class="bounce-enter-active mx-auto"></MyWorkCard>
        </div>

        <div ref="contactRef">
            <h1 class="text-[51px] font-bold p-5">Contact.</h1>
        </div>

        <div class="block p-1 ml-5 md:ml-0">
            <button class="button transparent_button inline-flex mr-10">
                <svg class="mr-5" width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3589 24.2973L12.3463 24.2996L12.2645 24.34L12.2414 24.3446L12.2253 24.34L12.1435 24.2996C12.1312 24.2958 12.122 24.2977 12.1159 24.3054L12.1113 24.3169L12.0917 24.81L12.0974 24.833L12.109 24.848L12.2288 24.9332L12.246 24.9378L12.2599 24.9332L12.3797 24.848L12.3935 24.8295L12.3981 24.81L12.3785 24.3181C12.3754 24.3058 12.3689 24.2989 12.3589 24.2973ZM12.6642 24.1672L12.6492 24.1695L12.4361 24.2766L12.4246 24.2881L12.4211 24.3008L12.4419 24.7961L12.4476 24.81L12.4568 24.818L12.6884 24.9252C12.703 24.929 12.7141 24.9259 12.7218 24.9159L12.7264 24.8998L12.6872 24.1925C12.6834 24.1787 12.6757 24.1702 12.6642 24.1672ZM11.8405 24.1695C11.8355 24.1664 11.8294 24.1654 11.8236 24.1667C11.8178 24.168 11.8127 24.1714 11.8094 24.1764L11.8025 24.1925L11.7634 24.8998C11.7641 24.9136 11.7707 24.9228 11.783 24.9275L11.8002 24.9252L12.0318 24.818L12.0433 24.8088L12.0479 24.7961L12.0675 24.3008L12.064 24.287L12.0525 24.2755L11.8405 24.1695Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9195 23.0014C15.2607 22.9404 10.5596 22.2907 5.63618 17.3684C0.713911 12.445 0.0653638 7.74505 0.00315864 6.0851C-0.0889971 3.55542 1.84858 1.09832 4.08681 0.138745C4.35634 0.0223604 4.6515 -0.0219508 4.94332 0.0101597C5.23514 0.0422702 5.5136 0.149699 5.75138 0.321905C7.59449 1.66508 8.86624 3.69711 9.95829 5.29486C10.1986 5.64589 10.3013 6.07306 10.2469 6.49496C10.1925 6.91686 9.98483 7.304 9.66339 7.58263L7.41594 9.2518C7.30736 9.33021 7.23093 9.44536 7.20084 9.57587C7.17076 9.70638 7.18906 9.84337 7.25236 9.9614C7.76152 10.8864 8.66695 12.2641 9.70371 13.3009C10.7405 14.3376 12.1838 15.303 13.1734 15.8697C13.2974 15.9394 13.4435 15.9589 13.5815 15.9241C13.7194 15.8894 13.8389 15.8032 13.9152 15.6831L15.3782 13.4564C15.6472 13.0991 16.0439 12.8598 16.4854 12.7885C16.9269 12.7172 17.3789 12.8195 17.7466 13.074C19.3674 14.196 21.2589 15.4458 22.6435 17.2187C22.8297 17.4582 22.9482 17.7433 22.9865 18.0442C23.0247 18.3451 22.9815 18.6508 22.8612 18.9293C21.8971 21.1791 19.4572 23.0947 16.9195 23.0014Z" fill="white"/>
                </svg>
                
                +316 38 27 40 10
            </button>

            <button class="button transparent_button inline-flex mt-5 md:mt-0">
                <svg class="mr-5" width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 5.12585V18.8501C29.0001 19.9597 28.5761 21.0273 27.8149 21.8346C27.0537 22.6419 26.0128 23.1278 24.9052 23.1929L24.65 23.2001H4.35C3.24044 23.2002 2.1728 22.7762 1.36552 22.015C0.55824 21.2539 0.0723441 20.2129 0.00725017 19.1053L0 18.8501V5.12585L13.6952 14.2565L13.8635 14.3522C14.0617 14.4491 14.2794 14.4994 14.5 14.4994C14.7206 14.4994 14.9383 14.4491 15.1366 14.3522L15.3048 14.2565L29 5.12585Z" fill="white"/>
                    <path d="M24.65 0C26.216 0 27.5892 0.8265 28.3548 2.06915L14.5 11.3056L0.645264 2.06915C1.00891 1.47874 1.50844 0.983826 2.10218 0.62566C2.69593 0.267494 3.3667 0.056459 4.05856 0.01015L4.35001 0H24.65Z" fill="white"/>
                </svg>

                a.heeselaars@gmail.com
            </button>
        </div>
    </div>

</template>

<style scoped>
header {
    backdrop-filter: blur(15.407272338867188px);
    box-shadow: 0px 0px 18.65px 4.05px #0000000F;
    background: #FFFFFF1F;
    border-radius: 13px;
}

h1,
h2 {
    font-family: 'Poppins';
}

button {
    background: #3EC09E;
    border-radius: 8.11px;
    padding: 10px 15px 10px 15px;
}

.transparent_button {
    backdrop-filter: blur(15.407272338867188px);
    background: #FFFFFF1F;  
    box-shadow: 0px 0px 18.65px 4.05px #0000000F;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>