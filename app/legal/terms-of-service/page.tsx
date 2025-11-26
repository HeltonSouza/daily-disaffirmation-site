import { readFileSync } from "fs";
import { join } from "path";
import LegalPageLayout from "components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Daily Disaffirmation App",
  description: "Terms of Service for Daily Disaffirmation App. Understand your rights and responsibilities.",
};

export default function TermsOfServicePage() {
  const markdownPath = join(process.cwd(), "app", "legal", "TERMS_OF_SERVICE.md");
  const markdownContent = readFileSync(markdownPath, "utf-8");

  return (
    <LegalPageLayout
      content={markdownContent}
      title="Terms of Service"
    />
  );
}
