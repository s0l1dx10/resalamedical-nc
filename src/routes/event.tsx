import { createFileRoute, redirect } from "@tanstack/react-router";

// Old single-event URL: send visitors to the Code Blue page.
export const Route = createFileRoute("/event")({
  beforeLoad: () => {
    throw redirect({ to: "/events/$slug", params: { slug: "code-blue" }, statusCode: 301 });
  },
});
