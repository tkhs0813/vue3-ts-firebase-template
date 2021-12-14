<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@vueuse/firebase/useAuth";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = getAuth();
const { isAuthenticated, user } = useAuth(auth);

const email = ref("");
const password = ref("");

const handleSignup = async () => {
  console.log("aa");
  await createUserWithEmailAndPassword(auth, email.value, password.value);
  router.push("/");
};
</script>

<template>
  <div>
    <label htmlFor="email" class="sr-only"> Email </label>
    <input
      id="email"
      name="email"
      type="text"
      v-model="email"
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
  <div>
    <label htmlFor="password" class="sr-only"> Password </label>
    <input
      id="password"
      name="password"
      type="password"
      v-model="password"
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
  <button @click="handleSignup">Sign up</button>
</template>

<style></style>
