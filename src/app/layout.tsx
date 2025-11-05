// src/app/layout.tsx
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { IranianSans } from "@/utils/fonts";

export const metadata = {
  title: "MyApp - Modern Dashboard",
  description: "A modern platform with RTL support, dark theme, Glassmorphism",
};

// این تابع زبان پیش‌فرض را بر اساس درخواست سرور تشخیص می‌دهد
function getDefaultLanguage() {
  // در سمت سرور می‌توانید از headers استفاده کنید
  // برای سادگی، از localStorage در کلاینت استفاده می‌کنیم
  return "fa"; // پیش‌فرض فارسی
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const defaultLang = getDefaultLanguage();
  const defaultDir = defaultLang === "fa" ? "rtl" : "ltr";

  return (
    <html lang={defaultLang} dir={defaultDir} className={IranianSans.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}