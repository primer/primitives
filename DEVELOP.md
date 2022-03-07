## Directory structure

`tokens/`: JSON formatted design data organized by namespace and category
`tokens/base`: base level data typically
`tokens/functional`: semantic meaning, opinionated UI values, and the building blocks to UI components and patterns

## Naming convention

[namespace]-[item]-[variant]-[property]-[modifier]

```
{
    "gh": { <------------------------------------------------ Namespace
        "control": { <--------------------------------------- Item
            "xsmall": { <------------------------------------ Variant
                "paddingInline": { <------------------------- Property
                    "condensed": { "value": "#8360FF" }, <--- Modifier
                }
            }
        }
    }
}
```


## Things to note here
- include px unit in raw JSON for clarity
- "original": {
        "value": "2px"
      },
- camelCase explanation
