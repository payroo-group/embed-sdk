import { Embed, Components } from "@payroo-group/embed-sdk";

const proxyUrl = "http://localhost:5600"; // Run example/server to use this API

fetch(`${proxyUrl}/api/create-embed-url`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    component: Components.PAYRUN_LIST,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Embed URL created:", data);
    const { url } = data;
    const embed = new Embed(url, {
      extraAllowedOrigins: [
        "http://localhost:5173",
        "https://sandbox-embed.payroo.com.au",
      ],
      autoHeightAdjust: true,
    });

    // Mount the embed to the container
    const container = document.getElementById("payruns");
    embed.mount(container!);

    // Controls for mounting and unmounting the embed
    // For demo purposes only
    const mountButton = document.getElementById("mount");
    const unmountButton = document.getElementById("unmount");

    mountButton?.addEventListener("click", () => {
      embed.mount(container!);
    });
    unmountButton?.addEventListener("click", () => {
      embed.unmount();
    });
  })
  .catch((error) => {
    console.error("Error creating embed URL:", error);
  });
