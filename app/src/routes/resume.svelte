<script>
  import PDF from "svelte-pdf";
</script>

<div class="container">
  <p><a href="/resume.pdf">Download as PDF</a></p>
  <div class="resume">
    <PDF url="/resume.pdf" showButtons={false} showBorder={false} />
  </div>
</div>

<style>
  .container {
    text-align: center;
    margin: auto;
    margin-top: 20px;
  }
  a {
    color: black;
  }
  .resume {
    margin: 20px;
  }
  :global(#topBtn) {
    display: none; /* svelte-pdf thing */
  }
</style>
