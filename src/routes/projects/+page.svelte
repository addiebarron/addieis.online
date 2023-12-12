<script>
  export let data;

  const { projects } = data;
</script>

<style lang="scss">
  @use "../../styles/colors";
  @use "../../styles/placeholders";

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
    .project {
      @extend %paragraph;
      padding: 10px;
      line-height: 1.2em;
      margin-bottom: 30px;
      h4 {
        margin-bottom: 10px;
      }
      &.pink {
        background: colors.$background;
      }
    }
  }
  span {
    color: grey;
    font-style: italic;
  }

</style>


<svelte:head>
  <title>addie b - projects</title>
</svelte:head>

<article>
  <h2>projects</h2>
  <div class="project pink">
    <p><a href="/resume.pdf">Download my resume</a></p>
  </div>
  {#if projects.length}
    {#each projects as project, i}
      {#if project.show}
        <div class="project">
          <h4><a target="_blank" href={project.url}>{project.title}</a></h4>
          <p>{project.description}</p>
        </div>
      {/if}
    {/each}
  {:else}<span>Nothing here.</span>{/if}
</article>
