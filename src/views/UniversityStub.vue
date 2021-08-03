<template>
  <div>
    <v-sheet class="pa-4 mb-8">
      <span class="heading text-red">В разработке</span>
    </v-sheet>

    <p>Привет и добро пожаловать в группу <strong>Mesto University</strong>!</p>

    <p>В данный момент Университет находится в процессе разработки. Если вы хотите первыми узнать, когда он откроется,
      можете оставить свою почту и мы вам сообщим.</p>

    <div class="d-flex mb-8">
      <v-text-field
        placeholder="Ваш email"
        height="40"
        solo
        dense
        flat
        hide-details
        class="email flex-grow-0 mr-4"
      />
      <MButton x-small>Я в деле</MButton>
    </div>

    <p>Университет в Месте предназначен для передачи знаний от одного человека к другому понятным, систематичным и
      эффективным способом.</p>

    <strong>Чему будет учить Университет?</strong>
    <p>Жестких ограничений по областям нет, однако на практике общение в Месте крутится вокруг небольшого количества
      тем:</p>

    <ol class="pl-4">
      <li>Построение стартапов/бизнесов</li>
      <li>Личностное развитие</li>
    </ol>
  </div>
</template>

<script>
import MButton from '@/components/MButton'

export default {
  components: { MButton },
}
</script>

<style scoped>
.text-red {
  color: #EB5757;
}

.email {
  width: 330px;
  height: 40px;
  border-radius: 0;
}

.email.v-text-field >>> input {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: normal;
  color: var(--black);
  padding: 3px 0;
}

.email.v-text-field >>> input::placeholder {
  color: #828282;
}
</style>
