# Payroo Embed JavaSript SDK

## Installation

### JavaScript/TypeScript SDK

```bash
npm install @payroo/embed-sdk
```

## Usage

To embed a payroll component, you are first required to create an embed session and a signed component URL.
This can be done using the Payroo API.

### Step 1: Create an Embed URL

You'd typically do this on your server-side code.
_Note: an API key is required to access the Payroo embed API._

You can find an example of the server implementation in the [examples/server](./examples/server) directory.

React [API Documentation](https://docs.payroo.com.au/payroo-api#tag/embeds)

### Step 2: Embed the Component

```ts

import { Embed, Events } from "@payroo-group/embed-sdk";

// Embed URL that you received from the server
const url = "https://embed.payroo.com.au/component/...";

// The HTML element where the embed will be rendered
const container = window.document.getElementById("payrun-history");

// Create an embed instance
const embed = new Embed(url, options);

// Render the embed component onto the container element
embed.mount(container);

// Listen for events
embed.on(Events.COMPONENT_READY, () => {
  console.log("Hide the loading spinner now!");
});

// Remove the embed component from the DOM
embed.unmount();
```

#### Options 

| Name | Usage | Default |
| --------------- | --------------- | --------------- |
| extraAllowedOrigins | In case embed URL is from a different origin, you can the origin in this options. Example: ["https://sandbox-embed.payroo.com.au"]| ["https://embed.payroo.com.au"] |
| autoHeightAdjust | Adjusts the height of the embed automatically based on the content inside | true |


**Auto Height Adjustment**

When using the `autoHeightAdjust` option, the embed will automatically adjust its height based on the content inside.
This is useful for components that may have dynamic content or varying heights.
For this to work, the container element should have the style `overflow-y: auto` applied to it.


## Example Applications

You can find example applications demonstrating the usage of the Payroo embed components in the [examples](./examples) directory.

1. [Server Example](./examples/server/README.md) - A simple server implementation to create embed URLs.
2. [React Example](./examples/react-app/README.md) - A React application demonstrating the
3. [JavaScript Example](./examples/vanilla-app/README.md) - A JavaScript application demonstrating the usage of the embed components.


## Development

**Install Dependencies**

```bash
npm install
```


