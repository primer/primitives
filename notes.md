[category]-[type]-[item]-[subitem]-[state]

// colors.json
{
    color: {
        background: {
            button: {
                primary: {
                    active: {
                        value: #000
                    }
                }
            }
        },
        foreground: ...
    }
}

----

gh-control-medium-paddingInline-condensed

[namespace] - if it comes from base, we know namespace is base. Otherwise, it's gh

control

-[item]-[variant]-[property]-[modifier]

// size.json
{
    size: {
        control: {
            small: {
                paddingInline: {
                    condensed: {
                        value: 16
                    }
                    normal: {
                        value: 20
                    }
                    spacious: {
                        value: 24
                    }
                }
            }
        },
        avatar: {
            small: {
                value: 16
            }
        }
    }
}

gh-control-medium-paddingInline-condensed

gh-control
  -minTarget
  -xsmall, -small, -medium, -large, -xlarge
    -size
    -paddingBlock
    -paddingInline
       -condensed, -normal, -spacious
    -lineBoxHeight
    -gap

// size-CTI.json
{
    size: { // category
        control: { // type
            paddingInline: { // item
                medium: { // subitem
                    condensed: { // state
                        value: 16
                    }
                }
            }
        },
        avatar: { // type
            small: { // item
                small: { // subitem
                    value: 20
                }
            },
            minTarget: {
                small: {
                    value: 20
                }
            }
        }
    }
}


// source:
// tokens/base/size/size.json
{
    size: {
        size: {
            "4": {
                "value": "4",
                "attributes": {
                "category": "size"
                }
            },
        }
    }
}

// run: node build.js

// multiple outputs: 

// css

transforms are applied:

[
    'attribute/cti',
    'size/pxToRem',
    'functional/prefix',
    'base/prefix',
    'attribute/typescript',
    'attribute/css'
  ]


// json
