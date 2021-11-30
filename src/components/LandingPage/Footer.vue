<script setup lang="ts">
import { LightningBoltIcon } from "@heroicons/vue/solid";
</script>

<template>
  <div class="bg-gray-800 w-full h-40 flex flex-col justify-between p-4 mt-10">
    <div class="grid grid-cols-2 w-full items-center">
      <div class="mx-auto p-4 flex-row flex align-middle h-16 items-center">
        <router-link
          to="/"
          class="text-base leading-6 text-gray-300 hover:text-gray-400"
          aria-label="Home"
        >
          <LightningBoltIcon
            style="color: #ffecd2; stroke: #dd914a"
            class="h-8 w-auto transform rotate-12 scale-y-110"
          />
        </router-link>

        <span class="tracking-tight font-extrabold text-gray-900 ml-2">
          <span class="block text-lightning-600">Ultimate</span>
          <span class="block text-gray-300">React.js starter pack</span>
        </span>
      </div>
      <div class="mx-auto">
        <ul>
          <li class="mt-2">
            <router-link
              to="/legal"
              class="text-base leading-6 text-gray-300 hover:text-gray-400"
            >
              Legal Notice
            </router-link>
          </li>
          <li class="mt-2">
            <router-link
              to="/privacy"
              class="text-base leading-6 text-gray-300 hover:text-gray-400"
            >
              Privacy
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="text-gray-400 text-center">© Copyright empitsu 2021</div>
  </div>
</template>

<style></style>
