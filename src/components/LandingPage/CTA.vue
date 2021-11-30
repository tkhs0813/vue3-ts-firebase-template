<script setup lang="ts">
import { BadgeCheckIcon, LightningBoltIcon } from "@heroicons/vue/solid";
</script>

<template>
  <div class="py-8 bg-lightning-200" id="pricing">
    <div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div
        class="
          max-w-md
          mx-auto
          w-full
          space-y-8
          p-10
          rounded-xl
          bg-lightning-100
          shadow
        "
      >
        <div>
          <LightningBoltIcon
            style="color: #ffecd2; stroke: #dd914a"
            class="mx-auto h-16 w-auto transform rotate-12 scale-y-110"
          />
          <h3
            class="
              text-3xl
              mt-5
              text-center
              tracking-tight
              font-extrabold
              text-gray-900
            "
          >
            <span class="block text-lightning-600">Ultimate</span>
            <span class="block xl:inline">React.js starter</span>
          </h3>
          <div class="mt-4 flex flex-row items-center justify-center">
            <BadgeCheckIcon class="w-5 h-6 text-lightning-500" />
            <p
              class="
                text-base
                ml-2
                text-center text-lightning-500
                sm:text-lg sm:max-w-xl
                md:text-xl
              "
            >
              14 day money-back-guarantee!
            </p>
          </div>
          <div class="rounded-xl shadow mt-6">
            <a
              href="https://www.google.com/"
              class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-xl
                text-white
                bg-lightning-600
                hover:bg-lightning-700
                md:py-4 md:text-lg md:px-10
              "
            >
              Buy this starter now for $39!
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
