import { redirect } from "next/navigation";
import { defaultLocale } from "@/data/translations";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
