# Problem Solved

1. Disabling pull-to-refresh (case in google chrome mobile)

```css
body {
  /* Disables pull-to-refresh but allows overscroll glow effects. */
  overscroll-behavior-y: contain;
}
```
Reference: [Chrome Dev](https://developer.chrome.com/blog/overscroll-behavior#disabling_pull-to-refresh)
