import '../styles/globals.css';

export const metadata = {
  title: 'Enrique Casillas',
  name: "Enrique Casillas' personal website",
  description:
    'Contains projects and social media links from Enrique Casillas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
