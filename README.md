# Payroo Components Embed

Easily embed Payroo payroll components into your web applications using our JavaScript and React SDKs.

## Installation

### JavaScript/TypeScript SDK

```bash
npm install @payroo-group/embed-sdk
```

### React SDK

```bash
npm install @payroo-group/embed-sdk-react
```

## Usage

To embed a payroll component, you must first create an embed session and a signed component URL using the Payroo API.

### Step 1: Create an Embed URL

This step should be performed on your server.  
_Note: An API key is required to access the Payroo embed API._

See a server implementation example in [examples/server](./examples/server).

For detailed API documentation, visit the [Payroo API Docs](https://docs.payroo.com.au/payroo-api#tag/embeds).

**Create Embed URL example**

`embed-sdk` provides TypeScript for available components and component parameters.

```ts
import type { Components } from '@payroo-group/embed-sdk'

const component = Components.VIEW_REPORT
const params: ComponentSchemaMap[component] = {
  reportType: "finalisations",
}

await fetch('https://embed.payroo.com.au/api/embed/create-url`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": "<api key">,
  },
  body: JSON.stringify({
    sessionId,
    component,
    params,
  }),
})

// This generates a link to view finalisations report

// Another example
const component = Components.PAYRUN_LIST
const params: ComponentSchemaMap[component] = {
  showStatSummary: false,
  showFilter: true,
}
```

### Step 2: Embed the Component (JavaScript/TypeScript)

```ts
import { Embed, Events } from "@payroo-group/embed-sdk";

// Embed URL received from your server
const url = "https://embed.payroo.com.au/component/...";

// The HTML element where the embed will be rendered
const container = document.getElementById("payrun-history");

// Create an embed instance
const embed = new Embed(url, options);

// Render the embed component
embed.mount(container);

// Listen for events
embed.on(Events.COMPONENT_READY, () => {
  console.log("Hide the loading spinner now!");
});

// Remove the embed component from the DOM
embed.unmount();
```

#### Options

| Name                | Description                                                                                       | Default                              |
|---------------------|---------------------------------------------------------------------------------------------------|--------------------------------------|
| extraAllowedOrigins | Additional allowed origins for the embed URL. Example: `["https://sandbox-embed.payroo.com.au"]` | `["https://embed.payroo.com.au"]`    |
| autoHeightAdjust    | Automatically adjusts the height of the embed based on its content.                              | `true`                               |

**Auto Height Adjustment:**  
When `autoHeightAdjust` is enabled, the embed automatically resizes based on its content.  
Ensure the container element has `overflow-y: auto` style applied.

## React SDK Usage

The React SDK provides convenient components for embedding payroll features in React apps.

- Components are available for payrun history, payslips, and more.
- The SDK manages the embed lifecycle and event handling.
- Customize behavior and appearance via props.

Typically, the embed URL is fetched from your server.  
Pass a function to the `getEmbedUrl` prop to provide the URL dynamically.

```tsx
import { PayrunList } from "@payroo-group/embed-sdk-react";

const url = "https://embed.payroo.com.au/component/payrun-history...";

const App = () => (
  <div>
    <h1>Payrun History</h1>
    <PayrunList
      getEmbedUrl={() => url}
      showFilter
      showCreateButton
      onClickPayrun={(payrun) => {
        console.log("Payrun clicked:", payrun);
        window.location.href = `/payrun/${payrun.id}`;
      }}
    />
  </div>
);
```

## Example Applications

Find example applications in the [examples](./examples) directory:

1. [Server Example](./examples/server/README.md) – Simple server to create embed URLs.
2. [React Example](./examples/react-app/README.md) – React app demonstrating SDK usage.
3. [JavaScript Example](./examples/vanilla-app/README.md) – Vanilla JS app using the embed components.

### Running the Examples

1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Navigate to the example directory:
   ```bash
   cd examples/server
   ```
4. Start the server:
   ```bash
   npm run start
   ```
5. Start the client application:
   ```bash
   cd ../react-app
   npm run dev
   ```
6. Open your browser at [http://localhost:5173](http://localhost:5173) to view the example.

---
