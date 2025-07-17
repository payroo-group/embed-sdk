# Payroo Embed React SDK

The React SDK provides a convenient way to embed payroll components in React applications.

Components are available for various payroll functionalities, such as payrun history, payslips, and more.
React components automatically handle the embed lifecycle and event handling specific to the component.
You can customize the behavior and appearance of the components using props.

## Installation

```bash
npm install @payroo/embed-sdk-react
```

## Usage

To embed a payroll component, you are first required to create an embed session and a signed component URL.
This can be done using the Payroo API.

### Step 1: Create an Embed URL

You'd typically do this on your server-side code.
_Note: an API key is required to access the Payroo embed API._

You can find an example of the server implementation in the [examples/server](./examples/server) directory.

Read [API Documentation](https://docs.payroo.com.au/payroo-api#tag/embeds)

### Step 2: Embed the Component

Component embed URL is typically fetched from your server-side code, similar to the JavaScript SDK.
You can use the `getEmbedUrl` function prop to provide the URL for the component.

This is useful when you want to fetch the URL dynamically or when the URL is generated based on user actions.
Simply pass a function that returns the embed URL to the component.

```tsx
import { PayrunList } from "@payroo-group/embed-sdk-react";

const url = "https://embed.payroo.com.au/component/payrun-history...";

const App = () => {
  return (
    <div>
      <h1>Payrun History</h1>
      <PayrunList
        getEmbedUrl={() => url}
        showFilter
        showCreateButton
        options={{
          extraAllowedOrigins: ["https://sandbox-embed.payroo.com.au"],
          autoHeightAdjust: true,
        }}
        onClickPayrun={(payrun) => {
          console.log("Payrun clicked:", payrun);
          window.location.href = `/payrun/${payrun.id}`;
        }}
      />
    </div>
  );
};

````

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

- Install dependencies:

```bash
npm install
```

- Run the playground:

```bash
npm run playground
```

- Run the unit tests:

```bash
npm run test
```

- Build the library:

```bash
npm build
```
