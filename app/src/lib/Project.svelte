<script>
  export let project, sudo;

  async function deleteThisProject() {
    if (!confirm(`Are you sure you want to delete "${project.title}"?`)) return;

    const res = await fetch("/api/projects/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: project.id }),
    });

    if (res.ok) {
      window.location = res.url;
    } else {
      console.log(res);
    }
  }
</script>

<div
  class="project"
  style="background-image: url('{project.imagesrc || '/images/placeholder.png'}');"
>
  <a href={project.url} target="blank" class="rect">
    <div class="text title">
      <span>{project.title ? project.title.toLowerCase() : ''}</span>
    </div>
    <div class="text description">
      <span
      >{project.description ? project.description.toLowerCase() : ''}</span>
    </div>
  </a>
  {#if sudo}
    <button
      class="project-delete-button"
      on:click={deleteThisProject}
    >×</button>
  {/if}
</div>

<style lang="scss">
  @import "../styles/theme";

  .project {
    position: relative;
    @include shad;
    border: solid 1px black;
    overflow: hidden;
    width: min(100%, 375px);
    background-color: pink;
    background-size: cover;
    background-blend-mode: multiply;
    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 14px 14px black;
      background-color: white;
    }
    a.rect {
      display: block;
      position: relative;
      height: 250px;
      width: 100%;
      .text {
        position: absolute;
        left: 0;
        padding: 20px;
        span {
          display: inline-block;
          background-color: white;
          padding: 0 5px;
          line-height: 1.2em;
          border: solid 1px $border-color;
        }

        &.title {
          top: 0;
          font-size: 1.6em;
          font-weight: bold;
          word-break: break-all;
        }

        &.description {
          bottom: 0;
          line-height: 1.2em;
          font-style: italic;
        }
      }
    }
    .project-delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 30px;
      height: 30px;
      font-size: 20px;
      border-radius: 50%;
      border: solid 1px lightgrey;
      background: white;
      cursor: pointer;
      &:hover {
        background: rgb(255, 134, 134);
        color: white;
      }
    }
  }
</style>
