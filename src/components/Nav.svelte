<script>
  export let segment;
</script>

<style lang="scss">
  @import "../styles/theme";
  nav {
    display: block;
    width: 100%;
    background: white;
    border-bottom: solid 1px $border-color;
    ul {
      width: 100%;
      max-width: 500px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 100%;
      padding: 0;
      li.nav-item {
        display: block;
        position: relative;
        margin: 0;
        padding: 0;
        cursor: pointer;
        a {
          display: flex;
          width: 100%;
          height: 100%;
          span {
            margin: auto; // easy centering
          }
        }
        &:hover {
          a > span {
            @include underline(4px, #ddd);
          }
        }
        &[aria-current] {
          position: relative;
          display: inline-block;
          & > a > span {
            @include underline(4px, black);
          }
        }
      }
    }
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap" />
</svelte:head>

<nav>
  <ul>
    <li
      class="nav-item"
      aria-current={segment === undefined ? 'page' : undefined}>
      <a href="/"> <span>about</span> </a>
    </li>
    <li
      class="nav-item"
      aria-current={segment === 'projects' ? 'page' : undefined}>
      <a href="projects" rel="prefetch"> <span>projects</span> </a>
    </li>
    <li
      class="nav-item"
      aria-current={segment === 'resume' ? 'page' : undefined}>
      <a href="resume"> <span>resume</span> </a>
    </li>
  </ul>
</nav>
