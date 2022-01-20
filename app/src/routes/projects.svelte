<script context="module">
  export async function load({ fetch, page }) {
    let projects = [];
    try {
      const res = await fetch("/api/projects/get-all", {
        method: "GET",
      });
      projects = res.ok ? await res.json() : [];
    } catch {
      console.log("No data file.");
    }

    // show newest first
    projects = projects.reverse();

    return {
      props: {
        projects,
        sudo: page.query.has("sudo"),
        success: page.query.get("success"),
      },
    };
  }
</script>

<script>
  import Project from "$lib/Project.svelte";
  import ProjectModal from "$lib/ProjectModal.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let projects, sudo, success;

  // Projects list

  let software = [];

  // Filter by type
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    if (projects.software) {
      software.push(project);
      projects.pop(i);
    }
  }

  // Success / failure messages

  let showSuccessMessage = true;
  // Remove successMessage after 1 second
  function removeSuccessMessage() {
    showSuccessMessage = false;
    window.history.replaceState(
      {},
      document.title,
      `/projects${sudo ? "?sudo" : ""}`
    );
  }
  onMount(() => setTimeout(removeSuccessMessage, 1000));

  // Modal

  // This object is bound to the state of the modal
  let modalOptions = {
    show: false,
  };

  function showModal(type, project, software) {
    modalOptions = {
      show: true,
      type: type,
      project: project || null,
      software,
    };
  }

  function hideModal() {
    modalOptions = {
      show: false,
    };
  }

  async function deleteProject(id) {
    if (!confirm(`Are you sure you want to delete this project?`)) return;

    const res = await fetch("/api/projects/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      window.location = res.url;
    } else {
      console.log(res);
    }
  }
</script>

<svelte:head>
  <title>addie b - projects</title>
</svelte:head>

<div class="projects">
  {#if success && showSuccessMessage}
    <div out:fade class="success">Successful {success}.</div>
  {/if}
  <h2>projects</h2>
  <ul class="projects-grid">
    {#if sudo}
      <button class="grid-item" on:click={() => showModal('create')}>
        +
      </button>
    {/if}
    {#if projects.length}
      {#each projects as project}
        {#if project.show || sudo}
          <Project
            {project}
            bind:sudo
            on:edit={() => showModal('edit', project)}
            on:delete={() => deleteProject(project.id)}
          />
        {/if}
      {/each}
    {:else}
      <div class="placeholder grid-item">Nothing here.</div>
    {/if}
  </ul>
  <h2>code</h2>
  <ul class="projects-grid">
    {#if sudo}
      <button
        class="grid-item"
        on:click={() => showModal('create', { code: true })}
      >
        +
      </button>
    {/if}
    {#if software.length}
      {#each software as project}
        {#if project.show || sudo}
          <Project
            {project}
            bind:sudo
            on:edit={() => showModal('edit', project)}
            on:delete={() => deleteProject(project.id)}
          />
        {/if}
      {/each}
    {:else}
      <div class="placeholder grid-item">Nothing here.</div>
    {/if}
  </ul>
</div>
{#if modalOptions.show}
  <ProjectModal bind:modalOptions on:close={hideModal} />
{/if}

<style lang="scss">
  @import "../styles/theme";

  $grid-gap: 30px;
  $grid-height: 200px;
  $grid-width: 350px;

  div.projects {
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    padding: $grid-gap;

    h2 {
      padding-bottom: 10px;
    }

    div.success {
      position: fixed;
      top: 15px;
      right: 15px;
      padding: 10px;
      text-align: center;
      border-radius: 5px;
      background: rgb(39, 228, 39);
      color: white;
    }

    ul.projects-grid {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, $grid-width);
      grid-auto-rows: $grid-height;
      gap: $grid-gap;
      width: 100%;
      margin: 0;
      padding: 0 0 30px 0;
      @media only screen and (max-width: 450px) {
        & {
          grid-template-columns: 1fr;
        }
      }

      .grid-item {
        height: $grid-height;
        max-width: $grid-width;
      }

      button {
        font-size: 40px;
        color: lightgray;
        background-color: white;
        border: solid 1px lightgray;
        cursor: pointer;
        &:hover {
          color: grey;
          border-color: grey;
        }
      }

      .placeholder {
        background: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.4);
        padding-top: 32%;
        line-height: 0;
        text-align: center;
      }
    }
  }
</style>
