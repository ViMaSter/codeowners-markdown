# CODEOWNERS Markdown Generator

Reference input format: `/tests/fixture`  
Reference output format: `/tests/expected.md`

## Usage
```sh
    git clone https://github.com/ViMaSter/codeowners-markdown.git .
    npm install
    output=$(node main.js tests/fixture)
    echo "$output" > docs.md
```

## Tests
```sh
    npm run test
```