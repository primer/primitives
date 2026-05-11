import React from 'react'
// eslint-disable-next-line import/extensions
import ColorPreview from '../../StorybookComponents/ColorPreview/ColorPreview'

export default {
  title: 'Color/Functional/Syntax',
  parameters: {
    controls: {hideNoControlsWarning: true},
    options: {
      showPanel: false,
    },
  },
}

export const Code = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
      <div
        style={{
          backgroundColor: 'var(--bgColor-default)',
          border: '1px solid var(--borderColor-muted)',
          borderRadius: 8,
          padding: 24,
          fontFamily: '"Courier New", monospace',
          fontSize: '14px',
          lineHeight: 1.6,
          overflow: 'auto',
        }}
      >
        <div style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>
          {/* Comment */}
          <span style={{color: 'var(--prettylights-syntax-comment)'}}>{'// Comment - used for code comments'}</span>
          <br />
          {/* Keyword */}
          <span style={{color: 'var(--prettylights-syntax-keyword)'}}>const</span>{' '}
          <span style={{color: 'var(--prettylights-syntax-variable)'}}>name</span>
          {' = '}
          {/* String */}
          <span style={{color: 'var(--prettylights-syntax-string)'}}>'example'</span>
          ;
          <br />
          {/* String Regexp */}
          <span style={{color: 'var(--prettylights-syntax-keyword)'}}>const</span>{' '}
          <span style={{color: 'var(--prettylights-syntax-variable)'}}>pattern</span>
          {' = '}
          <span style={{color: 'var(--prettylights-syntax-stringRegexp)'}}>/regex/g</span>
          ;
          <br />
          {/* Constant */}
          <span style={{color: 'var(--prettylights-syntax-constant)'}}>Math</span>
          <span>.PI</span>
          <br />
          {/* Entity */}
          <span style={{color: 'var(--prettylights-syntax-keyword)'}}>class</span>{' '}
          <span style={{color: 'var(--prettylights-syntax-entity)'}}>MyClass</span>
          {' {'}
          <br />
          {/* Entity Tag */}
          <span style={{color: 'var(--prettylights-syntax-entityTag)'}}>{'  <Component />'}</span>
          <br />
          {'}'}
          <br />
          {/* Meta Diff Range */}
          <span style={{color: 'var(--prettylights-syntax-comment)'}}> </span>
          <br />
          <span style={{color: 'var(--prettylights-syntax-metaDiffRange)'}}>{'@@'}</span>
          <br />
          {/* Markup - Heading */}
          <span style={{color: 'var(--prettylights-syntax-markup-heading)'}}>{'# Heading'}</span>
          <br />
          {/* Markup - List */}
          <span style={{color: 'var(--prettylights-syntax-markup-list)'}}>{'- List item'}</span>
          <br />
          {/* Markup - Inserted */}
          <span
            style={{
              backgroundColor: 'var(--prettylights-syntax-markup-inserted-bg)',
              color: 'var(--prettylights-syntax-markup-inserted-text)',
            }}
          >
            {'+'}
          </span>
          <span style={{color: 'var(--prettylights-syntax-markup-inserted-text)'}}>{' Added line'}</span>
          <br />
          {/* Markup - Deleted */}
          <span
            style={{
              backgroundColor: 'var(--prettylights-syntax-markup-deleted-bg)',
              color: 'var(--prettylights-syntax-markup-deleted-text)',
            }}
          >
            {'-'}
          </span>
          <span style={{color: 'var(--prettylights-syntax-markup-deleted-text)'}}>{' Removed line'}</span>
          <br />
          {/* Markup - Changed */}
          <span
            style={{
              backgroundColor: 'var(--prettylights-syntax-markup-changed-bg)',
              color: 'var(--prettylights-syntax-markup-changed-text)',
            }}
          >
            {'~'}
          </span>
          <span style={{color: 'var(--prettylights-syntax-markup-changed-text)'}}>{' Changed line'}</span>
          <br />
          {/* Bracket Highlighter - Angle */}
          <span style={{color: 'var(--prettylights-syntax-bracketHighlighterAngle)'}}>{'<tag>'}</span>
          <br />
          {/* Bracket Highlighter - Unmatched */}
          <span style={{color: 'var(--prettylights-syntax-bracketHighlighterUnmatched)'}}>{'[ unmatched bracket'}</span>
          <br />
          {/* Invalid - Illegal Text */}
          <span style={{color: 'var(--prettylights-syntax-invalidIllegal-text)'}}>{'⚠ Invalid syntax'}</span>
          <br />
          {/* Invalid - Illegal BG */}
          <span
            style={{
              backgroundColor: 'var(--prettylights-syntax-invalidIllegal-bg)',
              color: 'var(--prettylights-syntax-invalidIllegal-text)',
            }}
          >
            {' Error: syntax error '}
          </span>
          <br />
          {/* Markup - Bold */}
          <span style={{color: 'var(--prettylights-syntax-markup-bold)', fontWeight: 'bold'}}>{'**bold text**'}</span>
          <br />
          {/* Markup - Italic */}
          <span style={{color: 'var(--prettylights-syntax-markup-italic)', fontStyle: 'italic'}}>
            {'_italic text_'}
          </span>
          <br />
          {/* Storage - Modifier - Import */}
          <span style={{color: 'var(--prettylights-syntax-storageModifierImport)'}}>{'import'}</span>
          <br />
          {/* Carriage Return */}
          <span
            style={{
              backgroundColor: 'var(--prettylights-syntax-carriageReturn-bg)',
              color: 'var(--prettylights-syntax-carriageReturn-text)',
            }}
          >
            {' ↵ '}
          </span>
          <br />
          {/* Constant Other Reference Link */}
          <span style={{color: 'var(--prettylights-syntax-constantOtherReferenceLink)'}}>{'[link]'}</span>
          <br />
          {/* Markup - Ignored */}
          <span
            style={{
              backgroundColor: 'var(--prettylights-syntax-markup-ignored-bg)',
              color: 'var(--prettylights-syntax-markup-ignored-text)',
            }}
          >
            {' Ignored content'}
          </span>
          <br />
          {/* Sublime Linter Gutter Mark */}
          <span style={{color: 'var(--prettylights-syntax-sublimeLinterGutterMark)'}}>{'◯ Linter mark'}</span>
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        <h2>All Syntax Tokens</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16}}>
          {[
            {name: 'Comment', var: '--prettylights-syntax-comment'},
            {name: 'Constant', var: '--prettylights-syntax-constant'},
            {name: 'Constant - Reference Link', var: '--prettylights-syntax-constantOtherReferenceLink'},
            {name: 'Entity', var: '--prettylights-syntax-entity'},
            {name: 'Entity Tag', var: '--prettylights-syntax-entityTag'},
            {name: 'Keyword', var: '--prettylights-syntax-keyword'},
            {name: 'String', var: '--prettylights-syntax-string'},
            {name: 'String Regexp', var: '--prettylights-syntax-stringRegexp'},
            {name: 'Variable', var: '--prettylights-syntax-variable'},
            {name: 'Bracket Highlighter - Angle', var: '--prettylights-syntax-bracketHighlighterAngle'},
            {name: 'Bracket Highlighter - Unmatched', var: '--prettylights-syntax-bracketHighlighterUnmatched'},
            {name: 'Carriage Return - BG', var: '--prettylights-syntax-carriageReturn-bg'},
            {name: 'Carriage Return - Text', var: '--prettylights-syntax-carriageReturn-text'},
            {name: 'Invalid - Illegal Text', var: '--prettylights-syntax-invalidIllegal-text'},
            {name: 'Invalid - Illegal BG', var: '--prettylights-syntax-invalidIllegal-bg'},
            {name: 'Markup - Bold', var: '--prettylights-syntax-markup-bold'},
            {name: 'Markup - Italic', var: '--prettylights-syntax-markup-italic'},
            {name: 'Markup - Heading', var: '--prettylights-syntax-markup-heading'},
            {name: 'Markup - List', var: '--prettylights-syntax-markup-list'},
            {name: 'Markup - Inserted BG', var: '--prettylights-syntax-markup-inserted-bg'},
            {name: 'Markup - Inserted Text', var: '--prettylights-syntax-markup-inserted-text'},
            {name: 'Markup - Deleted BG', var: '--prettylights-syntax-markup-deleted-bg'},
            {name: 'Markup - Deleted Text', var: '--prettylights-syntax-markup-deleted-text'},
            {name: 'Markup - Changed BG', var: '--prettylights-syntax-markup-changed-bg'},
            {name: 'Markup - Changed Text', var: '--prettylights-syntax-markup-changed-text'},
            {name: 'Markup - Ignored BG', var: '--prettylights-syntax-markup-ignored-bg'},
            {name: 'Markup - Ignored Text', var: '--prettylights-syntax-markup-ignored-text'},
            {name: 'Meta Diff Range', var: '--prettylights-syntax-metaDiffRange'},
            {name: 'Storage - Modifier - Import', var: '--prettylights-syntax-storageModifierImport'},
            {name: 'Sublime Linter Gutter Mark', var: '--prettylights-syntax-sublimeLinterGutterMark'},
          ].map(color => (
            <ColorPreview color={color.var} canvasColor={color.var.replace('--', '')} key={color.var} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const ANSI = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
      <div
        style={{
          backgroundColor: `var(--bgColor-default)`,
          border: '2px solid var(--borderColor-muted)',
          borderRadius: 8,
          padding: 24,
          fontFamily: '"Courier New", "Monaco", monospace',
          fontSize: '14px',
          lineHeight: 1.6,
          overflow: 'auto',
          color: 'var(--color-ansi-white)',
        }}
      >
        <div style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>
          <span style={{color: 'var(--color-ansi-black)'}}>user@terminal</span>
          <span style={{color: 'var(--color-ansi-black)'}}>:</span>
          <span style={{color: 'var(--color-ansi-black-bright)'}}>~/project</span>
          <span style={{color: 'var(--color-ansi-white)'}}> $ </span>
          <span style={{color: 'var(--color-ansi-yellow)'}}>npm test</span>
          <br />
          <br />
          <span style={{color: 'var(--color-ansi-white-bright)'}}>▶ Test Suite for Components</span>
          <br />
          <br />
          <span style={{color: 'var(--color-ansi-green-bright)'}}>✓ Button component</span>{' '}
          <span style={{color: 'var(--color-ansi-white)'}}>(42ms)</span>
          <br />
          <span style={{color: 'var(--color-ansi-green-bright)'}}>✓ Input field</span>{' '}
          <span style={{color: 'var(--color-ansi-white)'}}>(38ms)</span>
          <br />
          <span style={{color: 'var(--color-ansi-red-bright)'}}>✗ Form validation</span>{' '}
          <span style={{color: 'var(--color-ansi-white)'}}>(1ms)</span>
          <br />
          <span style={{color: 'var(--color-ansi-gray)'}}>{'  → Expected value to be true'}</span>
          <br />
          <span style={{color: 'var(--color-ansi-green-bright)'}}>✓ Modal dialog</span>{' '}
          <span style={{color: 'var(--color-ansi-white)'}}>(55ms)</span>
          <br />
          <br />
          <span style={{color: 'var(--color-ansi-white-bright)'}}>▶ Test Suite for Utilities</span>
          <br />
          <br />
          <span style={{color: 'var(--color-ansi-green-bright)'}}>✓ Format date</span>{' '}
          <span style={{color: 'var(--color-ansi-white)'}}>(5ms)</span>
          <br />
          <span style={{color: 'var(--color-ansi-green-bright)'}}>✓ Parse JSON</span>{' '}
          <span style={{color: 'var(--color-ansi-white)'}}>(8ms)</span>
          <br />
          <br />
          <span style={{color: 'var(--color-ansi-magenta-bright)'}}>Support us</span>
          <br />
          <span style={{color: 'var(--color-ansi-magenta)'}}>A small donation can keep out effort going.</span>
          <br />
          <br />
          <span style={{color: 'var(--color-ansi-yellow-bright)'}}>⚠ Warnings (2)</span>
          <br />
          <span style={{color: 'var(--color-ansi-yellow)'}}>{'  › Deprecated API usage in utils.ts:45'}</span>
          <br />
          <span style={{color: 'var(--color-ansi-yellow)'}}>{'  › Missing JSDoc comment in helpers.ts:12'}</span>
          <br />
          <br />
          <span style={{color: 'var(--color-ansi-blue-bright)'}}>{'Tips: 2'}</span>
          <br />
          <span style={{color: 'var(--color-ansi-green-bright)'}}>{'Passed: 7'}</span>
          <br />
          <span style={{color: 'var(--color-ansi-red-bright)'}}>{'Failed: 1'}</span>
          <br />
          <span style={{color: 'var(--color-ansi-yellow-bright)'}}>{'Warnings: 2'}</span>
          <br />
          <span style={{color: 'var(--color-ansi-white)'}}>{'Duration: 2.4s'}</span>
          <br />
          <br />
          <span style={{color: 'var(--color-ansi-white-bright)'}}>user@terminal</span>
          <span style={{color: 'var(--color-ansi-white)'}}>:</span>
          <span style={{color: 'var(--color-ansi-blue)'}}>~/project</span>
          <span style={{color: 'var(--color-ansi-white)'}}>$ </span>
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        <h2>Color Palette</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16}}>
          {[
            {name: 'Black', var: '--color-ansi-black'},
            {name: 'Black Bright', var: '--color-ansi-black-bright'},
            {name: 'Red', var: '--color-ansi-red'},
            {name: 'Red Bright', var: '--color-ansi-red-bright'},
            {name: 'Green', var: '--color-ansi-green'},
            {name: 'Green Bright', var: '--color-ansi-green-bright'},
            {name: 'Yellow', var: '--color-ansi-yellow'},
            {name: 'Yellow Bright', var: '--color-ansi-yellow-bright'},
            {name: 'Blue', var: '--color-ansi-blue'},
            {name: 'Blue Bright', var: '--color-ansi-blue-bright'},
            {name: 'Magenta', var: '--color-ansi-magenta'},
            {name: 'Magenta Bright', var: '--color-ansi-magenta-bright'},
            {name: 'Gray', var: '--color-ansi-gray'},
            {name: 'White', var: '--color-ansi-white'},
            {name: 'White Bright', var: '--color-ansi-white-bright'},
          ].map(color => (
            <ColorPreview color={color.var} canvasColor={color.var.replace('--', '')} key={color.var} />
          ))}
        </div>
      </div>
    </div>
  )
}
