<template>
<div class="grid justify-items-stretch">
  <div class="w-full max-w-xs justify-self-center">
    <form @submit.prevent="connect">
      <h1>Se connecter</h1>
      <div class="mb-4">
        <label for="mail">Adresse mail</label>
        <input
          v-model="formModel.mail.value"
          @click="formModel.mail.dirty = true"
          :class="{ invalid: formModel.mail.dirty ? !formModel.mail.valid : false }"
          type="email"
          id="mail"
        />
        <span class="invalid" v-if="formModel.mail.dirty ? !formModel.mail.valid : false">Adresse mail invalide</span>
      </div>
      <div class="mb-6">
        <label for="pass">Mot de passe</label>
        <input
          v-model="formModel.password.value"
          @click="formModel.password.dirty = true"
          :class="{ invalid: formModel.password.dirty ? !formModel.password.valid : false }"
          type="password"
          name="pass"
          id="pass"
        />
        <span class="invalid" v-if="formModel.password.dirty ? !formModel.password.valid : false">Veuillez entrer un mot de passe</span>
      </div>
      <div class="">
        <button class="btn-blue">Se connecter</button>
        <a href="" class="forgot">Mot de passe oublié?</a>
      </div>
    </form>
  </div>
</div>
</template>
<script>
import { login } from "@/services/api/auth";
import { reactive, ref, computed } from "vue";
import { useRoute, useRouter } from 'vue-router';
export default {
  setup() {
    let route = useRoute();
    let router = useRouter();
    let datas = ref([]);
    let regexMail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let formModel = reactive({
      mail: {
        value: "eve.holt@reqres.in",
        dirty: false,
        valid: computed(() => regexMail.test(formModel.mail.value)),
      },
      password: {
        value: "cityslicka",
        dirty: false,
        valid: computed(() => formModel.password.value !== "" && formModel.password.value.length >6)
      },
    });
    let connect = async (e) => {
      let valid = false;
      for (const key in formModel) {
        valid = formModel[key].valid;
      }
      if (valid) {
        let user = {email: formModel.mail.value, password: formModel.password.value};
        let res = await login(user);
        if (res) {
          router.push(route.query.exceptedPath || '/admin/home')
        } else {
          alert(`Adresse Mail ou mot de passe incorrect`)
        }
      }
    };
    return {
      connect,
      formModel,
    };
  },
};
</script>
<style scoped lang="scss">
form {
  @apply bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4;
  input.invalid {
    @apply border-red-500;
  }
  span.invalid {
    @apply text-red-500 text-xs italic;
  }
  input {
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
    &:focus {
      @apply outline-none shadow-outline;
    }
  }
  label {
    @apply block text-gray-700 text-sm font-bold mb-2;
  }

  a.forgot {
    @apply inline-block align-baseline font-bold text-sm text-blue-500;
    &:hover {
      @apply text-blue-800;
    }
  }
}
</style>
