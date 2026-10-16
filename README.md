# ADS

Ad scripts in this repository can be loaded into a plain HTML project from GitHub. The repository must be public.

## Monetag direct link

GitHub's `raw.githubusercontent.com` URL serves JavaScript as `text/plain`, so it cannot be used directly in a `<script src="...">` tag. Fetch the source and add it as an inline script instead:

```html
<div id="monetag-link"></div>

<script>
  function loadADSScript(path) {
    const url = `https://raw.githubusercontent.com/ferrofy/ADS/refs/heads/main/${path}`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${path}: HTTP ${response.status}`);
        }
        return response.text();
      })
      .then(source => {
        const script = document.createElement("script");
        script.textContent = source;
        document.head.appendChild(script);
      });
  }

  loadADSScript("MoneTag/Direct_Link.js")
    .then(() => {
      Monetag_Link(
        0,
        "https://example.com",
        "Visit the offer",
        document.getElementById("monetag-link")
      );
    })
    .catch(error => console.error("Could not load the ADS script:", error));
</script>
```

`Clicks` is the number of initial clicks that open the Monetag offer in a new tab. Subsequent clicks open the `Link` destination. The `Text` and `Container` arguments are optional; when no container is passed, the button is added beside the calling script when possible, or to the document body.

### Other scripts

Pass a script's repository path to the same loader. For example, to load all the available scripts:

```js
Promise.all([
  loadADSScript("MoneTag/Notifications.js"),
  loadADSScript("AdsTerra/Direct_Link.js"),
  loadADSScript("AdsTerra/Banners.js")
]).catch(error => console.error("Could not load the ADS scripts:", error));
```

To load a fixed version instead of the latest `main` branch, replace `refs/heads/main` in `loadADSScript` with `refs/heads/<branch>` or `refs/tags/<tag>`.

See [ADS.html](./ADS.html) for examples of the available notification, direct-link, and banner functions.
