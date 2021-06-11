String.prototype.cleanup = function () {
  return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
};

function emoji_click(shortcut) {
  const textarea_divs = document.querySelectorAll(".cmty-post-textarea");
  const current_textarea = textarea_divs[textarea_divs.length - 1];
  current_textarea.value += shortcut;
  current_textarea.focus();
}

function replace_emojis(emojis) {
  const smiley_holders = document.querySelectorAll(
    ".cmty-posting-smiley-holder"
  );

  // make sure it's not null
  if (smiley_holders) {
    // loop through each smiley
    for (i = 0; i < smiley_holders.length; i++) {
      if (
        !smiley_holders[i].innerHTML.includes(
          `<span style="display:none;">Completed</span>`
        )
      ) {
        // remove existing emojis, and add the custom emojis
        smiley_holders[i].innerHTML = "";

        // looop through json
        for (var key in emojis) {
          const value = emojis[key];
          console.log(key, " | ", value);

          smiley_holders[
            i
          ].innerHTML += `<img src="${value}" id="${key.cleanup()}" style="cursor: pointer; width: 20px; margin: 4px;">`;
        }

        // indication to show that it has completed
        smiley_holders[
          i
        ].innerHTML += `<span style="display:none;">Completed</span>`;

        // event listener for click
        // for (var key in emojis) {
        //   document
        //     .getElementById(`${key.cleanup()}`)
        //     .addEventListener("click", function () {
        //       emoji_click(key.cleanup());
        //     });
        // }
        const keys = Object.keys(emojis);
        keys.forEach((x) => {
          document
            .querySelector(`#${x.cleanup()}`)
            .addEventListener("click", function () {
              emoji_click(x);
            });
        });
      }
    }
  }
}

main_interval = function () {
  const emojis = {
    " :thonk: ": " https://i.ibb.co/j3pSZBM/hiboi.png ",
    " :hahahaha: ": " https://i.imgur.com/6x8Gpyl.png ",
  };

  replace_emojis(emojis);
};

window.onload = setInterval(main_interval, 100);
