# eslint-config-lottery

This is the official eslint config for lottery.com

## Installation

### Install Package

`npm install git+https://github.com/autolotto/eslint-config-lottery.git --save-dev`

### Install Peer Dependencies

```sh
npm install eslint --save-dev
npm install prettier@1.13.5 --save-dev --save-exact
```

*It is recommended that you install an exact version of Prettier as they may introduce formatting changes in minor versions.*

### Make ESLint Config File

Add `.eslintrc` to project root

```json
{
  "extends": "eslint-config-lottery"
}
```

### Make Prettier Config File

Add `.prettierrc` to project root

```json
{
  "printWidth": 120,
  "singleQuote": true
}
```

### Makde Editorconfig File

Recommended: Add `.editorconfig` to project root

```ini
# http://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 120

[*.md]
max_line_length = 0
```

## FAQ

**Should I override the rule blah-blah? I don't like it.**

No. If you want to do this, you have to ask the team. If a rule really doesn't make sense then we should remove it from this config.

**Can I disable the rule on one line in my code, I have a good reason.**

Yes. That's ok. Use a single-line disable.

**Are we or can we use the airbnb eslint configuration?**

What is this 2015?

No, we are using the core "best practice" config packages.
