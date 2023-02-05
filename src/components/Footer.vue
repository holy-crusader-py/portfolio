<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faInstagram)

</script>

<template>
    <div id="footer">
        <div class="footer-container">
            <p>©2023 Cods</p>
            <div class="socials">
                <a href="https://www.instagram.com/the_holy_crusader/" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #footer {
        display: flex;
        align-items: center;
        height: 100px;
        width: 100%;
        background-color: var(--secondary-color);
        border-top: solid 5px #000;
        box-sizing: border-box;
    }
    .footer-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        max-width: 1350px;
        margin: auto;
        padding: 0 1rem;
        width: 100%;
        font-size: 1.1rem;
        font-weight: 00;
    }
    .socials {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        gap: 1rem;
        font-size: 1.4rem;
    }
</style>
