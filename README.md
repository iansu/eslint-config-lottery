# eslint-config-lottery

This is the official ESLint config for Lottery.com

## Installation

### Install Package

`yarn add --dev eslint-config-lottery`


### Install Peer Dependencies

```sh
yarn add --dev eslint lint-staged husky
yarn add --dev --exact prettier@1.13.5
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

Optional: If there are any files you want to exclude from Prettier add `.prettierignore` to project root

### Make Editorconfig File

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
trim_trailing_whitespace = false

[COMMIT_EDITMSG]
max_line_length = 0
```

### Add Scripts

Add scripts for linting and formatting to `package.json`

```json
scripts: {
  "precommit": "lint-staged",
  "lint": "eslint .",
  "format:all": "prettier --write \"**/*.{js,json,graphql}\"",
  "format:check": "prettier --debug-check \"**/*.{js,json,graphql}\""
}
```

### Add Precommit Hook

Add a precommit hook to `package.json` to automatically lint and format any files staged for commit

```json
"lint-staged": {
  "concurrent": false,
  "linters": {
    "*.js": [
      "eslint --quiet",
      "git add"
    ],
    "*.{js,json,graphql}": [
      "prettier --write",
      "git add"
    ]
  }
}
```

### Format Code

If you've added Prettier to an existing project you will want to format all the code. The precommit hook only updates files that have been changed and staged for commit. To format the entire codebase run

`npm run format:all`

## FAQ

**Should I override the rule blah-blah? I don't like it.**

No. If you want to do this, you have to ask the team. If a rule really doesn't make sense then we should remove it from this config.

**Can I disable the rule on one line in my code, I have a good reason.**

Yes. That's ok. Use a single-line disable.

**Are we or can we use the airbnb eslint configuration?**

What is this 2015?

No, we are using the core "best practice" config packages.
