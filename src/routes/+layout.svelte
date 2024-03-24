<main>
  <slot />
</main>

<style lang="scss" global>
  @import "../styles/global";

  body {
    main {
      overflow: scroll;
      display: flex;
    }
    height: 100vh;
    width: 100vw;
  }
</style>
