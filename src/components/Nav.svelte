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
    //font-family: "Major Mono Display";
    //font-size: 1.2em;
    font-weight: bolder;
    ul {
      width: 100%;
      max-width: 500px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 100%;
      padding: 0;
      li.nav-item {
        display: block;
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
      }
    }
  }

  [aria-current] {
    position: relative;
    display: inline-block;
    $underline-distance: 5px;
    & > a > span {
      border-bottom: solid 1px black;
      padding-bottom: $underline-distance;
      position: relative;
      top: $underline-distance / 2;
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
