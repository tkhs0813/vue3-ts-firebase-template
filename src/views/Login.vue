<script setup lang="ts">
import { ref } from "vue";
import { LightningBoltIcon } from "@heroicons/vue/solid";
import { LockClosedIcon } from "@heroicons/vue/solid";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@vueuse/firebase/useAuth";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = getAuth();
const { isAuthenticated, user } = useAuth(auth);

const email = ref("");
const password = ref("");
const loading = ref(false);

const handleLogin = async () => {
  console.log("aa");
  await signInWithEmailAndPassword(auth, email.value, password.value);
  await router.push("/");
};
const test = () => {
  console.log("test");
};
</script>

<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div>
      {{ isAuthenticated }}
    </div>
    <div
      class="max-w-md w-full space-y-8 p-10 rounded-xl bg-lightning-100 shadow"
    >
      <div>
        <LightningBoltIcon
          style="color: #ffecd2; stroke: #dd914a"
          class="mx-auto h-20 w-auto sm:h-30 transform rotate-12 scale-y-110"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <router-link
            to="/signup"
            class="font-medium text-lightning-600 hover:text-lightning-500"
          >
            register an account
          </router-link>
        </p>
      </div>
      <input type="hidden" name="remember" defaultValue="true" />
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" class="sr-only"> Email address </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            class="
              appearance-none
              rounded-none
              relative
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-500
              text-gray-900
              rounded-t-md
              focus:outline-none
              focus:ring-lightning-500
              focus:border-lightning-500
              focus:z-10
              sm:text-sm
            "
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password" class="sr-only"> Password </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            class="
              appearance-none
              rounded-none
              relative
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-500
              text-gray-900
              rounded-b-md
              focus:outline-none
              focus:ring-lightning-500
              focus:border-lightning-500
              focus:z-10
              sm:text-sm
            "
            placeholder="Password"
          />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            class="
              h-4
              w-4
              text-lightning-600
              focus:ring-lightning-500
              border-gray-300
              rounded
            "
          />
          <label htmlFor="remember-me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm text-right">
          <router-link
            to="/forgot"
            class="font-medium text-lightning-600 hover:text-lightning-500"
          >
            Forgot your password?
          </router-link>
        </div>
      </div>

      <button @click="handleLogin">sign in</button>
    </div>
  </div>
</template>

<style></style>
