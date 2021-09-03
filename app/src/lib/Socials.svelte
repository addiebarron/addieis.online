<style lang="scss">
  @import "../styles/theme";
  .socials {
    display: flex;
    align-items: center;
    width: 150px;
    @media only screen and (max-width: 890px) {
      width: 50%;
      margin: auto;
    }
    padding-top: 10px;
    .social {
      flex: 1;
      height: 40px;
      width: 40px;
      margin: 5px;
      svg {
        width: 100%;
        height: 100%;
      }
      path,
      polygon {
        fill: black;
        @include transition((fill), 0.2s, ease);
      }
      &:hover {
        &.twitter {
          path,
          polygon {
            fill: $twitter;
          }
        }
        &.bc {
          path,
          polygon {
            fill: $bc;
          }
        }
        &.github {
          path,
          polygon {
            fill: $github;
          }
        }
        &.linkedin {
          path,
          polygon {
            fill: $linkedin;
          }
        }
      }
      &.bc svg {
        @include transform(translateY(16%));
      }
      &.github svg {
        @include transform(scale(0.9));
      }
    }
  }
</style>

<div class="socials">
  <a
    class="social twitter"
    href="https://twitter.com/lengthypooch"
    target="_blank">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 216 216"
      xml:space="preserve"><path
        d="M67.9,198C149.4,198,194,130.5,194,71.9c0-1.9,0-3.8-0.1-5.7c8.7-6.3,16.2-14,22.1-22.9c-8.1,3.6-16.7,5.9-25.5,7c9.3-5.5,16.2-14.2,19.5-24.5c-8.7,5.2-18.2,8.8-28.1,10.8c-16.8-17.8-44.9-18.7-62.7-1.9c-11.5,10.8-16.4,27-12.8,42.3C70.7,75.1,37.5,58.3,15,30.6C3.3,50.8,9.3,76.7,28.8,89.7c-7.1-0.2-14-2.1-20.1-5.5c0,0.2,0,0.4,0,0.6c0,21.1,14.9,39.3,35.6,43.4c-6.5,1.8-13.4,2-20,0.8c5.8,18.1,22.4,30.4,41.4,30.8c-15.7,12.3-35.1,19-55,19c-3.5,0-7-0.2-10.5-0.6C20.3,191.1,43.8,198,67.9,198" /></svg>
  </a>
  <a class="social bc" href="https://bandcamp.com/addie" target="_blank">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 216 216"
      style="enable-background:new 0 0 216 216;"
      xml:space="preserve"><polygon
        id="rhomboid"
        points="0 125 67 0 212 0 145 125" /></svg>
  </a>
  <a
    class="social github"
    href="https://github.com/addiebarron"
    target="_blank">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="4px"
      viewBox="0 0 16 16"
      style="enable-background:new 0 0 216 216;"
      xml:space="preserve"><path
        fill-rule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>
  </a>
  <a
    class="social linkedin"
    href="https://linkedin.com/in/addie-barron"
    target="_blank">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="60 -1.5 25 25"
      xml:space="preserve"><path
        class="st0"
        d="m81.3 0h-17.9c-0.8 0-1.5 0.7-1.6 1.5v18c0 0.8 0.7 1.5 1.6 1.5h17.9c0.8 0 1.5-0.7 1.6-1.5v-18c0-0.8-0.7-1.5-1.6-1.5zm-13.2 17.9h-3.1v-10h3.1v10zm-1.6-11.4c-1 0-1.8-0.8-1.8-1.8s0.8-1.8 1.8-1.8 1.8 0.8 1.8 1.8-0.8 1.8-1.8 1.8zm13.3 11.4h-3.1v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5h-3.1v-10h3v1.4c0.6-1 1.7-1.7 2.9-1.6 3.2 0 3.7 2.1 3.7 4.8l0.1 5.4z" /></svg>
  </a>
</div>
