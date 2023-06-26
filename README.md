# Contracts Line Counter

This action has been created as an exercise to learn how to create custom Github Actions to be published in the Github Marketplace.

It simply counts the lines of the files under the `/contracts` folder.

# Usage

```
 - name: Run Custom Action
  uses: javiesses/contracts-line-counter@v1
  id: custom
```

# Output

It exposes two fields in the output object:

`lineCounts`: an array of objects containing `{ filename: lineCount }`. Can be accessed as `${{ steps.custom.outputs.lineCounts }}`

`html`: an HTML table that can be used as a report containg the amount of lines per file. Can be accessed as `${{ steps.custom.outputs.html }}`

