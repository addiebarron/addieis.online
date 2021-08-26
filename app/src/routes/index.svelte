<script>
  import Socials from "$lib/Socials.svelte";

  let numClicks = 0;
  function testAuth() {
    numClicks++;
    if (numClicks >= 10) window.location = "/projects?sudo";
  }
</script>

<svelte:head>
  <title>addie b</title>
</svelte:head>

<div class="home">
  <div class="me" on:click={testAuth} />
  <div class="about-me">
    <div class="text">
      <h1>hi! i'm addie</h1>
      <p>
        i'm a self-taught web programmer and technologist currently attending
        the
        <a href="https://recurse.com">Recurse Center</a>.
      </p>
      <p>
        my work is mostly in javascript and python. i have experience with full
        stack node & django apps, web extensions, and svelte sites. this site
        was built in
        <a target="_blank" href="https://svelte.dev">Svelte</a>
        and
        <a target="_blank" href="https://sapper.svelte.dev">SvelteKit</a>.
      </p>
      <p>
        i'm interested in radical networks, web communities, decentralization,
        gardens, and weird digital art.
      </p>
      <p>
        currently building a community mesh network with
        <a target="_blank" href="https://phillycommunitywireless.org">Philly
          Community Wireless</a>.
      </p>
      <Socials />
    </div>
  </div>
</div>

<style lang="scss">
  @import "../styles/theme";

  .home {
    display: grid;
    grid-template-columns: repeat(auto-fit, 500px);
    //grid-template-rows: 400px 1fr;
    @media only screen and (max-width: 450px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(auto-fill, 1fr);
      padding-bottom: 20px;
    }
    justify-content: space-around;
    grid-column-gap: 0;
    width: 1050px;
    max-width: 100%;
    margin: auto;
    padding: 20px;
    & > div {
      width: 100%;
    }
    .me {
      border: solid 1px $border-color;
      @include circular(200px);
      margin: auto;
      @media only screen and (max-width: 890px) {
        @include circular(150px);
        margin: 0 auto 20px auto;
      }
      background: url("/images/a.jpg") no-repeat right bottom;
      background-size: 105%;
      background-clip: content-box;
      @include transition((transform), 0.2s, ease);
    }
    .about-me {
      font-size: 18px;
      .text {
        margin: auto;
        padding-bottom: 10px;
        h1,
        p {
          display: inline-block;
          font-size: 1em; //o
          font-weight: normal; //o
          line-height: 2em;
          padding: 0 10px;
          background: white;
          @include shad(10px, 1);
          border: solid 1px $border-color;
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
