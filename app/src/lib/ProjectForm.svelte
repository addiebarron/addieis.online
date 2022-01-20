<script>
  import { maxTitleLength } from "../routes/api/projects/_schema";

  // Create vs upload defaults
  export let type,
    software,
    project = null;

  let creating = type == "create";

  let defaults = { show: true, software };
  if (type == "edit") {
    // updating a project defaults
    defaults = project;
  } else if (type == "create" && import.meta.env.DEV) {
    // testing defaults
    defaults = {
      title: "test title",
      description: "test description",
      url: "https://addieis.online",
      show: true,
    };
  }

  // Image upload workaround (send raw base64 data)
  let files, imageInput, imageBase64;
  function handleImageSelect(image) {
    // Restrict to 60MB or less (VERY rare but would break cloudinary base64 upload)
    let size = (image.size / 1024 ** 2).toFixed(4); // MB
    if (size >= 60) {
      imageInput.value = "";
      files = [];
      alert("Please choose an image less than 60MB.");
      return;
    }
    // Read into a base64 URL and set as hidden input value;
    const reader = new FileReader();
    reader.onload = async (e) => {
      imageBase64 = e.target.result;
    };
    reader.readAsDataURL(image);
  }

  async function handleFormSubmit(e) {
    e.target.elements["image"].disabled = true;
  }

  $: if (files) handleImageSelect(files[0]);
</script>

<form
  id="project-form"
  on:submit={handleFormSubmit}
  action="/api/projects/{type}"
  method="POST"
>
  <label for="title">Title</label>
  <input
    type="text"
    name="title"
    value={defaults.title}
    maxlength={maxTitleLength}
    required={creating || null}
  />

  <label for="description" required>Description</label>
  <textarea
    name="description"
    rows="2"
    height="1em"
    value={defaults.description}
  />

  <label for="url">URL</label>
  <input
    type="text"
    name="url"
    value={defaults.url}
    required={creating || null}
    pattern="https?:\/\/.*"
  />
  <label for="software">
    Is this a software project?
    <input type="checkbox" name="software" checked={defaults.software} />
  </label>

  <label for="show">
    Show this item?
    <input type="checkbox" name="show" checked={defaults.show} />
  </label>

  <!-- <label for="color" class="color-radio-group">
    <span>Color:</span>
    {#each colors as colorOption, i}
      <label class="color-radio" for="color-radio-{i}">
        <input
          id="color-radio-{i}"
          type="radio"
          name="color"
          value={colorOption}
          required
        />
        <div class="color-preview" style="background-color: {colorOption};" />
      </label>
    {/each}
  </label> -->

  <!-- Image upload -->
  <label for="image">Upload an image</label>
  <input
    type="file"
    name="image"
    accept=".jpg, .jpeg, .png"
    required={creating || null}
    bind:this={imageInput}
    bind:files
  />

  <input type="hidden" name="imageBase64" bind:value={imageBase64} />
  <input type="hidden" name="id" value={project?.id} />
  <button type="submit">{type}</button>
</form>

<style lang="scss">
  #project-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    input,
    button,
    label,
    textarea {
      padding: 1px;
      margin: 2px 0;
      resize: none;
    }
    button {
      width: min(50%, 200px);
      margin: 10px auto 0 auto;
      padding: 2px;
      cursor: pointer;
    }
    select {
      display: inline;
    }

    label.color-radio-group {
      display: flex;
      span {
        padding-right: 10px;
        transform: translateY(25%);
      }
      label.color-radio {
        position: relative;
        cursor: pointer;
        height: 2em;
        flex: 1;
        input {
          opacity: 0;
          &:checked + .color-preview {
            border: solid 1px black;
          }
          &:not(:checked) + .color-preview {
            opacity: 0.5;
          }
        }
        .color-preview {
          display: inline-block;
          position: absolute;
          left: 0;
          width: 100%;
          height: 100%;
          &:hover {
            border: solid 1px grey;
          }
        }
      }
    }
  }
</style>
