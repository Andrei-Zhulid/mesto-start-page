<template>
  <div style="line-height: 22px">
    <span class="title_font deep-purple--text">Openland</span>

    <p>Приветственное слово и информация об <strong>OpenLand</strong>!</p>

    <p>Все общение, на данный момент, происходит в этом месенджере. Чтобы присоединиться, скачайте и установите его на
      мобильное устройство:</p>

    <div class="d-flex mb-8">
      <v-btn
        href="https://oplnd.com/ios"
        target="_blank"
        rel="noopener noreferrer"
        color="black"
        x-large
        style="border-radius: 10px"
        class="mr-6 px-0"
      >
        <AppStoreLogo/>
      </v-btn>

      <v-btn
        href="https://oplnd.com/android"
        target="_blank"
        rel="noopener noreferrer"
        color="black"
        x-large
        style="border-radius: 10px"
        class="mr-6 px-0"
      >
        <AndroidStoreLogo/>
      </v-btn>
      <!--      <a class="p3hf0ch" href="https://oplnd.com/mac" target="_blank" rel="noopener noreferrer"><img class="p4nmp92" src="/static/landing/icons/mac.svg" width="24" height="24"><span class="phnaj8">Mac</span></a><a class="p3hf0ch" href="https://oplnd.com/windows" target="_blank" rel="noopener noreferrer"><img class="p4nmp92" src="/static/landing/icons/win.svg" width="24" height="24"><span class="phnaj8">Windows</span></a><a class="p3hf0ch" href="https://oplnd.com/linux" target="_blank" rel="noopener noreferrer"><img class="p4nmp92" src="/static/landing/icons/linux.svg" width="24" height="24"><span class="phnaj8">Linux</span></a></div></span>-->
      <div>
        <p>Можно воспользоваться версиями для десктопа:</p>
        <div class="d-flex">
          <a
            href="https://oplnd.com/windows"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img
              :src="require('@/assets/openland/windows.png')"
              alt="Windows installer"
              max-height="22"
              contain
            />
          </a>

          <a
            href="https://oplnd.com/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img
              :src="require('@/assets/openland/mac.png')"
              alt="Mac OS installer"
              max-height="22"
              contain
            />
          </a>

          <a
            href="https://oplnd.com/linux"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img
              :src="require('@/assets/openland/linux.png')"
              alt="Linux installer"
              max-height="22"
              contain
            />
          </a>
        </div>
      </div>

    </div>
    <span class="font-weight-bold">Место и Openland — как связаны?</span>
    <p>
      Место работает на базе платформы Опенленд, Юра Лифшиц — сооснователь Опенленд и один из со-создателей Места,
      который помогает нам настроить ресурсы опенленд под нужды растущего сообщества. Юра однозначно в команде
      сооснователей, однозначно часть комьюнити.</p>

    <span class="font-weight-bold">В чём разница между Местом и Openland?</span>
    <p>Место — это онлайн-сообщество, Openland — центральный канал для коммуникации этого сообщества. Помимо Openland,
      сейчас мы используем Zoom и Notion. В Zoom проводим встречи, которые транслируем и сохраняем в Youtube. В Notion
      размещаем гайдлайны, списки и большие статьи.</p>

    <span>Тут мы перевели инструкцию, как пользоваться площадкой:</span>
    <p><a
      href="https://www.notion.so/Openland-84f280a1bab4495f839032a291e52504"
      target="_blank"
      rel="noopener noreferrer"
      class="blue--text"
    >notion.so/Openland-84f280a1bab4495f839032a291e52504</a></p>

    <div class="d-flex flex-column">
      <span>Чат поддержки:
        <a
          href="https://openland.com/help"
          target="_blank"
          rel="noopener noreferrer"
          class="blue--text"
        >openland.com/help</a>
      </span>

      <span>Поддержка по электронной почте:
        <a
          href="mailto:hello@openland.com"
          class="blue--text"
        >hello@openland.com</a>
      </span>

      <span>Команда поддержки:
        <a
          href="https://openland.com/yury"
          target="_blank"
          rel="noopener noreferrer"
          class="blue--text"
        >openland.com/yury</a>
        и
        <a
          href="https://openland.com/igralino"
          target="_blank"
          rel="noopener noreferrer"
          class="blue--text"
        >openland.com/igralino</a>
      </span>

      <span>Экстренная помощь в Telegram:
        <a
          href="https://t.me/joinchat/ABtXyRl5hBo2VyqSNzS1EQ"
          target="_blank"
          rel="noopener noreferrer"
          class="blue--text"
        >ссылка</a>
      </span>
    </div>
  </div>
</template>

<script>
import AppStoreLogo from '@/assets/openland/home-intro-ios-2.svg'
import AndroidStoreLogo from '@/assets/openland/home-intro-android-2.svg'

export default {
  components: {
    AppStoreLogo,
    AndroidStoreLogo,
  },
}
</script>

<style scoped>
.title_font {
  font-size: 20px;
  font-weight: bold;
  line-height: 27px;
  letter-spacing: normal;
}
</style>
