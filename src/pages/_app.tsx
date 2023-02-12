import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Prompt"].join(","),
  },
  palette: {
    primary: {
      main: "#175CD3",
    },
    secondary: {
      light: "#0066ff",
      main: "#122045",
      contrastText: "#ffcc00",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#122045",
          color: "white",
        },
      },
    },
  },
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
