<template>
  <div style="line-height: 22px">
    <span class="d-block title_font deep-purple--text mb-4">Openland</span>

    <p>Приветственное слово и информация об <strong>OpenLand</strong>!</p>

    <p>Все общение, на данный момент, происходит в этом месенджере. Чтобы присоединиться, скачайте и установите его на
      мобильное устройство:</p>

    <div class="d-flex flex-wrap mt-6">
      <div class="mb-4">
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
      </div>

      <div class="mb-7">
        <span>Можно воспользоваться версиями для десктопа:</span>
        <div class="installer-link_font d-flex justify-space-between">
          <a
            href="https://oplnd.com/windows"
            target="_blank"
            rel="noopener noreferrer"
            class="d-flex align-center mr-4"
          >
            <WindowsLogo class="mr-4"/>
            <span>Windows</span>
          </a>

          <a
            href="https://oplnd.com/mac"
            target="_blank"
            rel="noopener noreferrer"
            class="d-flex align-center mr-4"
          >
            <MacLogo class="mr-4"/>
            <span>Mac</span>
          </a>

          <a
            href="https://oplnd.com/linux"
            target="_blank"
            rel="noopener noreferrer"
            class="d-flex align-center mr-1"
          >
            <LinuxLogo class="mr-4"/>
            <span>Linux</span>
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
import WindowsLogo from '@/assets/openland/win.svg'
import MacLogo from '@/assets/openland/mac.svg'
import LinuxLogo from '@/assets/openland/linux.svg'

export default {
  components: {
    AppStoreLogo,
    AndroidStoreLogo,
    WindowsLogo,
    MacLogo,
    LinuxLogo,
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

.installer-link_font span {
  font-size: 16px;
  line-height: 40px;
  font-weight: 600;
  opacity: 0.6;
}

.installer-link_font > a {
  text-decoration: none;
}

</style>
