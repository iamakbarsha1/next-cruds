import TheLayout from "./TheLayout";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <TheLayout>
      <Component {...pageProps} />
    </TheLayout>
  );
}
