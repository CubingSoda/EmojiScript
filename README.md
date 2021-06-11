# EmojiScript - A Better List of Emojis

EmojiScript is an AoPS script created by <a href='https://artofproblemsolving.com/community/user/546163' target='_blank'>forester2015</a> (with help from <a href='https://artofproblemsolving.com/community/user/539447' target='_blank'>Wukong</a>) in order to give AoPS a wider list of emojis to choose from. The idea of the script is simple; finding a certain string, such as `:pog:`, and replacing it with an `[img]` tag with its respective image; for example, `[img]www.imageURL.com[/img]`.

## Installation

There are only two things you need to use EmojiScript:
1. Install either <a href='https://www.tampermonkey.net/' target='_blank'>Tampermonkey</a> or <a href='https://violentmonkey.github.io/get-it/' target='_blank'>Violentmonkey</a>
2. Click <a href="../../raw/main/script.user.js">here</a>

## Custom Emojis

Be sure you have the userscript installed before adding custom emojis.

Now, EmojiScript already comes premade with many emojis that are available to use without having to do anything! You can even suggest for more to be added by filling out the <a href="https://forms.gle/KWbqeHSixazhfXEe7">Google Form</a>. However, if you just want your own set, that's okay too.

To get your own custom emojis, go <a href='https://pastebin.pl/' target='_blank'>here</a> and type in your custom emojis. They must be in a **valid** JSON format. The key should be the emoji short-hand, like `:pog:`. The value should be the image URL to the corresponding key. For example, `":pog:" : "https://i.imgur.com/xtwJIzL.png"` is a valid key-value pair.

Here are some tips:

- Wrap your key-value pair in curly braces {}
- Use **double** quotes; single quotes don't work!
- Separate your key and value with a colon
- End each key-value pair with a comma
- Don't put a comma on the last line

Then, click "create". Click the button to view raw:

<p align="center">
  <img width="600" src="https://i.imgur.com/5hyNUXW.png">
</p>

It will open a new tab with your JSON. Copy the URL, and open up the userscript. You can do this by clicking on the userscript » click "dashboard" » click "EmojiScript" » replace the text inside the quotes:

```
  const emoji_json_url =
    "https://raw.githubusercontent.com/Custom-AoPS-Emoji-Userscript/main/main/emoji-list.json";
```

with your pastebin.pl URL. 

## Bugs
Although we have tried our best to look out for bugs, we still make mistakes. Please report your bug by

- Sending a AoPS PM to <a href='https://artofproblemsolving.com/community/user/546163' target='_blank'>forester2015</a> or <a href='https://artofproblemsolving.com/community/user/539447' target='_blank'>Wukong</a>
