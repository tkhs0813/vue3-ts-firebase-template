<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  TransitionRoot,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { LightningBoltIcon } from "@heroicons/vue/solid";
import { reactive, ref } from "vue";

const navigation = ref([
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
]);
</script>

<template>
  <div class="relative bg-white overflow-hidden">
    <div
      class="
        relative
        pb-8
        bg-white
        sm:pb-16
        md:pb-20
        lg:w-full lg:pb-28
        xl:pb-32
      "
    >
      <svg
        class="
          hidden
          lg:block
          absolute
          right-0
          inset-y-0
          h-full
          w-48
          text-white
          transform
          translate-x-1/2
        "
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <Popover>
        <div class="relative pt-6 px-4 sm:pl-6 lg:pl-8">
          <nav
            class="
              relative
              flex
              items-center
              justify-between
              sm:h-10
              lg:justify-between
            "
            aria-label="Global"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#" aria-label="Home">
                  <LightningBoltIcon
                    style="color: #ffecd2; stroke: #dd914a"
                    class="h-8 w-auto sm:h-10 transform rotate-12 scale-y-110"
                  />
                </a>
                <div class="mr-2 flex items-center md:hidden">
                  <PopoverButton
                    class="
                      bg-white
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:text-gray-500 hover:bg-gray-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-lightning-500
                    "
                  >
                    <span class="sr-only">Open main menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="font-medium text-gray-500 hover:text-gray-900"
              >
                {{ item.name }}
              </a>
            </div>
            <div class="hidden md:block md:ml-10 md:space-x-6">
              <router-link to="/login">
                <a
                  class="
                    font-medium
                    text-lightning-600
                    hover:text-lightning-500
                    bg-lightning-100
                    py-2
                    px-3
                    rounded-full
                  "
                >
                  Log in
                </a>
              </router-link>
              <router-link to="/signup">
                <a
                  class="
                    font-medium
                    text-lightning-600
                    hover:text-lightning-500
                    bg-lightning-100
                    py-2
                    px-3
                    rounded-full
                  "
                >
                  Sign up
                </a>
              </router-link>
            </div>
          </nav>
        </div>

        <TransitionRoot
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="
              absolute
              z-10
              top-0
              inset-x-0
              p-2
              transition
              transform
              origin-top-right
              md:hidden
            "
          >
            <div
              class="
                rounded-lg
                shadow-md
                bg-white
                ring-1 ring-black ring-opacity-5
                overflow-hidden
              "
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <LightningBoltIcon
                    style="color: #ffecd2; stroke: #dd914a"
                    class="h-8 w-auto sm:h-10 transform rotate-12 scale-y-110"
                  />
                  div class="-mr-2">
                  <PopoverButton
                    class="
                      bg-white
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:text-gray-500 hover:bg-gray-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-lightning-500
                    "
                  >
                    <span class="sr-only">Close main menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <div v-for="(item, index) in navigation" :key="index">
                  <a
                    :key="item.name"
                    :href="item.href"
                    class="
                      block
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                      text-gray-700
                      hover:text-gray-900 hover:bg-gray-50
                    "
                  >
                    {{ item.name }}
                  </a>
                </div>
              </div>
              <router-link
                to="/login"
                class="
                  block
                  w-full
                  px-5
                  py-3
                  text-center
                  font-medium
                  text-lightning-600
                  bg-lightning-100
                  hover:bg-lightning-200
                "
              >
                Log in
              </router-link>
              <router-link
                to="/signup"
                class="
                  block
                  w-full
                  mt-2
                  px-5
                  py-3
                  text-center
                  font-medium
                  text-lightning-600
                  bg-lightning-100
                  hover:bg-lightning-200
                "
              >
                Sign up
              </router-link>
            </div>
          </PopoverPanel>
        </TransitionRoot>
      </Popover>

      <main
        class="
          mt-10
          mx-auto
          max-w-7xl
          px-4
          sm:mt-12 sm:px-6
          md:mt-16
          lg:mt-20 lg:px-8
          xl:mt-28
        "
      >
        <div class="text-center">
          <h1
            class="
              text-4xl
              tracking-tight
              font-extrabold
              text-gray-900
              sm:text-5xl
              md:text-6xl
            "
          >
            <span class="block text-lightning-600">Sugoi App</span>
            <span class="block xl:inline">Vue.js App starter</span>
          </h1>
          <p
            class="
              mt-3
              text-base text-gray-600
              sm:mt-5 sm:text-lg sm:mx-auto
              md:mt-5 md:text-xl
              lg:mx-0
            "
          >
            Vue.js 3, Firebase, Authentication (Firebase), Tailwind CSS, State
            Management (Pinia).
          </p>
          <p
            class="
              mt-3
              text-base text-lightning-500
              sm:mt-5 sm:text-lg sm:mx-auto
              md:mt-5 md:text-xl
              lg:mx-0
            "
          >
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!
          </p>
          <div class="mb-2 sm:mb-0 mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div class="rounded-xl shadow">
              <a
                href="https://www.google.com"
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
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style></style>
