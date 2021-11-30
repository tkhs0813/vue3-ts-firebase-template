<script setup lang="ts">
import { ref } from "vue";
import { DocumentTextIcon, KeyIcon } from "@heroicons/vue/solid";

const features = ref([
  {
    name: "Hoge",
    description:
      "hoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hoge.",
  },
  {
    name: "Hoge",
    description:
      "hoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hoge.",
  },
  {
    name: "Hoge",
    description:
      "hoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hoge.",
  },
  {
    name: "Hoge",
    description:
      "hoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hoge.",
  },
  {
    name: "Hoge",
    description:
      "hoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hoge.",
  },
  {
    name: "Hoge",
    description:
      "hoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hoge.",
  },
]);
</script>

<template>
  <div class="py-12 bg-lightning-200" id="features">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="
            text-base text-lightning-600
            font-semibold
            tracking-wide
            uppercase
          "
        >
          Features
        </h2>
        <p
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          Aaaaaaaaaaaaaaaaaaaaaa
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
          hoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge
          hoge hhoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge
          hogehoge hogeoge hoge
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="
            space-y-10
            md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10
            px-4
            sm:px-0
          "
        >
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-full
                  bg-lightning-100
                  ring-lightning-500 ring
                "
              >
                <KeyIcon
                  class="h-6 w-6 text-lightning-500"
                  aria-hidden="true"
                />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-700 text-justify">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style></style>
