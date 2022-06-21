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
  <div class="me" />
  <div class="about-me">
    <div class="text">
      <h1>Hi! I'm Addie.</h1>
      <p>
        I'm an internet technologist currently working as a full-stack web
        developer at
        <a target="_blank" href="https://outschool.com">Outschool</a>.
      </p>
      <p>
        I specialize in front-end code using JavaScript, and I prioritize
        simple, intuitive, accessible design in all my work. This site was built
        using
        <a target="_blank" href="https://sapper.svelte.dev">SvelteKit</a>.
      </p>
      <p>
        I aim to respect the experimental, democratizing, and power-challenging
        potentials of the web just as I critique its massive failures.
      </p>
      <p>
        Outside of work, I help build community controlled mesh networks with
        <a target="_blank" href="https://pcw.fi">Philly Community Wireless</a>.
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
      a:focus {
        color: black;
        outline: dashed 2px black;
        outline-offset: 5px;
      }
      .text {
        margin: auto;
        padding-bottom: 10px;
        & > p,
        h1 {
          @include paragraph;
        }
      }
    }
  }
</style>
