<script>
  export let path;

  let navItems = [
    {
      text: "about",
      href: "/",
    },
    {
      text: "projects",
      href: "/projects",
    },
    {
      text: "blog",
      href: "https://dev.to/addiebarron",
    },
  ];

</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap"
  />
</svelte:head>

<nav>
  <ul>
    {#each navItems as link}
      <li
        class="nav-item"
        aria-current={path == link.href ? 'page' : undefined}
      >
        <a href={link.href}> <span>{link.text}</span> </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  @use "../styles/colors";
  @use "../styles/mixins";

  nav {
    display: block;
    width: 100%;
    background: colors.$boxes;
    border-bottom: solid 1px black;
    ul {
      display: flex;
      width: 100%;
      max-width: 500px;
      height: 100%;
      padding: 0;
      li.nav-item {
        flex: 1;
        display: block;
        position: relative;
        margin: 0;
        padding: 0;
        cursor: pointer;
        a {
          display: flex;
          width: 100%;
          height: 100%;
          text-decoration: none;
          &:focus {
            outline: dashed 2px black;
            outline-offset: -0.6rem;
          }
          span {
            margin: auto; // easy centering
          }
        }
        &:hover {
          a > span {
            @include mixins.underline(4px, #ddd);
          }
        }
        &:focus {
          outline: dashed 2px black;
          outline-offset: -0.6rem;
        }
        &[aria-current] {
          position: relative;
          display: inline-block;
          & > a > span {
            @include mixins.underline(4px, black);
          }
        }
      }
    }
  }

</style>
