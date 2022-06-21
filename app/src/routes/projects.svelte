<script context="module">
  import yaml from "js-yaml";

  export async function load({ fetch }) {
    let projects = [];
    try {
      const res = await fetch("/data.yaml");
      const text = await res.text();
      projects = res.ok ? yaml.load(text) ?? [] : [];
    } catch {
      console.log("Error reading data file.");
    }

    return {
      props: {
        projects,
      },
    };
  }
</script>

<script>
  export let projects;

  let whenThingsGetOld = 4;
</script>

<svelte:head>
  <title>addie b - projects</title>
</svelte:head>

<article>
  <h2>projects</h2>
  {#if projects.length}
    {#each projects as project, i}
      {#if i == whenThingsGetOld}
        <h3>Older projects for which I can't be held responsible</h3>
      {/if}
      {#if project.show}
        <div class="project">
          <h4><a target="_blank" href={project.url}>{project.title}</a></h4>
          <p>{project.description}</p>
        </div>
      {/if}
    {/each}
  {:else}<span>Nothing here.</span>{/if}
</article>

<style lang="scss">
  @import "../styles/theme";

  article {
    height: 100%;
    width: 100%;
    max-width: 700px;
    padding: 40px 30px 20px 20px;
    margin: auto;
    position: relative;
    h2 {
      padding-bottom: 40px;
    }
    h3 {
      color: rgba(0, 0, 0, 0.8);
      padding: 20px 0;
      font-style: italic;
    }
    .project {
      @include paragraph;
      padding: 10px;
      line-height: 1em;
      margin-bottom: 30px;
      h4 {
        margin-bottom: 10px;
        a {
          text-decoration: underline;
          text-decoration-thickness: 2px;
          &:after {
            content: " ⇢";
            font-size: 0.8rem;
            padding-bottom: 2px;
          }
        }
      }
    }
  }
  span {
    color: grey;
    font-style: italic;
  }
</style>
