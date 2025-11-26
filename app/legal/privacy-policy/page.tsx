import { readFileSync } from "fs";
import { join } from "path";
import LegalPageLayout from "components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Daily Disaffirmation App",
  description: "Privacy Policy for Daily Disaffirmation App. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  const markdownPath = join(process.cwd(), "app", "legal", "PRIVACY_POLICY.md");
  const markdownContent = readFileSync(markdownPath, "utf-8");

  return (
    <LegalPageLayout
      content={markdownContent}
      title="Privacy Policy"
    />
  );
}
