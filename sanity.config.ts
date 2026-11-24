import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { structure } from "./sanity/structure";
import LeadInbox from "./sanity/tools/LeadInbox";

export default defineConfig({
  name: "dejohomes", title: "Dejohomes", basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "abc123xy",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool({ structure }), visionTool()],
  tools: (prev) => [...prev, { name: "lead-inbox", title: "Lead inbox", component: LeadInbox }],
  schema: { types: schemaTypes }
});
